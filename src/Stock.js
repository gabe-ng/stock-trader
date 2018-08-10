import React, { Component } from "react";
import axios from "axios";
class StockDetail extends Component {
  state = {
    symbol: this.props.match.params.symbol,
    companyName: "",
    latestPrice: 0,
    change: 0,
    high: 0,
    low: 0
  };

  componentDidMount = () => {
    console.log("in did mount - stock");

    axios
      .get(
        `http://api.iextrading.com/1.0/stock/${
          this.state.symbol
        }/batch?types=quote`
      )
      .then(response => {
        console.log(response.data);

        this.setState({
          companyName: response.data.quote.companyName,
          latestPrice: response.data.quote.latestPrice,
          change: response.data.quote.change,
          high: response.data.quote.high,
          low: response.data.quote.low
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props.match.params.symbol);

    console.log(this.state);
    return (
      <div>
        <p>Stock Page</p>
        <h3>{this.state.companyName}</h3>
        <h4>{this.state.symbol}</h4>
        <ul>
          <li>Last Price: {this.state.lastPrice}</li>
          <li>Change: {this.state.change}</li>
          <li>High: {this.state.high}</li>
          <li>Low: {this.state.low}</li>
          <li>Open: {this.state.open}</li>
        </ul>
      </div>
    );
  }
}

export default StockDetail;
