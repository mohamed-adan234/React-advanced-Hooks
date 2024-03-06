import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  return (
    <div>
      <form className="w-25">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input className="input-form"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default CustomHookExample2;
