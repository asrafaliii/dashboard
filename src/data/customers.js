import { Avatar } from "@mui/material";

export const customersColumns = [
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "customer_name", //access nested data with dot notation
    header: "Customer Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address", //normal accessorKey
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
];

export const customers = [
  {
    id: 1,
    customer_name: "John Smith",
    email: "johnsmith@example.com",
    address: "123 Main Street, New York, NY 10001",
    phone: "212-555-1212",
    img: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    customer_name: "Jane Doe",
    email: "janedoe@example.com",
    address: "456 Park Avenue, New York, NY 10022",
    phone: "212-555-2323",
    img: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    customer_name: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Broadway, New York, NY 10011",
    phone: "212-555-3434",
    img: "/images/avatars/avatar3.png",
  },
  {
    id: 4,
    customer_name: "Alice Williams",
    email: "alicewilliams@example.com",
    address: "321 5th Avenue, New York, NY 10016",
    phone: "212-555-4545",
    img: "/images/avatars/avatar4.png",
  },
  {
    id: 5,
    customer_name: "Mike Thompson",
    email: "mikethompson@example.com",
    address: "246 West 34th Street, New York, NY 10001",
    phone: "212-555-5656",
    img: "/images/avatars/avatar5.png",
  },
  {
    id: 6,
    customer_name: "Samantha Jones",
    email: "samanthajones@example.com",
    address: "159 East 38th Street, New York, NY 10016",
    phone: "212-555-6767",
    img: "/images/avatars/avatar6.png",
  },
  {
    id: 7,
    customer_name: "Chris Anderson",
    email: "chrisanderson@example.com",
    address: "741 Lexington Avenue, New York, NY 10022",
    phone: "212-555-7878",
    img: "/images/avatars/avatar7.png",
  },
  {
    id: 8,
    customer_name: "Emily Williams",
    email: "emilywilliams@example.com",
    address: "423 3rd Avenue, New York, NY 10017",
    phone: "212-555-8989",
    img: "/images/avatars/avatar8.png",
  },
  {
    id: 9,
    customer_name: "David Johnson",
    email: "davidjohnson@example.com",
    address: "254 East 28th Street, New York, NY 10016",
    phone: "212-555-9898",
    img: "/images/avatars/avatar9.png",
  },
  {
    id: 10,
    customer_name: "Sarah Smith",
    email: "sarahsmith@example.com",
    address: "135 West 25th Street, New York, NY 10001",
    phone: "212-555-1212",
    img: "/images/avatars/avatar10.png",
  },
];
