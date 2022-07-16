let about = document.querySelector(".about")
let tab_btn = document.querySelectorAll(".btn-container .tab-btn")
let content = document.querySelectorAll(".about-content .content")





about.addEventListener("click", e => {
    let id = e.target.dataset.id
    if (id) {
        tab_btn.forEach(btn => {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        content.forEach(c => {
            c.classList.remove("active")
            //if you use this comment line 24
            // if (c.id == id) {
            //     c.classList.add("active")
            // }
        })
        document.getElementById(id).classList.add("active")
    }

})



// tab_btn.forEach(item => {

//     item.addEventListener("click", e => {
//         let id = e.target.dataset.id

//         tab_btn.forEach(item => {
//             item.classList.remove("active")
//         })

//         content.forEach(item => {
//             item.classList.remove("active")

//             if (item.id == id) {
//                 item.classList.add("active")
//             }

//         })

//         item.classList.add("active")

//     })
// })