import { memo, useEffect, useState, type ChangeEvent } from "react";
import { type IStore } from "../../../store";

interface IProps {
    readonly onChange: (value: string, name: keyof IStore) => void;
    readonly value: string;
    readonly name: keyof IStore;
}

export const Input = memo(({ onChange, value, name }: IProps) => {
    const [innderValue, setInnderValue] = useState(() => value);

    useEffect(() => {
        setInnderValue(value);
    }, [value]);

    const handleInnerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setInnderValue(value);
        onChange(value, name);
    }

    return (
        <div className="wrapper-input">
            <label className="label-input" htmlFor={name}>{name}</label>
            <input id={name} value={innderValue} onChange={handleInnerChange} />
        </div>
    );
});
