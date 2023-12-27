import '../styles/main.scss'
import 'remixicon/fonts/remixicon.css'
import './tabs'


import Contact from './contacts'
import { faker } from '@faker-js/faker'
import '../styles/components/contacts.scss'


let contacts = [];
for (let i = 0; i< 10; i++){
    contacts.push (
       new Contact(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.image.avatar(),
        faker.datatype.boolean(0.5)
       )
    )
}
const contactList = document.getElementById('contacts-list');
let ListItems = '';
contacts.forEach(contact => {
    ListItems += `
        <li class="contact ${contact.IsOnline ? 'online' : 'offline' }">
            <div class="profile-img">
            <img src="${contact.picture}" alt="Image">
            </div>
            <div class="profile-details">
            <div class="name">${contact.getFullname()}</div>
            <div class="details">
                Lorem ipsum dolor, sit amet consectetur.
            </div>
            </div>
        </li>
    `
});


// Dynamic contacts in contacts tab
const contactList = document.getElementById('contact-list');
let contactHTML ='';
contacts.forEach(contact =>{
    contactHTML += `
        <li class = "contact ${contact.IsOnline? 'online' : 'offline'}">
                      <div class="profile-img">
                        <img src="${contact.picture}" alt="">
                      </div>
                      <div class="profile-details">
                        <div class="name">${contact.firstName}</div>
                        <div class="details">
                          Lorem ipsum dolor consectetur.
                        </div>
                      </div>
                    </li>
    `
})
contactList.innerHTML = contactHTML


