import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { orders, ordersColumns } from "../data/orders";

const Orders = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        orders
      </Typography>
      <Table
        data={orders}
        fields={ordersColumns}
        numberOfRows={orders.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview
        routeLink="orders"
      />
    </Box>
  );
};

export default Orders;
