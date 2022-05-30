let x1 = 5
let y1 = 2
let x2 = 10
let y2 = 4

let x3 = x2 - x1
let x4 = x3**x3

let y3 = y2 -y1
let y4 = y3**y3

let x5 = x4 - y4

let distance = Math.sqrt(x5)

console.log("The distance between coordinates" + x1 + "and" + y1 + "and coordinates" + x2 + "and" + y2 + "is" + distance)

