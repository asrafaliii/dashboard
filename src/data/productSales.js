export const productSalesColumns = [
  {
    accessorKey: "product_name", //access nested data with dot notation
    header: "Product",
  },
  {
    accessorKey: "sales",
    header: "Sales",
  },
  {
    accessorKey: "stock", //normal accessorKey
    header: "Stock",
  },
  {
    accessorKey: "amount", //normal accessorKey
    header: "Amount",
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    //or in the component override callbacks like this
    Cell: ({ cell, row }) => (
      <div>
        {row.original.status === "in stock" && (
          <span style={{ color: "#388b84", textTransform: "capitalize" }}>
            {cell.getValue()}
          </span>
        )}
        {row.original.status === "out of stock" && (
          <span style={{ color: "#fd4332", textTransform: "capitalize" }}>
            {cell.getValue()}
          </span>
        )}
      </div>
    ),
  },
];

export const productSales = [
  {
    product_sale_id: 1,
    product_name: "iPhone 12",
    sales: 2324,
    stock: 190,
    amount: 19999,
    status: "in stock",
  },
  {
    product_sale_id: 2,
    product_name: "Samsung Galaxy S20",
    sales: 3244,
    stock: 294,
    amount: 17999,
    status: "out of stock",
  },
  {
    product_sale_id: 3,
    product_name: "Google Pixel 4",
    sales: 4244,
    stock: 594,
    amount: 14999,
    status: "in stock",
  },
  {
    product_sale_id: 4,
    product_name: "Apple Macbook Pro",
    sales: 5244,
    stock: 874,
    amount: 29999,
    status: "in stock",
  },
  {
    product_sale_id: 5,
    product_name: "Dell XPS 13",
    sales: 3744,
    stock: 694,
    amount: 19999,
    status: "out of stock",
  },
  {
    product_sale_id: 6,
    product_name: "Lenovo Thinkpad",
    sales: 2944,
    stock: 594,
    amount: 14999,
    status: "in stock",
  },
  {
    product_sale_id: 7,
    product_name: "Microsoft Surface Laptop",
    sales: 4244,
    stock: 874,
    amount: 29999,
    status: "in stock",
  },
  {
    product_sale_id: 8,
    product_name: "HP Spectre x360",
    sales: 2544,
    stock: 294,
    amount: 19999,
    status: "out of stock",
  },
  {
    product_sale_id: 9,
    product_name: "Asus ROG Zephyrus",
    sales: 3244,
    stock: 594,
    amount: 14999,
    status: "in stock",
  },
  {
    product_sale_id: 10,
    product_name: "Acer Aspire 5",
    sales: 3944,
    stock: 874,
    amount: 29999,
    status: "out of stock",
  },
];
