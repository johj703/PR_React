import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  // useEffect 함수는 코드가 딱 한 번만 실행 될 수 있도록 보호해 준다
  useEffect(() => {
    console.log("call the API");
  }, []);
  // State를 변경할 때, 모든 코드들은 항상 다시 실행된다
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
