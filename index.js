// Import stylesheets
/*function compare(a, b) {
  let totalMarksA = a.biology + a.chemistry;
  let totalMarksB = b.biology + b.chemistry;

  if (totalMarksA !== totalMarksB) {
    console.log(totalMarksB - totalMarksA);
  } else if (a.biology !== b.biology) {
     console.log(b.biology - a.biology);
  } else if (a.dob !== b.dob) {
    a.dob > b.dob ? console.log(1) : console.log(-1);
  } else {
    return console.log(0);
  }
}*/
let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];
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