import { Box, Grid, Paper, Typography } from "@mui/material";
import Users from "../components/inbox/Users";
import Chat from "../components/inbox/Chat";

const Inbox = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Inbox
      </Typography>
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <Users />
          </Grid>

          <Grid item xs={12} sm={6} lg={8}>
            <Chat />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Inbox;
