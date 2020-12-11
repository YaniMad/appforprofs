const bubbles = document.querySelectorAll('.navigation_icon');
const anchors = document.querySelectorAll('.line-progress');

window.addEventListener('scroll', function() {
  let anchorIndex = 0;
  
  anchors.forEach(function (anchor, index) {
    const bounding = anchor.getBoundingClientRect();
    const y = bounding.y ;
    if (y < 0) {
      anchorIndex = index;
    }
  });
  
  bubbles.forEach(function (bubble, index) {
    if (index === anchorIndex) {
      bubble.classList.add('is-active');
    } else {
      bubble.classList.remove('is-active');    
    }
  });
});