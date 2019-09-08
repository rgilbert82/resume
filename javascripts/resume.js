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

function explodeInvader(e) {
  var $target  = $(e.currentTarget);
  var $body    = $('body');

  if ($target.hasClass('space-invader-killed')) { return; }

  $target.stop();
  $target.addClass('space-invader-killed');

  $target.css({
    'transition': 'all 0.1s linear',
    'filter': 'invert(100%) sepia(74%) saturate(4738%) hue-rotate(91deg) brightness(103%) contrast(102%)',
    'width': '250px'
  });

  $body.addClass('body-space-invader-killed');

  setTimeout(function() {
    $target.css({
      'transition': 'all 0.75s linear',
      'filter': 'invert(22%) sepia(97%) saturate(7488%) hue-rotate(358deg) brightness(98%) contrast(109%)',
      'transform': 'translateX(-100%) rotate(360deg)',
      'width': '0'
    });

    $body.removeClass('body-space-invader-killed');
  }, 150);

  setTimeout(function() {
    $target.remove();
  }, 1500);
}

// ============================================================================

function generateSpaceInvader() {
  var imageSrc = 'images/invader-blue.gif';
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

setInterval(generateSpaceInvader, 20000);


$('body').on('mouseenter', '.space-invader', explodeInvader);
$('body').on('click', '.space-invader', explodeInvader);
