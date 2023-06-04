// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { lineChartData, lineChartOptions } from "../../../data/chartData";

// const LineChart = () => {
//   const [chartData, setChartData] = useState([]);
//   const [chartOptions, setChartOptions] = useState([]);

//   return (
//     <ReactApexChart
//       options={lineChartOptions}
//       series={lineChartData}
//       type="line"
//       width="100%"
//       height="100%"
//     />
//   );
// };

// export default LineChart;

import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="line"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
