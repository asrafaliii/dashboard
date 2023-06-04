import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import AddCategory from "../components/AddCategory";
import Table from "../components/Table";
import { categories, categoriesColumns } from "../data/categories";

const ProductCategories = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Categories</Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FiPlus />}
          sx={{ borderRadius: "20px" }}
          onClick={handleClickOpen}
        >
          Add Category
        </Button>
      </Box>
      <AddCategory open={open} handleClose={handleClose} />
      <Table
        data={categories}
        fields={categoriesColumns}
        numberOfRows={categories.length}
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

export default ProductCategories;
