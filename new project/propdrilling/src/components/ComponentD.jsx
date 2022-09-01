import React from "react";

function ComponentD(props) {
  let changeName = () => {
    props.setData("S R");
  };
  return (
    <div>
      ComponentD
      {props.userName}
      <br></br>
      <button onClick={changeName}>Change the data</button>
    </div>
  );
}

export default ComponentD;