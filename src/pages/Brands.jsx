import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { brands, brandsColumns } from "../data/brands";

const Brands = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Brands
      </Typography>
      <Table
        data={brands}
        fields={brandsColumns}
        numberOfRows={brands.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
      />
    </Box>
  );
};

export default Brands;
