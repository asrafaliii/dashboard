import { Paper, Typography } from "@mui/material";
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
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          padding: "15px",
          height: { xs: "380px", md: "100%" },
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
        }}
      >
        <Typography variant="h5">Sales Statistics</Typography>
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="line"
          width="100%"
          height="90%"
        />
      </Paper>
    );
  }
}

export default LineChart;
