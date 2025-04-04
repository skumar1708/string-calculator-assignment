export function add(numbers) {
    if (numbers === "") return 0;

    // Replace new lines (`\n`) with commas
    const numArray = numbers.replace(/\n/g, ",").split(",").map(num => parseInt(num));

    return numArray.reduce((sum, num) => sum + num, 0);
}
