$("#home-projects-wrapper").on("mouseenter", "li", function(e) {
  $(e.currentTarget).find(".dark-layer").stop().fadeOut(250);
});

$("#home-projects-wrapper").on("mouseleave", "li", function(e) {
  $(e.currentTarget).find(".dark-layer").stop().fadeIn(250);
});

// ============================================================================

function addInvaderToPage(invader) {
  var width      = Math.floor(100 + Math.random() * 125);
  var maxLeft    = window.innerWidth - width - 20;
  var leftPos    = Math.floor(Math.random() * maxLeft);

  $(invader).css({
    'left': `${leftPos}px`
  });

  $('body')[0].appendChild(invader);
  animateInvader(invader, width);
}

// ============================================================================

function animateInvader(invader, width) {
  var self = this;

  $(invader).animate({
    width:  `${width}px`
  }, 1000).animate({
    top: '120%'
  }, {
    duration: 4000,
    complete() {
      invader.remove();
    }
  });
}

// ============================================================================

function generateSpaceInvader() {
  var imageSrc = 'images/invader.gif';
  var div      = document.createElement('div');
  var image    = document.createElement('img');

  div.appendChild(image);
  image.src = imageSrc;
  image.onload = function() {
    addInvaderToPage(div);
  }

  div.className = 'space-invader';
}

// ============================================================================

setInterval(generateSpaceInvader, 15000);
