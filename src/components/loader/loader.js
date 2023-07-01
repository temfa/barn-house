import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

const LoaderStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  return (
    <LoaderStyle>
      <ThreeDots color="#5d5e8f" height="100" width="100" />
    </LoaderStyle>
  );
};

export default Loader;
