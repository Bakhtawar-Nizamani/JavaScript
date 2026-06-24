// Calculate total cart price 

const products = [
  {
    name: "Spiral Notebook",
    color: "Blue",
    price: 250,
    category: "Notebook"
  },
  {
    name: "Mathematics Register",
    color: "Green",
    price: 180,
    category: "Notebook"
  },
  {
    name: "Gel Pen Pack",
    color: "Black",
    price: 350,
    category: "Stationery"
  },
  {
    name: "Highlighter Set",
    color: "Yellow",
    price: 450,
    category: "Stationery"
  },
  {
    name: "Scientific Calculator",
    color: "Black",
    price: 2200,
    category: "Calculator"
  },
  {
    name: "School Backpack",
    color: "Purple",
    price: 3200,
    category: "Bag"
  },
  {
    name: "Geometry Box",
    color: "Pink",
    price: 550,
    category: "Stationery"
  },
  {
    name: "Sticky Notes Pack",
    color: "Yellow",
    price: 300,
    category: "Stationery"
  },
  {
    name: "Study Table Lamp",
    color: "White",
    price: 2800,
    category: "Study Accessories"
  },
  {
    name: "Laptop Stand",
    color: "Silver",
    price: 1800,
    category: "Study Accessories"
  }
]

const total = products.reduce((acc,val) => acc + val.price, 0)

console.log(total)