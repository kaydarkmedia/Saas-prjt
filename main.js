const faqGroup = document.querySelectorAll('.faq-group');
const faqBody = document.querySelectorAll('.faq-group-body');


faqGroup.forEach(faqgroup =>{
    faqgroup.addEventListener('click', () =>{
        faqGroup.classList.toggle('open');
    });
});