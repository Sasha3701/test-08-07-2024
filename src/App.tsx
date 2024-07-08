import { useState } from "react";
import { MiniForm } from "./components";
import { useStore } from "./store";

export const App = () => {
  const [visibleForm, setVisibleForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeVisible = () => setVisibleForm(prevState => !prevState);

  const handleConsoleLog = () => console.log(useStore.getState());

  const handleFetchNewData = () => {
    setIsLoading(true);
    setTimeout(() => {
      useStore.setState(
        {
          age: '28',
          hobby: 'football',
          name: 'Alex',
          salary: '1KK',
          surname: 'Kozlov'
        }
      );
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div 
      style={{
        pointerEvents: isLoading ? 'none' : 'auto',
        opacity: isLoading ? 0.4 : 1
      }}
      className="container"
    >
      <div className="actions">
        <button onClick={handleChangeVisible}>Change visible form...</button>
        <button onClick={handleFetchNewData}>Fetch new data...</button>
        <button onClick={handleConsoleLog}>Console result...</button>
      </div>
      {visibleForm && <MiniForm />}
    </div>
  );
};
