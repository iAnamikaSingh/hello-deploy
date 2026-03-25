import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;