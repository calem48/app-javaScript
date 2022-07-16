//using selectors inside the element
// traversing the dom


// let btn = document.querySelectorAll("button")
const boxs = document.querySelectorAll(".box")


// btn.forEach(btn => {
//     btn.addEventListener("click", function () {
//         btn.parentElement.parentElement.classList.toggle("active")
//     })
// })






boxs.forEach(box => {
    let btn = box.querySelector("button");

    btn.addEventListener("click", function () {

        boxs.forEach(item => {
            if (item !== box) {
                item.classList.remove("active")
            }
        })

        box.classList.toggle("active")
    })

})
