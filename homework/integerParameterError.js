//task2

function isPositive(a) {
    try {
      if (a === 0) {
        throw new Error("Zero Error")
      } else if (a < 0) {
        throw new Error("Negative Error")
      } else console.log("YES")
      return
    } catch (error) {
      console.log(error.message)
      return a
    }
  }
  
  console.log(isPositive(-1))