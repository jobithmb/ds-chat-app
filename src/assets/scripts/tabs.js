
const buttons = document.querySelectorAll('.buttons .button');
const tabs = document.querySelectorAll('.tabs .tab');
 
function activeTab(target){
    tabs.forEach(tab => tab.classList.remove('active'));
    const selectedTab = document.querySelector(`.tab[data-name="${target}"]`);
    if(selectedTab){
        selectedTab.classList.add('active');
    }
}
 
 buttons.forEach(button =>
    button.addEventListener('click',(e) => {
        const parent = e.target.parentNode;
 
        buttons.forEach(btn => btn.classList.remove('active'))
        parent.classList.add('active');
 
        const target = parent.getAttribute('data-target');
        activeTab(target);
    }
     ))

     