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
        faker.datatype.boolean(0.5)
       )
    )
}
