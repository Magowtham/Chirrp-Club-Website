import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";

function Test() {
  const [data, setData] = useState(true);
  useEffect(() => {
    const dataUpdate = () => {
      setData(!data);
    };
    const btn = document.querySelector(".data-btn");
    console.log(btn);
    btn.addEventListener("click", dataUpdate);
  }, [data]);

  // btn.addEventListener("click", dataUpdate);

  return (
    <>
      <h1>hello world</h1>
      <button className="data-btn">click</button>
      <p>data is :{data ? "true" : "false"}</p>
    </>
  );
}

export default Test;
