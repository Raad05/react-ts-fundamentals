// import { useState, ChangeEvent } from "react";
// import "./App.css";
// import BtnStyle from "./components/BtnStyle";
// import Post from "./components/Post";
// import DataFetch from "./components/DataFetch";
// import User from "./components/User";
// import Button from "./components/Button";

// const users = [
//   {
//     name: "Yamin",
//     age: 24,
//     languages: ["C", "C++", "C#", "Java"],
//   },
//   {
//     name: "Raad",
//     age: 24,
//     languages: ["Python", "JavaScript", "TypeScript", "Solidity"],
//   },
// ];

// const btnStyle = { color: "red" };

// type UserType = {
//   name: string;
//   age: number;
// };

function App() {
  // const [users, setUsers] = useState<null | UserType>(null); // or, ...<User>({} as User)

  // const user: UserType = {
  //   name: "Raad",
  //   age: 24,
  // };

  // const [text, setText] = useState<null | string>(null);

  // const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   const typedText = e.target.value;
  //   setText(typedText);
  // };

  return (
    <div className="App">
      <h1>ReactTS Tutorial</h1>
      {/* <User users={users}></User>
      <DataFetch status="success"></DataFetch>
      <Button>Click Me</Button>
      <Post></Post>
      <BtnStyle style={btnStyle}></BtnStyle>
      <button onClick={() => setUsers(user)}>Get Users</button>
      <p>Name: {users?.name}</p>
      <p>Age: {users?.age}</p>
      <input onChange={handleInput} type="text" placeholder="Start typing..." />
      <p>{text}</p> */}
    </div>
  );
}

export default App;
