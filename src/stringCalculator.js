export function add(numbers) {
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers);

    const numArray = numbers.split(",").map(num => parseInt(num));
    
    return numArray.reduce((sum, num) => sum + num, 0);
}
