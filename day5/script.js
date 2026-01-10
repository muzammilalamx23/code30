//Print the even numbers from 1 to 50 using loop.
for (let i = 1; i <= 50; i++) {
	if (i % 2 === 0) {
		console.log(`Even ${i}`)
	}
}

//Array of numbers and function to print even numbers from the array
function printEven(arr) {
	let evenNumber = arr.filter(function (item) {
		return item % 2 === 0
	})
	console.log(`Even :${evenNumber}`)
}
const evenVal = printEven([12, 35, 76, 45, 3, 45, 98, 33])

//An object with student name age and skills in array format
let student = {
	name: "Muzammil",
	age: 20,
	skills: ["HTML", "CSS", "JS"],
}
console.log(student) //original skills
//Adding new skill to the skills array
student.skills.push("ReactJS")
console.log(student) //new skill added
student.skills.forEach((skill, keys) => {
	console.log(`Skill ${keys}: ${skill}`)
});

let numbers = [12, 45, 23, 51, 19, 8, 7, 39, 56, 90]
numbers.splice(3, 4) 
console.log(numbers)//removing 4 elements from index 3
numbers.slice(2, 5) //slicing elements from index 2 to 5
console.log(numbers)