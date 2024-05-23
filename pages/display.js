import react from "react";


const Display = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white rounded-3xl">
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-bold">$</span>
                    <input
                        type="number"

                        placeholder="0"
                        className="text-right text-4xl bg-transparent border-none focus:outline-none w-3/4"
                    />
                    <span className="text-xl">USD</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-bold">£</span>
                    <input
                        type="number"

                        placeholder="0"
                        className="text-right text-4xl bg-transparent border-none focus:outline-none w-3/4"
                    />
                    <span className="text-xl">GBP</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {['7', '8', '9', 'CE', '4', '5', '6', '+', '1', '2', '3', '0', '.'].map((item, index) => (
                        <button
                            key={index}
                            className={`p-4 text-2xl rounded-lg focus:outline-none ${item === 'CE' || item === '+' ? 'bg-red-600' : 'bg-gray-800'} hover:bg-gray-700`}

                        >
                            {item}
                        </button>
                    ))}
                    <button
                        className="col-span-2 p-4 text-2xl rounded-lg bg-orange-600 focus:outline-none hover:bg-orange-500"

                    >
                        =
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Display;