"use strict"

// Database
const reviewsDB = [
  {
    id: 1,
    user: "John Smith",
    avatar: "./img/avatar-man-1.png",
    score: 4.5,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, itaque."
  },
  {
    id: 2,
    user: "John Smith",
    avatar: "./img/avatar-man-1.png",
    score: 4.5,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique temporibus doloribus veniam quidem ipsa laboriosam, iure perspiciatis aspernatur minima optio!"
  },
  {
    id: 3,
    user: "John Smith",
    avatar: "./img/avatar-man-1.png",
    score: 4.5,
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste in veritatis. Iusto, dolorem rem."
  }
];

// DOM
const btns = document.querySelectorAll('.js-reviews__button');


btns.forEach(btn => {
  btn.addEventListener('click', ()=>{
    if (btn.classList.contains('js-reviews__button--prev')) {
      console.log('Previous')
    } else if (btn.classList.contains('js-reviews__button--next')){
      console.log('Next');
    }
  })
})