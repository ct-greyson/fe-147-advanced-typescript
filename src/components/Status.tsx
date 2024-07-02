import React from "react";

// Union String Literals
// defining a type to be one of many specific strings
// in this case our status can ONLY be "loading", "success", or "error"
interface StatusProp {
  status: "loading" | "success" | "error";
}

const Status = () => {
  const statusInput: StatusProp = {
    status: "success",
  };

  let message: string = "";

  if (statusInput.status === "loading") {
    message = "Loading...";
  } else if (statusInput.status === "success") {
    message = "Success! Your data has been loaded"
  } else if (statusInput.status === "error") {
    message = "Error loading data"
  }

  return <div>
    <h3>Status: {message}</h3>
  </div>;
};

export default Status;
