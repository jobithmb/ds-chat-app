let allContact = [
    {
        "id": 1,
        "name": "John Doe",
        "image": "https://mighty.tools/mockmind-api/content/human/69.jpg",
        "number": 956890906,
        "status": true
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "image": "https://mighty.tools/mockmind-api/content/human/70.jpg",
        "number": 8367890103,
        "status": true
    },
    {
        "id": 3,
        "name": "ruby Doe",
        "image": "https://mighty.tools/mockmind-api/content/human/71.jpg",
        "number": 7067890103,
        "status": false
    },
    {
        "id": 4,
        "name": "Mark Doe",
        "image": "https://mighty.tools/mockmind-api/content/human/72.jpg",
        "number": 7067890103,
        "status": false
    },

]
let contactActive = document.querySelector('.active')
let contactIdle = document.querySelector('.idle')

function displayContact(allContact) {
    let activeList = ""    
    let idleList = ""    
    allContact.forEach(element => {
        let card = `<li class="contact ${element.status? 'online': ''}">
                         <div class="profile-img">
                         <img src="${element.image}" alt="">
                         </div>
                         <div class="profile-details">
                         <div class="name">${element.name}</div>
                         <div class="details">
                             Lorem ipsum dolor, sit amet consectetur.
                         </div>
                         </div>
                    </li>`
                   element.status? activeList += card: idleList += card
    })
    contactActive.querySelector('.contacts').innerHTML = activeList;
    contactIdle.querySelector('.contacts').innerHTML = idleList;
}

displayContact(allContact);













