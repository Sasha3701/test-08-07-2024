import { useCallback, useEffect, useRef } from "react";
import { Input } from "../ui";
import { IStore, useStore } from "../../store";

export const MiniForm = () => {
    const storeRef = useRef(useStore.getState())

    useEffect(() => useStore.subscribe(
      state => (storeRef.current = state)
    ), [])
  
    const handleChange = useCallback((value: string, name: keyof IStore) => {
      storeRef.current[name] = value;
    }, []);
  
    console.log('Render...');
  
    return (
      <div>
        {Object.entries(storeRef.current).map(([name, value]) => (
          <Input
            key={name}
            name={name as keyof IStore}
            value={value}
            onChange={handleChange}
          />
        ))}
      </div>
    );
};
