import react, { useState } from "react";

const Display = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="flex flex-col items-center justify-center  bg-black shadow-xl shadow-blue-500/50 text-white rounded-3xl">
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xs w-full ">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="0"
            className="text-right text-white text-4xl bg-transparent border-none focus:outline-none w-3/4"
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
          />
        </div>
        <div className="flex justify-between bg-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-lg items-center py-1 mb-4">
          <input
            type="text"
            placeholder="0"
            className="text-right text-black text-4xl bg-transparent border-none focus:outline-none w-3/4"
            value={result}
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "CE",
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
              className={`p-4 text-2xl rounded-lg focus:outline-none ${
                item === "CE" ||
                item === "+" ||
                item === "-" ||
                item === "*" ||
                item === "/"
                  ? "bg-red-600 hover:bg-red-800"
                  : "bg-gray-800 hover:bg-gray-700"
              } shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]`}
              onClick={
                item === "CE"
                  ? () => setDisplay(display.slice(0, display.length - 1))
                  : () => setDisplay(display + item)
              }
            >
              {item}
            </button>
          ))}
          <button
            className="col-span-4 p-4 text-2xl rounded-lg bg-orange-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] focus:outline-none hover:bg-orange-500"
            onClick={
              display !== "" ? () => setResult(eval(display).toString()) : null
            }
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default Display;
