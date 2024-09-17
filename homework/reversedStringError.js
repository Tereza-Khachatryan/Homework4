//task1 

function reverseStr(s) {
    try {
      return s.split('').reverse().join("")
    } catch (error) {
      console.log(error.message)
      return s
    }
  }
  
  console.log(reverseStr("JavaScript"))