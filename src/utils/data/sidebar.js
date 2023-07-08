import React from "react";
import DashboardSvg from "../../components/svg-components/dashboard-svg/dashboardSvg";
import ProductSvg from "../../components/svg-components/product-svg/productSvg";
import OrderSvg from "../../components/svg-components/orders-svg/orderSvg";
// import UserSvg from "../../components/svg-components/user-svg/userSvg";

const SidebarData = (color1, color2, color3, color4) => {
  return [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
      img: <DashboardSvg color={color1} />,
    },
    {
      name: "Product List",
      link: "/admin/product-list",
      img: <ProductSvg color={color2} />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      img: <OrderSvg color={color3} />,
    },
    // {
    //   name: "Create Admin",
    //   link: "/admin/create-admin",
    //   img: <UserSvg color={color4} />,
    // },
  ];
};

export default SidebarData;
