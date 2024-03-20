import { useEffect, useState } from "react";

function useLocalStorage(key) {

    const [value, setValue] = useState();

    const get = () => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    };

    const set = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    useEffect(() => {
        setValue(get());
    }, [key])

    return {
        value, set
    }
}

export default useLocalStorage;