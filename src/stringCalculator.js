export function add(numbers) {
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers);
    return 0; // Placeholder for now
}
