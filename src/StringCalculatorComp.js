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
            <h3>Result: {result}</h3>
        </div>
    );
};

export default StringCalculator;
