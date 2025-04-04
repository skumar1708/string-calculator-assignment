export function add(numbers) {
    if (numbers === "") return 0;

    const numArray = numbers.split(",").map(num => parseInt(num));

    return numArray.reduce((sum, num) => sum + num, 0);
}
