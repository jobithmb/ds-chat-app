const buttons = document.querySelectorAll('.buttons .button');
const tabs = document.querySelectorAll('.tabs .tab')
 buttons.forEach(button =>
    button.addEventListener('click',(e) =>{
        const parent = e.target.parentNode
        buttons.forEach(btn => btn.classList = 'button')
        parent.classList = 'button active'

        const target = parent.getAttribute('data-target');

        tabs.forEach(tab => tab.classList = 'tab');
        const tab = document.querySelector(`.tab[data-name="${target}"]`);
        console.log(tab);
        tab.classList = "tab active";
    }
     ))