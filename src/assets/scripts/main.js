import '../styles/main.scss'
import 'remixicon/fonts/remixicon.css'
import './search'
import './tabs'

import Contact from './contacts'
import { faker } from '@faker-js/faker'


let contacts = [];
for (let i = 0; i < 10; i++) {
  contacts.push(
    new Contact(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.phone.number(),
      faker.image.avatar(),
      faker.datatype.boolean(0.5)
    )
  )
}

contacts.sort((a, b) => a.firstName.localeCompare(b.firstName))
const contactList = document.getElementById('contacts-list')
// Dynamic contacts in contacts tab

let contactHTML = '';
contacts.forEach(contact => {
  contactHTML += `
        <li class = "contact ${contact.IsOnline ? 'online' : 'offline'}">
                      <div class="profile-img">
                        <img src="${contact.picture}" alt="Image">
                      </div>
                      <div class="profile-details">
                        <div class="name">${contact.getFullName()}</div>
                        <div class="number">
                          ${contact.number}
                        </div>
                      </div>
        </li>
    `
})
contactList.innerHTML = contactHTML;

function loadRecentContacts(contacts) {
  console.log('inn')
  const contactsOnline = document.getElementById('active-contacts');
  const contactsOffline = document.getElementById('idle-contacts');
  let contactsOnlineHTML = ``;
  let contactsOfflineHTML = ``;
  let noContactHTML = ``;
  contacts.forEach(contact => {
    if (contact.IsOnline) {
      contactsOnlineHTML += `<li class="contact online">
      <div class="profile-img">
        <img src="${contact.picture}" alt="">
      </div>
      <div class="profile-details">
        <div class="name">${contact.getfullName()}</div>
        <div class="details">
        ${contact.number}
        </div>
      </div>
    </li>`
    } else {
      contactsOfflineHTML += `<li class="contact offline">
      <div class="profile-img">
        <img src="${contact.picture}" alt="">
      </div>
      <div class="profile-details">
        <div class="name">${contact.getfullName()}</div>
        <div class="details">
        ${contact.number}
        </div>
      </div>
    </li>`
    }
    contactsOnline.innerHTML = contactsOnlineHTML;
    contactsOffline.innerHTML = contactsOfflineHTML;
  });
}
loadRecentContacts(contacts);


