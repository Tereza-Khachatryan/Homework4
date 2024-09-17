//task3

function reverseStr(s) {
    try {
      if (typeof s !== "string") {
        throw new Error("s.split is not a function ")
      }
      return s.split('').reverse().join('')
    } catch (error) {
      console.log(error.message)
      return s
    }
  }
  
  console.log(reverseStr("Hello"))