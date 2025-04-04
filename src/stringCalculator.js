export function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/; // Default delimiters (comma and newline)

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2)); // Extract custom delimiter
        numbers = parts[1]; // Remove delimiter definition
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num));

    // Find negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
