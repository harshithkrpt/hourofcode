import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class ChartJs extends Component {
  state = {
    data: {
      labels: ["Boston", "india"],
      datasets: [
        {
          label: "Population",
          data: [12234, 12342]
        }
      ]
    }
  };
  render() {
    return (
      <div>
        <Bar
          data={this.state.data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
