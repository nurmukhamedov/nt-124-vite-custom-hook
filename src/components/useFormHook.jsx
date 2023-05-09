import { useState } from "react";

const useFormHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    console.log(value);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue({ [name]: value });
    }
    return [value, handleChange]
};

export default useFormHook;
