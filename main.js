const selectelement = (Element) => document.querySelector(Element);

selectelement('.mobile-menu').addEventListener('click',() =>{
    selectelement('header').classList.toggle('active');
});