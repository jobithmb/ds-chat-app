import '../styles/main.scss';
import 'remixicon/fonts/remixicon.css';
import './search';
import './tabs';

import Contact from './contacts';
import { faker } from '@faker-js/faker';


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
        <li class = "contact ${contact.IsOnline ? 'online' : 'offline'}" id = "${contact.number}">
                      <div class="profile-img">
                        <img src="${contact.picture}" alt="Image">
                      </div>
                      <div class="profile-details">
                        <div class="name">${contact.getFullName()}</div>
                        <div class="details">
                          ${contact.number}
                        </div>
                      </div>
                      <button id="deleteBtn" class="deleteBtn"><i class="ri-delete-bin-6-line" data-contact-id="${contact.number}"></i></button>
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

function loadRecentContacts(contacts) {
  console.log('inn')
  const contactsOnline = document.getElementById('active-contacts');
  const contactsOffline = document.getElementById('idle-contacts');
  let contactsOnlineHTML = ``;
  let contactsOfflineHTML = ``;
  let noContactHTML = ``;
  contacts.forEach(contact => {
    if (contact.IsOnline) {
      contactsOnlineHTML += `<li class="contact online" id = "${contact.number}">
      <div class="profile-img">
        <img src="${contact.picture}" alt="">
      </div>
      <div class="profile-details">
        <div class="name">${contact.getFullName()}</div>
        <div class="details">
        ${contact.number}
        </div>
      </div>
    </li>`
    } else {
      contactsOfflineHTML += `<li class="contact offline" id = "${contact.number}">
      <div class="profile-img">
        <img src="${contact.picture}" alt="">
      </div>
      <div class="profile-details">
        <div class="name">${contact.getFullName()}</div>
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




// display function
let chatContacts = document.querySelectorAll('.contact'); //node list
let chatContactArr = Array.from(chatContacts); //contact array
// console.log(chatContactArr);
chatContactArr.forEach(chatContact=>{
  // click event for each contact
  chatContact.addEventListener('click', (e)=>{
    chatContactArr.forEach(contact=>contact.classList.remove('current'));
    chatContact.classList.add('current');
    let contactId = chatContact.id;
    let contact = contacts.find(contact => contact.number === contactId);
    // console.log(contact)
    if(contact){
      let mainContent = document.querySelector('.main-content')
      let contactHTML = '';
      contactHTML += `
      <!-- Chat header start -->
      <div class="chat-header">
          <div class="profile">
              <div class="profile-img">
                <img src=${contact.picture} alt ='image'/>
              </div>
              <div class="name">
                  <p>${contact.getFullName()}</p>
              </div>
          </div>
          <div class="options">
            <div class="calls">
                <div class="video-call main-icon">
                  <i class="ri-video-chat-line"></i>
              </div>
                <div class="voice-call main-icon">
                    <i class="ri-phone-line"></i>
                </div>
                <div class="group-call main-icon">
                    <i class="ri-group-line"></i>
                </div>
            </div>
            <div class="more-option">
              <i class="ri-more-2-fill"></i>
            </div>
          </div>

      </div>
    <!-- chat header end -->

      <!-- chat-content start -->
      <div class="chat-box">
        <div class="incoming-msg">
            <div class="profile-img">
              <img src=${contact.picture} alt ='image' />
            </div>
            <div class="message">
              <p>Lorem ipsum dolor sit amet consecteture </p>
            </div>
            <div class="time">
              <p>12:30 am</p>
            </div>
        </div>  

        <div class="outgoing-msg">
            <div class="time">
              <p>12:32 am</p>
            </div>
            <div class="message">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis harum voluptatibus assumenda commodi expedita deleniti? </p>
            </div>
            <div class="profile-img">
              <img src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt ='image' />
            </div>
        </div> 

        <div class="incoming-msg">
            <div class="profile-img">
              <img src=${contact.picture} alt ='image' />
            </div>
            <div class="message">
              <p>Lorem ipsum dolor sit amet consecteture </p>
            </div>
            <div class="time">
              <p>12:34 am</p>
            </div>
        </div>

        <div class="outgoing-msg">
          <div class="time">
            <p>12:35 am</p>
          </div>
          <div class="message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis harum </p>
          </div>
          <div class="profile-img">
            <img src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt ='image' />
          </div>
      </div> 

      <div class="incoming-msg">
            <div class="profile-img">
              <img src=${contact.picture} alt ='image' />
            </div>
            <div class="message">
              <p>Lorem ipsum dolor sit amet consecteture </p>
            </div>
            <div class="time">
              <p>12:37 am</p>
            </div>
      </div>
    
      <div class="outgoing-msg">
        <div class="message">
          <p>Typing... </p>
        </div>
        <div class="profile-img">
          <img src="https://mighty.tools/mockmind-api/content/human/7.jpg" alt ='image' />
        </div>
      </div> 

   </div>
 <!-- chat-content end -->
      `;
   
    mainContent.innerHTML = contactHTML;
      
  }
})
})