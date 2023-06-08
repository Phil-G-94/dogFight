import { useState } from "react";

const useFormValidation = (validate) => {
    // STATE
    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

    // VALIDATION
    const valueIsValid = validate(enteredValue);

    // ERROR STATE
    const hasError = !valueIsValid && enteredValueIsTouched;

    // HANDLERS

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setEnteredValueIsTouched(true);
    };

    // RESET

    const reset = () => {
        setEnteredValue("");
        setEnteredValueIsTouched(false);
    };

    // RETURN OBJ

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useFormValidation;
