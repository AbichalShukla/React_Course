import React, { useCallback, useMemo, useState } from "react";
import { useRef } from "react";

const Counter = () => {
  const [number, setNumber] = useState(10);
  let num = useRef(0);

  const handleClick = (e) => {
    e.stopPropagation();
    // change state
    // setNumber(number + 1);
    // update style
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  };

  const fibfx = useCallback(function fib(n) {
    // 1,,1,3,4,5 (febonachoi series  last to degite add and sun )
    if (n === 1 || n === 2) {
      return 1;
    }

    return fib(n - 1) + fib(n - 2);
  }, []);
  const fibMemo = useMemo(() => fibfx(number), [number, fibfx]);

  return (
    <div>
      <h1 style={{ color: "white" }}>
        {number}|{fibMemo}
      </h1>
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default Counter;
