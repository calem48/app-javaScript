// let btnAdd = document.querySelector("form input:last-child")
// let input = document.querySelector("form input:first-child")
// let btnRemoveAll = document.querySelector(".remove")
// let list = document.querySelector("ul")

// btnAdd.addEventListener("click", function (e) {
//     e.preventDefault()
//     if (input.value) {
//         showList(input.value)
//     } else {
//         alert("can't add empty value")
//     }
//     input.value = ""
// })
// list.addEventListener("click", function (e) {
//     e.target.parentNode.dataset.id
//     if (e.target.parentNode.dataset.id) {
//         e.target.parentNode.remove()
//     }
// })


// function showList(data) {
//     list.innerHTML += `<li data-id="${data}"><span>${data}</span><button>remove</button></li>`
// }


// btnRemoveAll.addEventListener("click", function () {
//     list.innerHTML = ""
// })

// //or use
// data = [
//     {
//         id: 1,
//         course: "HTML"
//     },
//     {
//         id: 2,
//         course: "CSS"
//     },
//     {
//         id: 3,
//         course: "JS"
//     }
// ]


///////////////          or          /////////////////////////

// let btnAdd = document.querySelector("form input:last-child")
// // let btnAdd = document.getElementsByClassName("add")
// let input = document.querySelector("form input:first-child")
// let btnRemoveAll = document.querySelector(".remove")
// let list = document.querySelector("ul")
// let listLi = document.querySelectorAll("ul li")

// // let data = []




// addEventListener("DOMContentLoaded", function () {
//     showList(data)
//     remove()
// })

// function showList(data) {
//     //show item
//     data.length ?
//         list.innerHTML = data.map((item) => {
//             return `<li data-id="${item.id}"><span>${item.course}</span><button>remove</button></li>`
//         }).join("")
//         : list.innerHTML = "<li>there are no item</li>"

//     //remove item
//     remove()
// }


// btnAdd.addEventListener("click", function (e) {
//     e.preventDefault()
//     if (input.value) {
//         data = [...data, { id: new Date().getTime(), course: input.value }]
//         showList(data)
//         input.value = ""
//     } else {
//         alert("can not add empty value")
//     }

// })

// function remove() {
//     list.querySelectorAll("li").forEach(item => {
//         item.addEventListener("click", function () {
//             data = data.filter(filt => filt.id != item.dataset.id)
//             showList(data)
//         })
//     })
// }


// btnRemoveAll.addEventListener("click", _ => {
//     data = []
//     showList(data)
// })