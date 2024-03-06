import React, { useRef, useEffect, useState } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState();
  const render = useRef(1);

  useEffect(() => {
    render.current = render.current + 1;
  });
  return (
    <div>
      <h1>Render: {render.current}</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-1"
        />
      </form>
    </div>
  );
};


export default UseRefExample2;
