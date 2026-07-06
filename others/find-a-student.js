const studentDatabase = [
  "Joshua",
  "John",
  "Jane",
  "Michael",
  "Sarah",
  "David",
  "Emily",
  "Daniel",
  "Sophia",
  "Noah",
  "Benjamin",
  "Amelia",
  "Elijah",
  "Harper",
  "Brown",
  "Jones",
  "Garcia",
];

const findStudent = (allStudent, studentName) => {
  for (let i = 0; i < allStudent.length; i++) {
    if (allStudent[i] === studentName) {
      console.log(studentName);
      break;
    } else {
      console.log(`No student name ${studentName}`);
      break;
    }
  }
};

findStudent(studentDatabase, "Snowi");
