let btns = document.querySelectorAll(".btn-container button")
let content = document.querySelectorAll(".content")



btns.forEach(item => {
    item.addEventListener("click", (e) => {
        let id = e.target.dataset.id
        if (id) {
            btns.forEach(item => {
                item.classList.remove("active")
                e.target.classList.add("active")
            })

            content.forEach(item => {
                item.classList.remove("active")
                if (item.id == id) {
                    item.classList.add("active")
                }
            })
        }
    })
})