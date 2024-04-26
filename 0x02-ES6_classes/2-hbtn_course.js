export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== "string" ||
      typeof length !== "number" ||
      !Array.isArray(students) ||
      !students.every((student) => typeof student === "string")
    ) {
      throw new Error("Invalid input types");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters and Setters Name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== "number") {
      throw new TypeError("Length must be a valid number");
    }
    this._length = newLength;
  }

  // Getters and Setters Students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (
      !Array.isArray(newStudents) ||
      !newStudents.every((item) => typeof item === "string")
    ) {
      throw new TypeError("Students must be an array of strings");
    }
    this._students = newStudents;
  }
}
