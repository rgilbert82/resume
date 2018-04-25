$("#home-projects-wrapper").on("mouseenter", "li", function(e) {
  $(e.currentTarget).find(".dark-layer").stop().fadeOut(250);
});

$("#home-projects-wrapper").on("mouseleave", "li", function(e) {
  $(e.currentTarget).find(".dark-layer").stop().fadeIn(250);
});
