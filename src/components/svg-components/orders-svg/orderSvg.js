import React from "react";

const OrderSvg = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cart">
        <g id="icon">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.638 4.12231C6.45691 3.18063 5.63292 2.5 4.67398 2.5H3C2.44772 2.5 2 2.94772 2 3.5C2 4.05228 2.44772 4.5 3 4.5L4.67398 4.5L6.55002 14.2554C6.91221 16.1388 8.56018 17.5 10.478 17.5H16.6873C18.5044 17.5 20.0932 16.2752 20.5556 14.518L21.8068 9.76348C22.3074 7.86122 20.8726 6 18.9056 6H6.99909L6.638 4.12231ZM7.38371 8L8.51403 13.8777C8.69513 14.8194 9.51911 15.5 10.478 15.5H16.6873C17.5959 15.5 18.3903 14.8876 18.6215 14.009L19.8727 9.25449C20.0395 8.62041 19.5613 8 18.9056 8H7.38371Z"
            fill={color}
          />
          <path
            d="M8.74997 21.5C7.92154 21.5 7.24997 20.8284 7.24997 20C7.24997 19.1716 7.92154 18.5 8.74997 18.5C9.5784 18.5 10.25 19.1716 10.25 20C10.25 20.8284 9.5784 21.5 8.74997 21.5Z"
            fill={color}
          />
          <path d="M17.5 21.5C16.6715 21.5 16 20.8284 16 20C16 19.1716 16.6715 18.5 17.5 18.5C18.3284 18.5 19 19.1716 19 20C19 20.8284 18.3284 21.5 17.5 21.5Z" fill={color} />
        </g>
      </g>
    </svg>
  );
};

export default OrderSvg;
