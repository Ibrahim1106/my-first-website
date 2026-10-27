
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. فتح وإغلاق القائمة عند النقر على زر الهاتف
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 2. إغلاق القائمة تلقائياً عند النقر على أي رابط داخلها
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // التمرير السلس البرمجي وضمان إغلاق القائمة
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }

            // إغلاق قائمة الهواتف عند الاختيار
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
