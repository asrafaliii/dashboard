import styled from "@emotion/styled";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { FiPhoneCall, FiSend, FiVideo } from "react-icons/fi";
import { FaEllipsisV } from "react-icons/fa";
import { messages } from "../../data/messages";

const Chat = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }));

  const MessageBox = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "8px",
    borderRadius: "5px",
    maxWidth: "400px",
    width: "100%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
    },
  }));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src="/images/avatars/profile-avatar.png"
              sx={{ width: "30px", height: "30px" }}
            />
          </StyledBadge>

          <Box>
            <Typography>Brian</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
              Active now
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Tooltip title="Call">
            <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
              <FiPhoneCall />
            </IconButton>
          </Tooltip>
          <Tooltip title="Video">
            <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
              <FiVideo />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
              <FaEllipsisV />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          mt: 3,
          height: "50vh",
          overflow: "auto",
          p: 1,
        }}
      >
        {messages.map(({ id, text, user }) => (
          <Box key={id}>
            <Box
              sx={{
                display: "flex",

                mt: 2,
                justifyContent: user.id === "u1" ? "flex-start" : "flex-end",
                gap: 2,
              }}
            >
              <Avatar
                src={`${
                  user.id === "u1"
                    ? "/images/avatars/profile-avatar.png"
                    : "/images/avatars/avatar3.png"
                }`}
                sx={{
                  width: "30px",
                  height: "30px",
                  order: user.id === "u2" && 2,
                }}
              />

              <Box>
                <MessageBox
                  sx={{
                    backgroundColor: user.id === "u1" ? "#027edd" : "chatBox",
                    color: user.id === "u1" && "#fff",
                    "&::before": {
                      backgroundColor: user.id === "u1" ? "#027edd" : "chatBox",
                      transform: `rotate(45deg) ${
                        user.id === "u1"
                          ? "translateX(-7px)"
                          : "translateX(7px)"
                      } `,
                      left: user.id === "u1" && 0,
                      right: user.id === "u2" && 0,
                      top: user.id === "u1" && "10px !important",
                    },
                  }}
                >
                  {text}
                </MessageBox>
                <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                  11:12 AM
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 4 }}>
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Avatar sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Send">
                  <IconButton sx={{ fontSize: "17px", color: "text.primary" }}>
                    <FiSend />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
          size="small"
          placeholder="Enter a message"
        />
      </Box>
    </>
  );
};

export default Chat;
