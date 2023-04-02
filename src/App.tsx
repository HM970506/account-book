import React, { useEffect, useRef } from "react";
import Classifications from "./classifications";
import getData from "./data/getData";
import FixedExpense from "./fixedExpense";
import Main from "./main";
import Result from "./result";
import ToBuy from "./toBuy";

function App() {
  useEffect(() => {
    getData();
  }, []);

  // let fileReader = new FileReader();
  // fileReader.onload = () => {
  //   const textFile = fileReader.result;

  //   if (typeof textFile == "string") {
  //     const array = textFile.split("\r\n").map((value) => {
  //       const now = value.split("\t");
  //       return {
  //         classification: now[0],
  //         name: now[1].replace("_", " "),
  //         value: parseInt(now[2]),
  //         grade: parseInt(now[3]),
  //       };
  //     });
  //     console.log(JSON.stringify(array));
  //   }
  // };

  // const fileread = (e: any) => {
  //   if (inputRef.current) {
  //     fileReader.readAsText(e.target.files[0]);
  //   }
  // };

  return (
    <div className="App">
      <div>
        <FixedExpense />
        <ToBuy />
      </div>
      <Main />
      <div>
        <Result />
        <Classifications />
      </div>
    </div>
  );
}

export default App;
