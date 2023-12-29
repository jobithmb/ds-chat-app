
export default class Contact{
  id = null;
  firstName = null;
  lastName = null;
  number =null;
  picture = null;
  IsOnline = false;

    constructor(id,firstName,lastName,number,picture,IsOnline = false){
      this.id = id || new Date().getTime();
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