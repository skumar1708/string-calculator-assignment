export function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/; // Default delimiters (comma and newline)

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2)); // Extract custom delimiter
        numbers = parts[1]; // Remove delimiter definition
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num));

    return numArray.reduce((sum, num) => sum + num, 0);
}
