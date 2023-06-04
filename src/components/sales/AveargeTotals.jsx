import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CircularBar from "./CircularBar";
import { FiInfo } from "react-icons/fi";

const AveargeTotals = () => {
  return (
    <Paper
      sx={{
        boxShadow: "none !important",
        borderRadius: "12px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
        height: "100%",
        padding: "16px",
      }}
    >
      <Typography variant="h5">Average Total Sales</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
        2022-2023
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          marginTop: 2,
          justifyContent: "center",
          pb: 2,
          flexWrap: { xs: "wrap", md: "no-wrap" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CircularBar percentage={46} pathColor="#99d1a6" />
          <Box>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              92,980
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              Cases
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CircularBar percentage={74} pathColor="#a288ec" />
          <Box>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              23,980
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              Applications
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CircularBar percentage={14} pathColor="#fc424a" />
          <Box>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              14,980
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              Products
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 2, pt: 2 }}>
        <Box>
          <FiInfo />
        </Box>
        <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
          Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          aliquam quos minima, aperiam iste doloremque quis reprehenderit ad
          placeat beatae veniam natus tempore quod a?
        </Typography>
      </Box>
    </Paper>
  );
};

export default AveargeTotals;
