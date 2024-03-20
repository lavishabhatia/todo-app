import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./components/todo/Todo";
import Header from "./components/Header";
import Container from "./ui/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <Todo />
      </Container>
    </>
  );
}

export default App;
