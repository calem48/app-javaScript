
let MyProducts = [...products];

let prodContainer= document.querySelector(".products-container");


let displayProducts = ()=> {

    if(MyProducts.length === 0 ){
        prodContainer.innerHTML ='<h5 class="product-name">There are no item</h5>'; 
        return 0
    }

    prodContainer.innerHTML=  MyProducts.map(prod =>{
        return  `
            <article class="product" data-id="${prod.id}">
                <img 
                src="${prod.image}"
                class="product-img img" alt="" 
                />
                <footer>
                <h5 class="product-name">${prod.title}</h5>
                <span class="product-price">${prod.price}</span>
                </footer>
            </article>
        `
    }).join('')

  
}


displayProducts();


let searchInput = document.querySelector(".search-input")
let inputForm = document.querySelector(".input-form")


searchInput.addEventListener("keyup",searchProduct = () => {
    MyProducts= products.filter( (item) =>{
        // return item.title.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1
        return item.title.toLowerCase().includes(searchInput.value.toLowerCase())

    })
    displayProducts()
})



let filtersContainer = document.querySelector(".companies")

// let buttonFiltterList = () => {
//     return [
//         "All",
//         ...new Set(MyProducts.map(item =>  item.company)),
//     ]
// }


// let showFiltterList = () => {
//     let company = buttonFiltterList()
//     filtersContainer.innerHTML = company.map(item => {
//         return `<button class="company-btn">${item}</button>`
//    }).join("")
// }

let buttonFiltterList = () => {
    let button = [
        "All",
        ...new Set(MyProducts.map(item =>  item.company)),
    ]

    filtersContainer.innerHTML = button.map(item => {
        return `<button class="company-btn">${item}</button>`
    }).join("")
}

buttonFiltterList()

let companiesButtons = document.querySelectorAll(".companies button")

companiesButtons.forEach(item => {
    
    item.addEventListener("click",function(e) {

        MyProducts= products.filter(it => {
            return it.company === item.textContent
        })
        
        if(MyProducts.length === 0){
            MyProducts =products
        }
        searchInput.value=""
        displayProducts()
    })

})


