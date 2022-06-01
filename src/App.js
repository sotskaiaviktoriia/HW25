import { useState } from "react";
import Title from "./components/Title";

const App = () => {
  const [isOpenedTitle, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  if (isOpenedTitle === true) {
    return (
      <div>
        <Title name="John" type="bold" />
        <Title name="Mike" type="normal" />
      </div>
    );
  }

  return (
    <div>
      <p>Closed title</p>
      <button onClick={handleOpen}>Open Title!</button>
    </div>
  );
};

export default App;
