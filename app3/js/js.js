const myData = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

let container = document.querySelector(".container")
let myImg = document.querySelector("img")
let h2 = document.querySelector("h2")
let p = document.querySelectorAll("p")

let next = document.querySelector(".next-btn")
let prev = document.querySelector(".prev-btn")

let currentPerson = 0


// addEventListener("DOMContentLoaded", function () {
// let person = myData[currentPerson]
// let { name, job, img, text } = person
// myImg.src = img
// h2.textContent = name
// p[0].textContent = job
// p[1].textContent = text
// })

addEventListener("DOMContentLoaded", function () {
    show(currentPerson)
})




function show(id) {
    let person = myData[id]
    myImg.src = person.img
    h2.textContent = person.name
    p[0].textContent = person.job
    p[1].textContent = person.text
}





next.addEventListener("click", function () {
    currentPerson++
    if (currentPerson >= myData.length) {
        currentPerson = 0
    }
    show(currentPerson)
    console.log("dd")
})

prev.addEventListener("click", function () {
    currentPerson--
    if (currentPerson < 0) {
        currentPerson = myData.length - 1
    }

    show(currentPerson)
})