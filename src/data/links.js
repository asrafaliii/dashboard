import { BsCurrencyDollar, BsFillCartFill } from 'react-icons/bs';
import { FaHandshake, FaShare } from 'react-icons/fa';
import {
  AiFillHome,
  AiOutlineShopping,
  AiOutlineUser,
  AiTwotoneAppstore,
} from 'react-icons/ai';
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from 'react-icons/fi';

export const links = [
  {
    name: 'Dashboard',
    icon: <FiHome />,
    url: '/',
  },
  {
    name: 'Purchase',
    icon: <AiOutlineShopping />,
    subLinks: [
      {
        name: 'Manage Purchase',
        url: '/purchase',
      },
      {
        name: 'Add Purchase',
        url: '/purchase/add',
      },
      {
        name: 'Due Purchase',
        url: '/purchase',
      },
    ],
  },
  {
    name: 'Sell',
    icon: <BsFillCartFill />,
    subLinks: [
      {
        name: 'Manage Sell',
        url: '/sales/analysis',
      },
      {
        name: 'POS',
        url: '/pos',
      },
      {
        name: 'Due Sell',
        url: '/duesell',
      },
    ],
  },
  {
    name: 'Stock',
    icon: <AiTwotoneAppstore />,
    subLinks: [
      {
        name: 'Stock',
        url: '/stock',
      },
      {
        name: 'Stock Alert',
        url: '/stockalert',
      },
    ],
  },
  {
    name: 'Damage',
    icon: <AiFillHome />,
    subLinks: [
      {
        name: 'Manage Damage',
        url: '/damage',
      },
      {
        name: 'Add Damage',
        url: '/adddamage',
      },
    ],
  },
  {
    name: 'Customer',
    icon: <AiOutlineUser />,
    subLinks: [
      {
        name: 'Customer Group',
        url: '/customergroup',
      },
      {
        name: 'Manage Customers',
        url: '/customers',
      },

      {
        name: 'Add Customer',
        url: '/addcustomer',
      },
    ],
  },
  {
    name: 'Supplier',
    icon: <AiOutlineUser />,
    subLinks: [
      {
        name: 'Manage Supplier',
        url: '/suppliers',
      },
      {
        name: 'Add Supplier',
        url: '/addsupplier',
      },
    ],
  },

  {
    name: 'Product Management',
    icon: <FiShoppingBag />,
    subLinks: [
      {
        name: 'Product Category',
        url: '/products/categories',
      },
      {
        name: 'Brands',
        icon: <FiLayers />,
        url: '/brands',
      },
      {
        name: 'Products',
        url: '/products',
      },
    ],
  },
  // {
  //   name: 'Orders',
  //   icon: <FiShoppingCart />,
  //   subLinks: [
  //     {
  //       name: 'All Orders',
  //       url: '/orders',
  //     },
  //     {
  //       name: 'Order Template',
  //       url: '/orders/template',
  //     },
  //   ],
  // },
  // {
  //   name: 'Transactions',
  //   icon: <FaHandshake />,
  //   url: '/transactions',
  // },

  // {
  //   name: 'Reviews',
  //   icon: <FiMessageCircle />,
  //   url: '/reviews',
  // },
  // {
  //   name: 'Settings',
  //   icon: <FiSettings />,
  //   url: '/settings',
  // },
  // {
  //   name: 'Inbox',
  //   icon: <FiMail />,
  //   url: '/inbox',
  // },
];
