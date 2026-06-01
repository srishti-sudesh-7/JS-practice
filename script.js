function operation() {

    let choice = document.getElementById("choice").value;
    let input = document.getElementById("input").value;
    let result = "";

    switch (choice) {
        case "1":
            let num = Number(input);
            if (num % 2 === 0)result = "Even";
            else result = "Odd";
            break;
        case "2":
            result = input.split("").reverse().join("");
            break;
        case "3":
            let arr = input.split(",").map(Number);
            let largest = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > largest) {
                    largest = arr[i];
                }
            }
            result = "Largest number: " + largest;
            break;
        case "4":
            let n = Number(input);
            let factorial = 1;
            for (let i = 1; i <= n; i++) factorial *= i;
            result = "Factorial: " + factorial;
            break;
        case "5":
            let rev = input.split("").reverse().join("");
            if (input === rev) result = "palindrome";
            else result = "Not a palindrome";
            break;
        default:
            result = "Invalid Choice";
    }

    document.getElementById("result").innerText = result;
}
