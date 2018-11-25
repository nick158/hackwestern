import React, {Component} from 'react'
import socketIOClient from "socket.io-client";
require('dotenv').config();

class TwitterFeed extends Component{
  constructor(props) {
    super(props);
    this.state = { items: [], searchTerm: "wildfire" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const socket = socketIOClient('http://localhost:3000/');

    socket.on('connect', () => {
      console.log("Socket Connected");
      socket.on("tweets", data => {
        let newList = [data.text].concat(this.state.items);
        console.log(data)
        this.setState({ items: newList });
      });
    });
    socket.on('disconnect', () => {
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
  }
  handleChange(event) {
  this.setState({ searchTerm: event.target.value });
}
  render(){
    let items = this.state.items;

    let itemsCards = <div>
      {items.map((x,i) =>
        <p>{x}</p>
      )}
    </div>

    let loading = <div>
    <p>Waiting for Twitter to update</p>
    </div>

    return(
      <div>
      {
        items.length > 0 ? itemsCards : loading
      }
      </div>
    )
  }

}

export default TwitterFeed;
