import { Box } from "@mui/system";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircularBar = ({ percentage, pathColor }) => {
  return (
    <Box sx={{ width: "65px", height: "65px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        className="circular-bar"
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          strokeLinecap: "round",
          pathTransition: "stroke-dashoffset 0.5s ease 0s",
          textSize: "20px",
          pathColor: `${pathColor}`,
          textColor: "#A3AED0",
          trailColor: "#A3AED0",
        })}
      />
    </Box>
  );
};

export default CircularBar;
