
const balanceArg = process.argv[2];
const amountArg = process.argv[3];


if (balanceArg === undefined || amountArg === undefined) {
  console.log("Invalid Input");
  process.exit(0);
}

const balance = Number(balanceArg);
const amount = Number(amountArg);


if (Number.isNaN(balance) || Number.isNaN(amount)) {
  console.log("Invalid Input");
  process.exit(0);
}

if (amount > balance) {
  console.log("Insufficient balance");
} else if (amount > 5000) {
  console.log("Exceeds per-withdrawal limit");
} else {
  console.log("Withdrawal approved");
}
