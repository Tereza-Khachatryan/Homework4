//task4

let studentLabs2 = [{
    student: "Blake",
    myCode: function(num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function(num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function(num) {
      return num * num;
    },
  },
]

function gradeLabs(labs) {
    const expectedResults = {
      "Blake": Math.pow(5, 5),
      "Jessica": Math.pow(5, 5),
      "Mya": 5 * 5
    }
  
    labs.forEach(lab => {
      let result
      try {
        if (typeof lab.runLab !== 'function') {
          throw new TypeError("lab.runLab is not a function.")
        }
        result = lab.runLab(5)
      } catch (error) {
        console.log(`${lab.student}: Error thrown - ${error.name}: ${error.message}`)
        result = "Error thrown";
      }
  
      const expected = expectedResults[lab.student];
      if (result === expected) {
        console.log(`${lab.student} passed`)
      } else {
        console.log(`${lab.student} failed`)
      }
    })
  }
  

console.log(gradeLabs(studentLabs2))