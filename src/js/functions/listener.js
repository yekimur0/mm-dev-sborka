
export const listener = () => {



   document.addEventListener('click', (e) => {
    const contentBlock = document.querySelector('.dev-trusted-content-step');
    console.log(e.target);
    if (contentBlock.classList.contains('_active')) {
        if (!e.target.closest('.dev-trusted-content-step') && !e.target.closest('g[data-step-number]')) {
        contentBlock.classList.remove('_active');
        contentBlock.dataset.activeIndex = '';
     }
    }
    if (e.target.classList.contains('dev-faq-item-head')) {
        const parent = e.target.closest('.dev-faq-item');
        const activeBlock = document.querySelector('.dev-faq-item--active');

        if (activeBlock) activeBlock.classList.remove('dev-faq-item--active')
        parent.classList.toggle('dev-faq-item--active');

    }

    if (e.target.classList.contains('form-nav-btn')) {
        const idBtn = e.target.dataset.formNavBtn;
        const idBg = document.querySelector(`[data-trusted-bg="${idBtn}"]`);
        const activeImg = document.querySelector('.dev-trusted-bg > ._active');
        const activeBtn = document.querySelector('.form-nav-btn._active');
        if (activeImg) activeImg.classList.remove('_active');
        if (activeBtn) activeBtn.classList.remove('_active');

        idBg.classList.add('_active');
        e.target.classList.add('_active');
    }
    if (e.target.classList.contains('dev-order-list-title')) {
        console.log('dsad')
        const parent = e.target.closest('li');
        const desc = parent.querySelector('.dev-order-list-desc');

        desc.classList.toggle('active');
    }
 });
}

listener();