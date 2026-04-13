import React from "react";
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 min-vw-100">
        <div className="">{error.status}</div>
        <div>{error.statusText}</div>
      </div>
    </>
  );
};

export default RouteError;
