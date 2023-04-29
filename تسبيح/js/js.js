let btns = document.querySelectorAll("button")
let counter = document.querySelectorAll("p")

addEventListener("load", function() {
    let bdd = JSON.parse(localStorage.getItem("counter"))

    if (bdd) {
        counter.forEach((count, key) => { count.innerHTML = bdd[key] })
    }

    settings()
})

function settings() {
    btns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            let id = e.currentTarget.dataset.id
            let bdd = JSON.parse(localStorage.getItem("counter")) || [0, 0, 0, 0]
            bdd[id - 1] += 1
            localStorage.setItem("counter", JSON.stringify(bdd))
            counter[id - 1].innerHTML = bdd[id - 1]
        })
    })
}


