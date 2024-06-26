import React, { useEffect, useRef, useState } from "react";

const Display = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const displayRef = useRef(null);
  const resultRef = useRef(null);

  const isValidInput = (input) => {
    const regex = /^[0-9+\-*/.]*$/;
    return regex.test(input);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (isValidInput(value)) {
      setDisplay(value);
    }
  };

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay(display.slice(0, -1));
    } else {
      const newValue = display + value;
      if (isValidInput(newValue)) {
        setDisplay(newValue);
      }
    }
  };

  const handleEquals = () => {
    try {
      if (/^[0-9+\-*/.]+$/.test(display)) {
        setResult(eval(display).toString());
      } else {
        setResult("Error");
      }
    } catch (e) {
      setResult("Error");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEquals();
    }
  };

  const handleWheel = (e) => {
    if (e.currentTarget === displayRef.current) {
      displayRef.current.scrollLeft += e.deltaY;
    }
    if (e.currentTarget === resultRef.current) {
      resultRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    const displayElement = displayRef.current;
    const resultElement = resultRef.current;

    const addWheelListener = (element) => {
      if (element) {
        element.addEventListener("mouseenter", () => element.addEventListener("wheel", handleWheel));
        element.addEventListener("mouseleave", () => element.removeEventListener("wheel", handleWheel));
      }
    };

    addWheelListener(displayElement);
    addWheelListener(resultElement);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (displayElement) {
        displayElement.removeEventListener("wheel", handleWheel);
        displayElement.removeEventListener("mouseenter", () => displayElement.addEventListener("wheel", handleWheel));
        displayElement.removeEventListener("mouseleave", () => displayElement.removeEventListener("wheel", handleWheel));
      }
      if (resultElement) {
        resultElement.removeEventListener("wheel", handleWheel);
        resultElement.removeEventListener("mouseenter", () => resultElement.addEventListener("wheel", handleWheel));
        resultElement.removeEventListener("mouseleave", () => resultElement.removeEventListener("wheel", handleWheel));
      }
    };
  }, [display, result]);

  return (
    <div className="flex flex-col items-center justify-center bg-black shadow-xl shadow-blue-500/50 text-white rounded-3xl">
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xs w-full">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="0"
            className="text-right text-white text-4xl bg-transparent border-none overflow-x-auto whitespace-nowrap focus:outline-none w-3/4"
            value={display}
            onChange={handleInputChange}
            ref={displayRef}
          />
          <button
            className="p-2 text-2xl rounded-lg bg-red-600 hover:bg-red-800 focus:outline-none shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"
            onClick={() => {
              setDisplay("");
              setResult("");
            }}
          >
            <p className="bg-whiteCardOverlay drop-shadow-2xl rounded-full p-2">AC</p>
          </button>
        </div>
        <div className="flex justify-between bg-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-lg items-center py-1 mb-4">
          <input
            type="text"
            placeholder="0"
            className="text-right text-black text-4xl px-1 bg-transparent border-none focus:outline-none w-4/5 overflow-x-auto whitespace-nowrap"
            value={result}
            readOnly
            ref={resultRef}
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "C",
            "4",
            "5",
            "6",
            "+",
            "1",
            "2",
            "3",
            "-",
            ".",
            "0",
            "*",
            "/",
          ].map((item, index) => (
            <button
              key={index}
              className={`p-2 text-2xl rounded-lg focus:outline-none ${
                item === "C" ||
                item === "+" ||
                item === "-" ||
                item === "*" ||
                item === "/"
                  ? "bg-red-600 hover:bg-red-800"
                  : "bg-gray-800 hover:bg-gray-700"
              } shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]`}
              onClick={() => handleButtonClick(item)}
            >
              <p className="bg-whiteCardOverlay drop-shadow-2xl rounded-full p-2">{item}</p>
            </button>
          ))}
          <button
            className="col-span-4 p-4 text-2xl rounded-lg bg-orange-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] focus:outline-none hover:bg-orange-500"
            onClick={handleEquals}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
