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
    user: "Kyle Johnson",
    avatar: "./img/avatar-woman-1.png",
    score: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique temporibus doloribus veniam quidem ipsa laboriosam, iure perspiciatis aspernatur minima optio!"
  },
  {
    id: 3,
    user: "Mark Twain",
    avatar: "./img/avatar-man-2.png",
    score: 4,
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste in veritatis. Iusto, dolorem rem."
  }
];

// DOM
const btns = document.querySelectorAll('.js-reviews__button');
const review = document.querySelector('.js-reviews__review');

//Global Variables
let reviewId = Math.floor(Math.random() * 3);


// Functions
let cleanReviewContent = function(){
  review.innerHTML = '';
}

let loadScore = function(id){
  let score = reviewsDB[id].score;
  let stars = ``;
  const wholeStar = `<span class="material-symbols-outlined reviews__star">star</span>`;
  const halfStar = `<span class="material-symbols-outlined reviews__star reviews__star--half">star_half</span>`;
  if (Number.isInteger(score)) {
   stars = wholeStar.repeat(score);
   return stars;
  } else if (!Number.isInteger(score)) {
    stars = wholeStar.repeat(score);
    stars += halfStar;
    return stars;
  }
}


let loadReview = function(id){
  let reviewData = 
  `
    <div class="reviews__img"><img src="${reviewsDB[id].avatar}" class="reviews__img--resize" alt="review-img"></div>
    <div class="reviews__author">${reviewsDB[id].user}</div>
    <div class="reviews__score">
    ${loadScore(id)}
    </div>
    <div class="reviews-_description">${reviewsDB[id].review}</div>
  `;
  review.insertAdjacentHTML("afterbegin", reviewData);
}

let displayPreviousReview = function(){
  if (reviewId > 0) {
    reviewId -= 1;
    loadReview(reviewId);
  } else if (reviewId <= 0) {
    reviewId = reviewsDB.length -1;
    loadReview(reviewId);
  }
}

let displayNextReview = function() {
  if (reviewId < reviewsDB.length -1) {
    reviewId += 1;
    loadReview(reviewId);
  } else if (reviewId >= reviewsDB.length -1) {
    reviewId = 0;
    loadReview(reviewId);
  }

}

loadReview(reviewId);

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    cleanReviewContent();

    if (btn.classList.contains('js-reviews__button--prev')) {
      displayPreviousReview();
    } else if (btn.classList.contains('js-reviews__button--next')) {
      displayNextReview();
    }
  })
})