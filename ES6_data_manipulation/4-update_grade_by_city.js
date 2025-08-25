export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  const grades = Array.isArray(newGrades) ? newGrades : [];

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const found = grades.find((g) => g.studentId === student.id);
      return { ...student, grade: found ? found.grade : 'N/A' };
    });
}
