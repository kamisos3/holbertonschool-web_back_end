export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.map((g) => g.studentId === student.citys);
      return {
        ...student,
        grade: gradeObj ? gradeObj.newGrades : 'N/A',
      };
    });
    console.log(student);
    console.log(gradeObj);
}
