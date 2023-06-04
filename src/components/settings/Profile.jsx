import { Avatar, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Profile = () => {
  return (
    <Box>
      <Typography variant="subtitle1">Profile</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.8, pb: 2 }}>
        Update your photo and profile here
      </Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1">Profile image</Typography>
        <Avatar src="/images/avatars/profile-avatar.png" />
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="First Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={"Wabweni"}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={"Brian"}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue={"Wabweni Brian"}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue={"wabwenib66@gmail.com"}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Phone"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue={"+256 775 358738"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
