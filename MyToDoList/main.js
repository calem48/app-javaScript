
let input = document.querySelector('#tasks input');
let listOfTasks = document.querySelector('#list');
let btn = document.querySelector("#add");


addEventListener("DOMContentLoaded", () => {
    let data = JSON.parse(localStorage.getItem("tasks"))
    if (data) {
        createTask(data);
    }
})


function createTask(data) {
    listOfTasks.innerHTML = data.map((item, index) => {
        return `<div class="toDo">
                            ${item}
                            <button class="check">
                            <i class='bx bx-check-circle'></i>
                            </button>
                            <button data-id=${index} class="remove">
                            <i class='bx bx-x-circle'></i>
                            </button>
                    </div>
                `
    }).join("")

    let current_item = document.querySelectorAll(".remove");

    current_item.forEach(item => {

        item.addEventListener('click', (e) => {
            let id = e.currentTarget.dataset.id
            let data = JSON.parse(localStorage.getItem("tasks"))
            let res = data.filter(item => item !== data[id])
            createTask(res)
            localStorage.setItem("tasks", JSON.stringify(res))

        })
    })


}







//add task onclick button 
btn.onclick = function () {
    let data = JSON.parse(localStorage.getItem("tasks")) || []
    //[a,b]
    data.push(input.value)
    localStorage.setItem("tasks", JSON.stringify(data))
    //[a,b,c]
    createTask(data)

}
