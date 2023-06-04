import { Divider, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Notifications = () => {
  return (
    <Box>
      <Typography variant="subtitle1">Notifications</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.8, pb: 2 }}>
        All Notification settings here
      </Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Enable all notifications</Typography>
          <Switch defaultChecked />
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Send email to alert new notifications</Typography>
          <Switch />
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Mute all notifications</Typography>
          <Switch />
        </Box>
      </Box>
    </Box>
  );
};

export default Notifications;
