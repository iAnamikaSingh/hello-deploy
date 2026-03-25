import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch("https://hello-deploy-backend.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;