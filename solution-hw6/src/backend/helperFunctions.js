import { useState, useEffect } from 'react';

// This function allows use for state variables to be stored in localStorage
// from puinote-lab06 from PUI Lab Section E
const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
}

export default useLocalStorage;