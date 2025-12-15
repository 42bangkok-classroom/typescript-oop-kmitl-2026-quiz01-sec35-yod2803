const op = process.argv[2];
const aStr = process.argv[3];
const bStr = process.argv[4];

if (!op || !aStr || !bStr) {
  console.log("Invalid input");
  process.exit(0);
}

const a = Number(aStr);
const b = Number(bStr);


if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Invalid input");
  process.exit(0);
}

if (op !== "add" && op !== "sub" && op !== "mul" && op !== "div") {
  console.log("Invalid operator");
  process.exit(0);
}

if (op === "div" && b === 0) {
  console.log("Invalid input");
  process.exit(0);
}

let result: number;

switch (op) {
  case "add":
    result = a + b;
    break;
  case "sub":
    result = a - b;
    break;
  case "mul":
    result = a * b;
    break;
  case "div":
    result = a / b;
    break;
}

console.log(result.toString());
