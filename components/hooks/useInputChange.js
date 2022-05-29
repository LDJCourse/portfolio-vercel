import { useState } from "react";

const useInputChange = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInput = () => {
    setInputValue("");
  };

  return [inputValue, handleInputChange, resetInput];
};

export default useInputChange;
