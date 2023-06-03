import { useState, useEffect, useMemo, useRef } from "react";
import { render } from "react-dom";

function ListGroup() {
  const [name, setName] = useState("John");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <div>my name is {name}</div>
      <div>number of render {renderCount.current}</div>
    </>
  );
}
export default ListGroup;
