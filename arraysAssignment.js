const students = [

 { name: 'Alice', grades: [85, 92, 78, 90] },

 { name: 'Bob', grades: [75, 88, 95, 100] },

 { name: 'Charlie', grades: [60, 72, 68, 74] },

 { name: 'David', grades: [92, 88, 95, 98] },

 { name: 'Eve', grades: [100, 100, 100, 100] }

 ];


 const studentsList = document.getElementById("snl");
 const passedClasses = document.getElementById("passed");
 const perfectScore = document.getElementById("perfect-score");
 const topDog = document.getElementById("top-student");
 const avarages = document.getElementById("studentAvgs");
 const maxGrades = document.getElementById("total-grades");
 

 students.forEach(student => {
    const li = document.createElement("Li");
    li.textContent = student.name;
    studentsList.appendChild(li)
 })

 const allPassed = students.every(student => 
    student.grades.every(grade => grade >= 60)
 );

 passedClasses.textContent = `All students passed: ${allPassed}`;

 const hasPerfectStudent = students.some(student =>
  student.grades.every(grade => grade === 100)
);
perfectScore.textContent = `At least one perfect student: ${hasPerfectStudent}`;

function getAverage(grades) {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

const topStudents = students.filter(student => getAverage(student.grades) >= 90);

topStudents.forEach(student => {
  const li = document.createElement("li");
  li.textContent = student.name;
  topDog.appendChild(li);
});

const studentSummaries = students.map(student => {
  const avg = getAverage(student.grades).toFixed(2);
  return `Name: ${student.name}, Average Grade: ${avg}`;
});

studentSummaries.forEach(summary => {
  const li = document.createElement("li");
  li.textContent = summary;
  avarages.appendChild(li);
});

const totalGradeCount = students.reduce((sum, student) => sum + student.grades.length, 0);
maxGrades.textContent = `Total number of grades: ${totalGradeCount}`;