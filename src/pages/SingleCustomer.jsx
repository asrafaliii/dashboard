import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Table from "../components/Table";
import { customers } from "../data/customers";
import { invoiceData, invoiceDataColumns } from "../data/invoiceList";

const SingleProduct = () => {
  const { id } = useParams();
  const customer = customers.find((customer) => customer.id === parseInt(id));

  const { customer_name, email, address, phone, img } = customer;

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h5">Customer Details</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: 4 }}>
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
            <Box sx={{ textAlign: "center" }}>
              <Avatar
                src={img}
                sx={{ width: "80px", height: "80px", mx: "auto" }}
              />
              <Typography variant="h6" sx={{ my: 1 }}>
                {customer_name}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Email: <span style={{ opacity: 0.7 }}>{email}</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Phone: <span style={{ opacity: 0.7 }}>{phone}</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "15px", mb: 2 }}
                >
                  Address: <span style={{ opacity: 0.7 }}>{address}</span>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Typography variant="h6">Invoice List</Typography>

          <Table
            data={invoiceData}
            fields={invoiceDataColumns}
            numberOfRows={invoiceData.length}
            enableTopToolBar={false}
            enableBottomToolBar={false}
            enablePagination={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enableEditing={false}
            enableColumnDragging={false}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
