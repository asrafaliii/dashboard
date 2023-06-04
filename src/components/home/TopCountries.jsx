import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { countriesData } from "../../data/TopCountries";

const TopCountries = () => {
  return (
    <Box sx={{ padding: "15px" }}>
      <Typography variant="h5">Top Countries</Typography>
      <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>
        Sales perfomance by country
      </Typography>
      <Box sx={{ my: 2 }}>
        {countriesData.map(({ id, name, amount, flag }) => (
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            spacing={2}
            key={id}
            sx={{ my: 3 }}
          >
            <Stack direction={"row"} alignItems="center" spacing={1}>
              <Avatar src={flag} sx={{ width: 30, height: 30 }} />
              <Typography>{name}</Typography>
            </Stack>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              ${amount}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default TopCountries;
