import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { reviews, reviewsClumns } from "../data/reviews";

const Reviews = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Reviews
      </Typography>
      <Table
        data={reviews}
        fields={reviewsClumns}
        numberOfRows={reviews.length}
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

export default Reviews;
