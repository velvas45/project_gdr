const sidebarButton = document.querySelector('#sidebarCall');
const closeButton = document.querySelector('.sidebar__closeBtn');
const trimWord = document.querySelectorAll('#describeString');
const year = document.querySelector('#newYear');

// open and close sidebar
sidebarButton.addEventListener('click', ()=>{
    document.querySelector('.sidebar').style.width = "100%";
});

closeButton.addEventListener('click', ()=> {
    document.querySelector('.sidebar').style.width = "0";
});

// shorten string
function truncateString(str, num) {
    if (str.length <= num) {
    return str
    }
    const newText = str.slice(0, num) + '...'
    trimWord.forEach(data => {
        data.textContent = newText;
    })
}

trimWord.forEach(data => {
    truncateString(data.textContent,40);
});

// Swiper js
const swiper = new Swiper('.swiper-container', {
    // slidesPerView:3,
    // spaceBetween: 30,
    // loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

year.innerHTML = new Date().getFullYear();