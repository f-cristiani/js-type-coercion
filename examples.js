console.log( (1 == "1") === true )
console.log( (1 == true) === true )

console.log( ([2] == "2") === true )

console.log( (true + false) === 1 )
console.log( (100 / "2.5") === 40 )
console.log( (100 / true) === 100 )
console.log( (15 + 3 + "10") === "1810" )
console.log( (15 + 3 + "true") === "18true" )
console.log( (15 + 3 + true) === 19 )

console.log( ([1] + 2 + "3") === "123" )

console.log( ([1] > [0]) === true )
console.log( ([1] > "0.5") === true )