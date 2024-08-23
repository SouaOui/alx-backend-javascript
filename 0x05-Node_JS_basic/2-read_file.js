const fs = require("fs");
const csv = require("csv-parser");

function countStudents(filepath) {
  fs.access(filepath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("Cannot load the database");
    }
  });

  const studentsByField = {};
  let totalStudents = 0;

  fs.createReadStream(filepath)
    .pipe(csv())
    .on("data", (data) => {
      const { firstname, field } = data;

      if (!studentsByField[field]) {
        studentsByField[field] = {
          count: 0,
          students: [],
        };
      }

      studentsByField[field].count++;
      studentsByField[field].students.push(firstname);
      totalStudents++;
    })
    .on("end", () => {
      console.log(`Number of students: ${totalStudents}`);

      for (const field in studentsByField) {
        const { count, students } = studentsByField[field];
        console.log(
          `Number of students in ${field}: ${count}. List: ${students.join(
            ", "
          )}`
        );
      }
    });
}

module.exports = countStudents;
// function countStudents(filepath) {
//   const fs = require("fs");
//   const csv = require("csv-parser");

//   const studentsByField = {};

//   if (!filepath) {
//     throw "Cannot load the database";
//   } else {
//     FileBuffer = fs.readFileSync(filepath);
//     to_string = FileBuffer.toString();
//     splitLines = to_string.split("\n");
//     const NumberLines = splitLines.length - 1;
//     console.log(`Number of students: ${NumberLines}`);
//   }
//   fs.createReadStream(filepath)
//     .pipe(csv())
//     .on("data", (data) => {
//       const { firstname, field } = data;

//       if (!studentsByField[field]) {
//         studentsByField[field] = {
//           count: 0,
//           students: [],
//         };
//       }

//       studentsByField[field].count++;
//       studentsByField[field].students.push(firstname);
//     })
//     .on("end", () => {
//       for (const field in studentsByField) {
//         const { count, students } = studentsByField[field];
//         console.log(
//           `Number of students in ${field}: ${count}. List: ${students.join(
//             ", "
//           )}`
//         );
//       }
//     });
// }
// module.exports = countStudents;
