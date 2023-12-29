import '../styles/main.scss'
import 'remixicon/fonts/remixicon.css'
import './search'
import './tabs'

import Contact from './contacts'
import { faker } from '@faker-js/faker'


let contacts = [];
for (let i = 0; i< 10; i++){
    contacts.push (
       new Contact(
        new Date().getTime(),
        faker.person.firstName(),
        faker.person.lastName(),
        faker.phone.number(),
        faker.image.avatar(),
        faker.datatype.boolean(0.5)
       )
    )
}

const contactList = document.getElementById('contacts-list')
// Dynamic contacts in contacts tab

let contactHTML = '';
contacts.forEach(contact =>{
    contactHTML += `
        <li id="${contact.id}" class = "contact ${contact.IsOnline? 'online' : 'offline'}">
                      <div class="profile-img">
                        <img src="${contact.picture}" alt="Image">
                      </div>
                      <div class="profile-details">
                        <div class="name">${contact.getFullName()}</div>
                        <div class="number">
                          ${contact.number}
                        </div>
                      </div>
                        <button id="deleteBtn" class="deleteBtn"><i class="ri-delete-bin-6-line" data-contact-id="${contact.id}"></i></button>
        </li>
    `
})
contactList.innerHTML = contactHTML

// delete functionality start
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('ri-delete-bin-6-line')) {
      const contactId = event.target.getAttribute('data-contact-id');
      if (contactId) {
          delete_contact(contactId);
      }
  }
});


function delete_contact(id){
  contacts = contacts.filter(contact => {
      return contact.id != id;
  });
  const rowToRemove = document.getElementById(id);
  if (rowToRemove && confirm("Are you sure ?")) {
      rowToRemove.parentElement.removeChild(rowToRemove);
      console.log(rowToRemove);
  }
}
// delete functionality end

