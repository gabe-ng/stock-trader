import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class dashboard extends Component {
  state = {
    stocks: []
  };

  componentDidMount = () => {
      console.log("did mount");
      
    axios
      .get("https://ga-stocks.herokuapp.com/stocks")
      .then(response => {
          this.setState({
              stocks: response.data
          })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.stocks);
    let stocks = this.state.stocks.map((stock, index) => (
      <p key={index}>
        <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link> -{" "}
        {stock.symbol}
      </p>
    ));
    return <div>{stocks}</div>;
  }
}

export default dashboard;
