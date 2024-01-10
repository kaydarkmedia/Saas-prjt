//FAQ ACCORDION

document.addEventListener('DOMContentLoader', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        console.log(groupHeader);
    });
});