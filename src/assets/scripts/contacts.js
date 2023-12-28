
export default class Contact{
  firstName = null;
  lastName = null;
  number =null;
  picture = null;
  IsOnline = false;

    constructor(firstName,lastName,number,picture,IsOnline = false){
      this.firstName = firstName;
      this.lastName = lastName;
      this.number = number;
      this.picture = picture;
      this.IsOnline = IsOnline;
    }
    getFullName(){
      return ` ${this.firstName} ${this.lastName}`
     }
}