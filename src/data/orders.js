export const ordersColumns = [
  {
    accessorKey: "product", //access nested data with dot notation
    header: "Product",
  },
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "order_date", //normal accessorKey
    header: "Date",
  },
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    //or in the component override callbacks like this
    Cell: ({ cell, row }) => (
      <div>
        {row.original.status === "Pending" && (
          <span className={`status ${cell.getValue()}`}>{cell.getValue()}</span>
        )}
        {row.original.status === "Delivered" && (
          <span className={`status ${cell.getValue()}`}>{cell.getValue()}</span>
        )}
        {row.original.status === "Cancelled" && (
          <span className={`status ${cell.getValue()}`}>{cell.getValue()}</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export const orders = [
  {
    id: 1001,
    order_date: "January 1, 2021",
    customer_name: "John Smith",
    product: "iPhone 12",
    status: "Pending",
    amount: 99,
  },
  {
    id: 1002,
    order_date: "January 2, 2021",
    customer_name: "Jane Doe",
    product: "Samsung Galaxy S20",
    status: "Cancelled",
    amount: 199,
  },
  {
    id: 1003,
    order_date: "January 3, 2021",
    customer_name: "Bob Johnson",
    product: "Google Pixel 4",
    status: "Delivered",
    amount: 299,
  },
  {
    id: 1004,
    order_date: "January 4, 2021",
    customer_name: "Alice Williams",
    product: "Apple Macbook Pro",
    status: "Pending",
    amount: 399,
  },
  {
    id: 1005,
    order_date: "January 5, 2021",
    customer_name: "Mike Thompson",
    product: "Dell XPS 13",
    status: "Delivered",
    amount: 499,
  },
  {
    id: 1006,
    order_date: "January 6, 2021",
    customer_name: "Samantha Jones",
    product: "Lenovo Thinkpad",
    status: "Cancelled",
    amount: 599,
  },
  {
    id: 1007,
    order_date: "January 7, 2021",
    customer_name: "Chris Anderson",
    product: "Microsoft Surface Laptop",
    status: "Pending",
    amount: 699,
  },
  {
    id: 1008,
    order_date: "January 8, 2021",
    customer_name: "Emily Williams",
    product: "HP Spectre x360",
    status: "Delivered",
    amount: 799,
  },
  {
    id: 1009,
    order_date: "January 9, 2021",
    customer_name: "David Johnson",
    product: "Asus ROG Zephyrus",
    status: "Pending",
    amount: 899,
  },
  {
    id: 1010,
    order_date: "January 10, 2021",
    customer_name: "Sarah Smith",
    product: "Acer Aspire 5",
    status: "Delivered",
    amount: 999,
  },
  {
    id: 1011,
    order_date: "January 11, 2021",
    customer_name: "Tom Johnson",
    product: "Omega Seamaster",
    status: "Pending",
    amount: 199,
  },
  {
    id: 1012,
    order_date: "January 12, 2021",
    customer_name: "Sandy Williams",
    product: "Tag Heuer Carrera",
    status: "Delivered",
    amount: 299,
  },
  {
    id: 1013,
    order_date: "January 13, 2021",
    customer_name: "Anna Smith",
    product: "Cartier Tank",
    status: "Pending",
    amount: 399,
  },
  {
    id: 1014,
    order_date: "January 14, 2021",
    customer_name: "Mike Thompson",
    product: "Breitling Navitimer",
    status: "Cancelled",
    amount: 499,
  },
  {
    id: 1015,
    order_date: "January 15, 2021",
    customer_name: "Samantha Jones",
    product: "IWC Pilot",
    status: "Delivered",
    amount: 599,
  },
  {
    id: 1016,
    order_date: "January 16, 2021",
    customer_name: "Chris Anderson",
    product: "Patek Philippe Nautilus",
    status: "Delivered",
    amount: 699,
  },
  {
    id: 1017,
    order_date: "January 17, 2021",
    customer_name: "Emily Williams",
    product: "Rolex Submariner",
    status: "Pending",
    amount: 799,
  },
  {
    id: 1018,
    order_date: "January 18, 2021",
    customer_name: "David Johnson",
    product: "Audemars Piguet Royal Oak",
    status: "Delivered",
    amount: 899,
  },
  {
    id: 1019,
    order_date: "January 19, 2021",
    customer_name: "Sarah Smith",
    product: "Tudor Black Bay",
    status: "Delivered",
    amount: 999,
  },
  {
    id: 1020,
    order_date: "January 20, 2021",
    customer_name: "John Smith",
    product: "Panerai Luminor",
    status: "Cancelled",
    amount: 199,
  },
];
