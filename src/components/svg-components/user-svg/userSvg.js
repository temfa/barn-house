import React from "react";

const UserSvg = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="users">
        <g id="icon">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 6.5C14.5 8.98528 12.4853 11 10 11C7.51472 11 5.5 8.98528 5.5 6.5C5.5 4.01472 7.51472 2 10 2C12.4853 2 14.5 4.01472 14.5 6.5ZM12.5 6.5C12.5 7.88071 11.3807 9 10 9C8.61929 9 7.5 7.88071 7.5 6.5C7.5 5.11929 8.61929 4 10 4C11.3807 4 12.5 5.11929 12.5 6.5Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 18.9231C2 15.0996 5.09957 12 8.92308 12H11.0769C14.9004 12 18 15.0996 18 18.9231C18 20.0701 17.0701 21 15.9231 21H4.07692C2.92987 21 2 20.0701 2 18.9231ZM4 18.9231C4 16.2041 6.20414 14 8.92308 14H11.0769C13.7959 14 16 16.2041 16 18.9231C16 18.9656 15.9656 19 15.9231 19H4.07692C4.03444 19 4 18.9656 4 18.9231Z"
            fill={color}
          />
          <path
            d="M18.9198 20.0973C18.8164 20.4981 19.0774 21 19.4913 21H19.9231C21.0701 21 22 20.0701 22 18.9231C22 15.0996 18.9004 12 15.0769 12C14.9347 12 14.8829 12.1975 15.0036 12.2727C15.9494 12.8614 16.7705 13.6314 17.4182 14.5343C17.4621 14.5955 17.5187 14.6466 17.5835 14.685C19.0301 15.5424 20 17.1195 20 18.9231C20 18.9656 19.9656 19 19.9231 19H19.4494C19.1985 19 19 19.2106 19 19.4615C19 19.6811 18.9721 19.8941 18.9198 20.0973Z"
            fill={color}
          />
          <path
            d="M14.919 8.96308C14.974 8.85341 15.0645 8.76601 15.1729 8.70836C15.9624 8.28814 16.5 7.45685 16.5 6.5C16.5 5.54315 15.9624 4.71186 15.1729 4.29164C15.0645 4.23399 14.974 4.14659 14.919 4.03692C14.6396 3.48001 14.2684 2.97712 13.8252 2.5481C13.623 2.35231 13.7185 2 14 2C16.4853 2 18.5 4.01472 18.5 6.5C18.5 8.98528 16.4853 11 14 11C13.7185 11 13.623 10.6477 13.8252 10.4519C14.2684 10.0229 14.6396 9.51999 14.919 8.96308Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default UserSvg;
