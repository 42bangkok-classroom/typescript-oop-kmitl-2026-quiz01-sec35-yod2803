const input = process.argv[2];

// ตรวจสอบว่ามีการส่งค่าเข้ามาหรือไม่
if (!input) {
    console.log("Invalid Input");
    process.exit(1);
}

// แปลงเป็นตัวเลข
const score = Number(input);

// ตรวจสอบว่าเป็นตัวเลขจริงหรือไม่ และอยู่ในช่วง 0-100
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid Input");
    process.exit(1);
}

// กำหนดเกรดตามเกณฑ์
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
