import React, { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    inputRef.current.value = "Mohamed adan";
    inputRef.current.style.backgroundColor = "coral";
    inputRef.current.style.hover = "red";
    paraRef.current.innerText = "Goodbye";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2 "
        />
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
