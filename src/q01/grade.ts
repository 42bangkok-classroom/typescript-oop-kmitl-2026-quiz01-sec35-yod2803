

const arg = process.argv[2]; 


if (arg === undefined) {
  console.log("Invalid Input");
  process.exit(0);
}

const score = Number(arg); 


if (Number.isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid Input");
  process.exit(0);
}

let grade: string;

if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Grade is ${grade}`);
