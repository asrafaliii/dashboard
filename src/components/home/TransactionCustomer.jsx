import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { customers } from "../../data/customers";
import { transactions, transactionsColumns } from "../../data/transactions";
import Table from "../Table";

const TransactionCustomer = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",

            padding: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ pb: 1 }}>
              New Customer List
            </Typography>
            <FaEllipsisH />
          </Box>
          <Divider />
          <Box sx={{ marginTop: 1 }}>
            {customers
              .slice(0, 4)
              .map(({ customer_id, customer_name, email, img }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "10px 0",
                  }}
                  key={customer_id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar src={img} sx={{ width: 30, height: 30 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "18px" }}>
                        {customer_name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                        {email}
                      </Typography>
                    </Box>
                  </Box>
                  <FaEllipsisH />
                </Box>
              ))}
          </Box>
          <Divider />
          <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 1 }}>
            <Link to="/customers" className="link">
              View more
            </Link>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Transaction List</Typography>
          <FaEllipsisH />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Table
            data={transactions}
            fields={transactionsColumns}
            numberOfRows={3}
            enableTopToolBar={false}
            enableBottomToolBar={false}
            enablePagination={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enableEditing={false}
            enableColumnDragging={false}
          />
        </Box>
        <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/transactions" className="link">
            View all transactions
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TransactionCustomer;
