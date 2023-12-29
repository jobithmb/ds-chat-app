// delete function
function delete_contact(id){
    contacts = contacts.filter(contact => {
        return contact.id != id;
    });
    const rowToRemove = document.getElementById(id);
    if (rowToRemove && confirm("Are you sure ?")) {
        // rowToRemove.parentElement.removeChild(rowToRemove);
        console.log(rowToRemove);
    }
    // saveTaskToLocalStorage();
  }
  

  
  