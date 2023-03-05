// const BURGER_MENU = document.querySelector('.burger_menu');
// const MOBILE_MENU = document.querySelector('.mobile__menu');
// const HEADER = document.querySelector('header');
// const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile__menu a');

// const switchMobileMenu = () => {
//   BURGER_MENU.classList.toggle('active');
//   MOBILE_MENU.classList.toggle('active');
//   HEADER.classList.toggle('active');
// };

// BURGER_MENU.addEventListener('click', () => {
//   switchMobileMenu();
// })

// MOBILE_MENU_LINKS.forEach((link) => {
//   link.addEventListener('click', () => {
//     switchMobileMenu();
//   })
// })

// // showelement on scroll
// document.addEventListener('scroll', () => {
//   const ELEMENT = document.querySelector('.scroll-up');
//   // display scroll up button after 100px
//   if (window.scrollY > 20) {
//     ELEMENT.classList.add('show');
//   }else{
//     ELEMENT.classList.remove('show');
//   }
// })

const FRUITS = [
    {
      id: 1,
      name: 'Apple',
      price: 100,
    },
    {
      id: 2,
      name: 'Orange',
      price: 200,
    },
    {
      id: 3,
      name: 'Banana',
      price: 300,
    }
  ];
  
const ELECTRONICS = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
    },
    {
      id: 2,
      name: 'Phone',
      price: 2000,
    },
    {
      id: 3,
      name: 'TV',
      price: 3000,
    }
  ];

  //взяти всі попередні
const PRODUCTS = [...FRUITS, ...ELECTRONICS];

//вивести на екран
  function showPostsOnPage(selector, array) {
    let html = '';
    array.forEach((item) => {
      html += `
    <div class="card" id="${item.id}>
      <h1 class="name_card">${item.name}</h1>
      <p class="price_card">${item.price}</p>
    </div>
      `
    });
    const TARGET = document.querySelector(selector);
    TARGET.innerHTML = html;
  }

//переключатель
const TABS = document.querySelectorAll('.tabs__item');
const CONTENT = document.querySelectorAll('.tabs__content');

TABS.forEach((tab) => {
    tab.addEventListener('click', () => {
        TABS.forEach((tab) => {
            tab.classList.remove('selected');
        });
        tab.classList.add('selected');

        const DATA_ATRIBUTE = tab.getAttribute('data-products');
        CONTENT.forEach((item) => {
            item.classList.add('d-none');
            if(item.getAttribute('data-products') == DATA_ATRIBUTE) {
                item.classList.remove('d-none')
            }
        });

    })
});

//кнопки
document.addEventListener('DOMContentLoaded', () => {
showPostsOnPage('#fruits', FRUITS)
showPostsOnPage('#electronics', ELECTRONICS)
showPostsOnPage('#all_products', PRODUCTS)
})

const ABS_BTN = document.querySelector('#abs');
ABS_BTN.addEventListener('click', () => {
    const SELECTED_TAB = document.querySelector('.tabs__item.selected');
    const DATA_ATRIBUTE = SELECTED_TAB.getAttribute('data-id');
    if (DATA_ATRIBUTE === 'fruits') {
        FRUITS.sort((a, b) => {
            return a.price - b.price;
        });
        showPostsOnPage('#fruits', FRUITS);
    }else if (DATA_ATRIBUTE == 'electronics') {
        ELECTRONICS.sort((a, b) => {
            return a.price - b.price;
        });
        showPostsOnPage('#electronics', ELECTRONICS);
    }else {
        PRODUCTS.sort((a, b) => {
            return a.price - b.price;
        });
        showPostsOnPage('#all_products', PRODUCTS);
    }
})