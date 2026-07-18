// https://fakestoreapi.com/products


const loading = document.getElementById("loading");
const sideBar = document.getElementById("side-bar");
const categories = document.querySelectorAll('input[type="checkbox"]');
const priceFilterBtn = document.getElementById("price-filter-btn");
const productContainer = document.getElementById("products");

let allProducts = [];

async function getProducts(){
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        allProducts = products;
        
        loading.style.display = "none"
        
        displayProducts(allProducts)  // Calling displayProduct function
        
    } catch (error) {
        console.log("Something went wrong...")
    }
}

getProducts();

// Display all products
function displayProducts(products){
    console.log(products);

    productContainer.innerHTML = "";
    products.map((product)=>{
        productContainer.innerHTML += ` <div class="product">
    <img src="${product.image}" alt="product-image">
    <h2>Category: ${product.category}</h2>
    <h3>${product.title}</h3>
    <div class="rating"><span class="rating-star">${product.rating.rate}</span> <span class="rating-count">Rating ${product.rating.count} </span></div>
   
    <h3 class="price">Price: $${product.price}</h3>
    
    <button class="buy-now-btn">Buy Now</button>
 </div>`
    })

    
}

let categoriesSelected = [];
categories.forEach((category)=> {
    category.addEventListener("change",()=>{
        if(category.checked){
           categoriesSelected.push(category.value);
        }else{
            categoriesSelected = categoriesSelected.filter((value)=>{
                return value != category.value;
            })
          
        }
    })
})

console.log(categoriesSelected)

priceFilterBtn.addEventListener("click",filteredProducts);

function filteredProducts(){
    const maxPrice = document.getElementById("max-price").value;
    const minPrice = document.getElementById("min-price").value;
    console.log(maxPrice,minPrice)

    const filteredProducts = allProducts.filter((product)=>{

        const matchPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchCategory = categoriesSelected.includes(product.category)

        return (matchPrice && matchCategory)
    })

    console.log(filteredProducts)
    displayProducts(filteredProducts);

}