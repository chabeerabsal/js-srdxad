testCase1.sort(function(a, b) {
  let totalMarksA = a.biology + a.chemistry;
  let totalMarksB = b.biology + b.chemistry;
if (totalMarksA < totalMarksB) {
    return 1;
  }
  if (totalMarksA > totalMarksB) {
    return -1;
  }
  if (a.biology < b.biology) {
    return 1;
  }
  if (a.biology > b.biology) {
    return -1;
  }if (a.dob < b.dob) {
    return -1;
  }
  if (a.dob > b.dob) {
    return 1;
  }
  
  return 0;
});

let names = testCase1.map(function(student) {
  return student.name;
});
console.log(names)