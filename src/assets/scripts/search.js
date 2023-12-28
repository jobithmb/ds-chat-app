const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', handleSearchInput);

function handleSearchInput(){
    const searchItem = searchInput.value.toLowerCase();
    let recordFound = false; 

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab =>{
       const tabName = tab.dataset.name;
       const tabContacts = document.querySelectorAll(`.tab[data-name ="${tabName}"] .contact`);
       const noRecordMsg = document.getElementById(`noRecordMessage${tabName}`);

       tabContacts.forEach((contact) => {
           const contactName = contact.querySelector('.name').textContent.toLowerCase();

           if(contactName.includes(searchItem)){
               contact.style.display = 'flex';
               recordFound = true;
           }
           else{
              contact.style.display = "none";
           }
       });
       if(recordFound){
          noRecordMsg.style.display = 'none';
       }
       else{
          noRecordMsg.style.display = 'block';
       }

       recordFound = false; // reset for next tab
    });
  
}