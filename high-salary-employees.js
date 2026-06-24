// Filter employees with salary > 50,000

const employees = [
    {
        name: "Eman Ali",
        grade: 17,
        salary: 100000
    },
    {
        name: "Azan",
        grade: 14,
        salary: 55000
    },
    {
        name: "Eliza",
        grade: 9,
        salary: 30000
    },
    {
        name: "Noor",
        grade: 16,
        salary: 90000
    },
    {
        name: "Alishba",
        grade: 18,
        salary: 200000
    },
    {
        name: "Zara",
        grade: 15,
        salary: 75000
    }
]

const filteredEmployees = employees.filter((employee) => employee.salary > 50000)

console.log(filteredEmployees)