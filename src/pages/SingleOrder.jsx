import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { FaTruck } from "react-icons/fa";
import { FiCalendar, FiMap, FiUser } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Table from "../components/Table";
import { orderDetails, orderDetailsColumns } from "../data/OrderDetails";
import { orders } from "../data/orders";

const SingleProduct = () => {
  const { id } = useParams();
  const order = orders.find((order) => order.id === parseInt(id));

  const { customer_name, order_date, status } = order;

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
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
        <Typography variant="h5">Order details</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ my: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FiCalendar />
              <Typography variant="h6">{order_date}</Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ opacity: 0.7, pb: 1 }}>
              Order ID #{order.id}
            </Typography>
          </Box>
          <Box>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
              className={status}
            >
              {status}
            </span>
          </Box>
        </Box>
        <Divider />
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box>
                <IconButton
                  sx={{
                    color: "#049bf5",
                    backgroundColor: "rgba(4,155,245, 0.2) !important",
                  }}
                >
                  <FiUser />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontSize: "20px", mb: 2 }}>
                  Customer
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Name: <span style={{ opacity: 0.7 }}>{customer_name}</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Email: <span style={{ opacity: 0.7 }}>example@gmail.com</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Email: <span style={{ opacity: 0.7 }}>+256 775 358738</span>
                </Typography>
                <Link
                  style={{
                    padding: "3px 10px",
                    color: "#049bf5",
                    backgroundColor: "rgba(4, 155, 245,0.2)",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  View Profile
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box>
                <IconButton
                  sx={{
                    color: "#049bf5",
                    backgroundColor: "rgba(4,155,245, 0.2) !important",
                  }}
                >
                  <FaTruck />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontSize: "20px", mb: 2 }}>
                  Order Info
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Shipping: <span style={{ opacity: 0.7 }}>Forgo express</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Payment Method: <span style={{ opacity: 0.7 }}>Card</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Status: <span style={{ opacity: 0.7 }}>New</span>
                </Typography>
                <Link
                  style={{
                    padding: "3px 10px",
                    color: "#049bf5",
                    backgroundColor: "rgba(4, 155, 245,0.2)",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  View all
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box>
                <IconButton
                  sx={{
                    color: "#049bf5",
                    backgroundColor: "rgba(4,155,245, 0.2) !important",
                  }}
                >
                  <FiMap />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontSize: "20px", mb: 2 }}>
                  Delivery
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  City: <span style={{ opacity: 0.7 }}>Kampala, Uganda</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2, opacity: 0.7 }}
                >
                  Block F, House 528, Floor 6
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2, opacity: 0.7 }}
                >
                  P.O Box 893
                </Typography>

                <Link
                  style={{
                    padding: "3px 10px",
                    color: "#049bf5",
                    backgroundColor: "rgba(4, 155, 245,0.2)",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  View on Map
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Products details
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table
            data={orderDetails}
            fields={orderDetailsColumns}
            numberOfRows={orderDetails.length}
            enableTopToolBar={false}
            enableBottomToolBar={false}
            enablePagination={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enableEditing={false}
            enableColumnDragging={false}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
                width: "200px",
              }}
            >
              <Typography variant="subtitle2">Subtotal</Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                $7,523
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
                width: "200px",
              }}
            >
              <Typography variant="subtitle2">Tax(20%)</Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                $245
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
                width: "200px",
              }}
            >
              <Typography variant="subtitle2">Discount(10%)</Typography>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                123
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
                width: "200px",
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" sx={{ opacity: 0.8 }}>
                $8,532
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SingleProduct;
