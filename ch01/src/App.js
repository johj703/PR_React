import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    /*
    수정하는 함수를 사용할 때 두 가지 옵션이 있음
    1. 함수를 보낼 수 있음.
    */
    setToDos((currentArray) => [toDo, ...currentArray]);
    /*
    2. ("") 형태(지정한 data를 가지고 있다.)로 보낼 수 있음.
    */
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do!"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
