import { useEffect, useState } from "react";

import Button from "./Button";
import Card from "./Card";
import Header from "./Header";
import Loader from "./Loader";

function App() {
  const [dataObj, setDataObj] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setDataObj(data);
        console.log(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="container">
        {isLoading && <Loader />}
        {dataObj && dataObj.map((data) => <Card question={data} />)}
      </div>
      <Button />
    </div>
  );
}

export default App;
