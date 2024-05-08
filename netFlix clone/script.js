const icons = document.querySelectorAll('.fa-plus');
const faqDetail = document.querySelectorAll('.faq-detail');
Array.from(faqDetail).map(item=>item.classList.remove('show'))
icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const currentFaqDetail = faqDetail[index];
        
        faqDetail.forEach((detail, i) => {
            if (i !== index && detail !== currentFaqDetail) {
                detail.classList.remove('show');
                icons[i].classList.remove('fa-times');
                icons[i].classList.add('fa-plus');
            }
        });

        const isActive = currentFaqDetail.classList.contains('show');
        currentFaqDetail.classList.toggle('show', !isActive);
        icon.classList.toggle('fa-times', !isActive);
        icon.classList.toggle('fa-plus', isActive);
    });
});
