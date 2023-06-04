import { Paper, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import {
  dailyVisitsBarChartData,
  dailyVisitsBarChartOptions,
} from "../../../data/chartData";

const BarChart = () => {
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
      <Typography variant="h5">Daily Visits Insights</Typography>
      <Chart
        options={dailyVisitsBarChartOptions}
        series={dailyVisitsBarChartData}
        type="bar"
        width="100%"
        height="90%"
      />
    </Paper>
  );
};

export default BarChart;
