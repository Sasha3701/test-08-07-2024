import { create } from "zustand";

export interface IStore {
    name: string;
    surname: string;
    age: string;
    hobby: string;
    salary: string;
}

export const useStore = create<IStore>(() => ({
    name: '',
    surname: '',
    age: '',
    hobby: '',
    salary: '',
}));
