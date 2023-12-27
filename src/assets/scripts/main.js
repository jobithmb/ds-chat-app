import '../styles/main.scss'
import 'remixicon/fonts/remixicon.css'
import './tabs'


import Contact from './contacts'
import { faker } from '@faker-js/faker'

let contacts = [];
for (let i = 0; i< 10; i++){
    contacts.push (
       new Contact(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.image.avatar(),
        faker.datatype.boolean(0.75)
       )
    )
}

const contactList = document.getElementById('contacts-list');
let ListItems = '';
contacts.forEach(contact => {
    ListItems += `
        <li class="contact ${contact.IsOnline ? 'online':'offline'}>
            <div class="profile-img">
            <img src="${contact.picture}" alt="Image">
            </div>
            <div class="profile-details">
            <div class="name">${contact.firstName}</div>
            <div class="details">
                Lorem ipsum dolor, sit amet consectetur.
            </div>
            </div>
        </li>
    `
});

contactList.innerHTML = ListItems