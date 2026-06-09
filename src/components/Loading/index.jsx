import React from "react";

const Loading = () => {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <div class="spinner-border" role="status" style = {{width: "5rem", height: "5rem"}}>
        <span class="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
