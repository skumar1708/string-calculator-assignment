import React from "react";
import "@testing-library/jest-dom";
import { add } from "../src/stringCalculator";
import { render, screen, fireEvent  } from "@testing-library/react";
import StringCalculator from "../src/StringCalculatorComp";

test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("should return the number itself when a single number is passed", () => {
  expect(add("1")).toBe(1);
});


test("should return the sum of two numbers", () => {
  expect(add("1,5")).toBe(6);
});

test("should return the sum of multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
  expect(add("10,20,30")).toBe(60);
});

test("should handle new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("10\n20\n30")).toBe(60);
});

test("should support different delimiters defined in the format //;\n1;2", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//#\n2#3#4")).toBe(9);
  expect(add("//@\n5@10@15")).toBe(30);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  expect(() => add("-1,-5,6")).toThrow("negative numbers not allowed: -1,-5");
});

test("should render String Calculator component", () => {
    render(<StringCalculator />);
    
    // Check if the heading is in the document
    const heading = screen.getByText(/String Calculator/i);
    expect(heading).toBeInTheDocument();
});

test("should allow user to input numbers and calculate the sum", () => {
  render(<StringCalculator />);

  // Get input field and button
  const input = screen.getByPlaceholderText("Enter numbers (e.g., 1,2,3)");
  const button = screen.getByText("Calculate");

  // Simulate user typing numbers
  fireEvent.change(input, { target: { value: "1,2,3" } });

  // Simulate button click
  fireEvent.click(button);

  // Expect result to be displayed
  const result = screen.getByText(/Result:/i);
  expect(result).toHaveTextContent("Result: 6"); // Fails because function isn’t implemented yet
});
