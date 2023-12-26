export default class Contact{
    firstName = null;
    lastName = null;
    picture = null;
    IsOnline = false;

      constructor(firstName,lastName,picture,IsOnline = false){
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.IsOnline = IsOnline;
      }

}