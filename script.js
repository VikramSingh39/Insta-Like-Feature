const post = document.querySelector('.post');
const heart = document.querySelector('.heart')
const like = document.querySelector('.like_me');

function animateHeart(){
     heart.style.transform = 'translate(-50%, -50%) scale(3.5)';
     heart.style.opacity = 0.8;

     setTimeout( ()=>{
      heart.style.opacity = 0;
      heart.style.transform = 'translate(-50%, -50%) scale(0)';
     },1000);
}

post.addEventListener('dblclick', animateHeart);
like.addEventListener('click', animateHeart);


