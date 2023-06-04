import { Box, Chip, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const { category, image, price, instock, product_name, short_description } =
    product;

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h4">Product Details</Typography>
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
          <Grid item xs={12} md={6} lg={4}>
            <img
              src={image}
              alt={product_name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Typography variant="h4">{product_name}</Typography>
            <Typography variant="h5">
              <span
                style={{
                  opacity: 0.7,
                  textDecoration: "line-through",
                  fontSize: "13px",
                }}
              >
                $1829
              </span>{" "}
              ${price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">284 customer reviews</Typography>
              <Rating
                value={Number((Math.random() * 5).toFixed(2))}
                precision={0.5}
                readOnly
              />
            </Box>
            <Typography variant="subtitle2">{short_description}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">Category</Typography>
              <Chip label={category} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 2 }}>
              <Typography variant="subtitle2">Availability</Typography>
              <Chip
                label={instock ? "In stock" : "Out Of Stock"}
                color={instock ? "success" : "error"}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SingleProduct;
