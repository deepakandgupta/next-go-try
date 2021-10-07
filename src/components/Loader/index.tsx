import { CircularProgress, LinearProgress } from "@material-ui/core";
import React from "react";

export default function Loader() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0%",
          left: "0%",
          width: "100%",
          /* bring your own prefixes */
          zIndex: 100000,
        }}
      >
        <LinearProgress />
      </div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          /* bring your own prefixes */
          transform: "translate(-50%, -50%)",
          zIndex: 100000,
        }}
      >
        <CircularProgress />
      </div>
    </>
  );
}
