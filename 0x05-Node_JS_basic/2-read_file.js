const fs = require("fs");

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      }
      if (data) {
        const fileLines = data.toString("utf-8").trim().split("\n");
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(",");
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(",");
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length
        );
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group
            .map((student) => student.firstname)
            .join(", ");
          console.log(
            `Number of students in ${field}: ${group.length}. List: ${studentNames}`
          );
        }
        resolve(true);
      }
    });
  });

module.exports = countStudents;
// const fs = require("fs").promises;

// async function countStudents(path) {
//   try {
//     const data = await fs.readFile(path, "utf8");
//     const lines = data.split("\n").filter((line) => line !== "");
//     if (lines.length === 0) {
//       throw new Error("Cannot load the database");
//     }
//     const students = [];
//     const fields = {};
//     for (let i = 1; i < lines.length; i++) {
//       if (lines[i]) {
//         const [firstname, , , field] = lines[i].split(",");
//         students.push({ firstname, field });

//         if (!fields[field]) {
//           fields[field] = [];
//         }
//         fields[field].push(firstname);
//       }
//     }

//     console.log(`Number of students: ${students.length}`);
//     for (const [field, names] of Object.entries(fields)) {
//       console.log(
//         `Number of students in ${field}: ${names.length}. List: ${names.join(
//           ", "
//         )}`
//       );
//     }
//   } catch (error) {
//     throw new Error("Cannot load the database");
//   }
// }

// module.exports = countStudents;
// // const fs = require("fs");
// // const csv = require("csv-parser");

// // function countStudents(filepath) {
// //   fs.accessSync(filepath, fs.constants.F_OK, (err) => {
// //     if (err) {
// //       throw new Error("Cannot load the database");
// //     }
// //   });

// //   const studentsByField = {};
// //   let totalStudents = 0;

// //   fs.createReadStream(filepath)
// //     .pipe(csv())
// //     .on("data", (data) => {
// //       const { firstname, field } = data;

// //       if (!studentsByField[field]) {
// //         studentsByField[field] = {
// //           count: 0,
// //           students: [],
// //         };
// //       }

// //       studentsByField[field].count++;
// //       studentsByField[field].students.push(firstname);
// //       totalStudents++;
// //     })
// //     .on("end", () => {
// //       if (totalStudents.length === 0) {
// //         throw new Error("Cannot load the database");
// //       }
// //       console.log(`Number of students: ${totalStudents}`);

// //       for (const field in studentsByField) {
// //         const { count, students } = studentsByField[field];
// //         console.log(
// //           `Number of students in ${field}: ${count}. List: ${students.join(
// //             ", "
// //           )}`
// //         );
// //       }
// //     });
// // }

// // module.exports = countStudents;
// // function countStudents(filepath) {
// //   const fs = require("fs");
// //   const csv = require("csv-parser");

// //   const studentsByField = {};

// //   if (!filepath) {
// //     throw "Cannot load the database";
// //   } else {
// //     FileBuffer = fs.readFileSync(filepath);
// //     to_string = FileBuffer.toString();
// //     splitLines = to_string.split("\n");
// //     const NumberLines = splitLines.length - 1;
// //     console.log(`Number of students: ${NumberLines}`);
// //   }
// //   fs.createReadStream(filepath)
// //     .pipe(csv())
// //     .on("data", (data) => {
// //       const { firstname, field } = data;

// //       if (!studentsByField[field]) {
// //         studentsByField[field] = {
// //           count: 0,
// //           students: [],
// //         };
// //       }

// //       studentsByField[field].count++;
// //       studentsByField[field].students.push(firstname);
// //     })
// //     .on("end", () => {
// //       for (const field in studentsByField) {
// //         const { count, students } = studentsByField[field];
// //         console.log(
// //           `Number of students in ${field}: ${count}. List: ${students.join(
// //             ", "
// //           )}`
// //         );
// //       }
// //     });
// // }
// // module.exports = countStudents;
