import React, { useEffect } from 'react';
import Classifications from './classifications';
import getData from './data/getData';
import FixedExpense from './fixedExpense';
import Main from './main';
import Result from './result';
import ToBuy from './toBuy';

function App() {
  
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      <div><FixedExpense/><ToBuy/></div>
      <Main/>
      <div><Result/><Classifications/></div>
    </div>
  );
}

export default App;
