import { useState } from "react";

const MyButton1 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} type="button" className="btn btn-primary">
      Clicked {count} times
    </button>
  )
}

const MyButton2 = ({ count, onClick }) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary">
      Clicked {count} times
    </button>
  )
}


export const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <MyButton1 />
    
    // <div className="p-4">
    //   <div className="row align-items-start">
    //     <div className="col">
    //       <h4>Counters that update separately</h4>
    //       <MyButton1 />
    //       <span className="ms-4"></span>
    //       <MyButton1 />
    //     </div>

    //     <div className="col">
    //       <h4>Counters that update together</h4>
    //       <MyButton2 count={count} onClick={handleClick} />
    //       <span className="ms-4"></span>
    //       <MyButton2 count={count} onClick={handleClick} />
    //     </div>
    //   </div>

    // </div>
  )
}