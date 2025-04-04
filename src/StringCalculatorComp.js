import React, { useState } from "react";
import { add } from "./stringCalculator"; // Import the add function

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleCalculate = () => {
        try {
            setResult(add(input)); // Use the add function directly
        } catch (err) {
            setResult(err.message); // Handle negative number errors
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>String Calculator</h2> {/* This matches our test */}
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter numbers (e.g., 1,2,3)" 
                style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
            />
            <br />
            <button onClick={handleCalculate} style={{ padding: "8px 15px", cursor: "pointer" }}>
                Calculate
            </button>
            <h3>Result: {result}</h3>
        </div>
    );
};

export default StringCalculator;
