// For opening and closing project profile windows

var $modalLayer = $("#modal-layer");
var $projectModal = $modalLayer.find("#project-modal");
var $modalWindow = $modalLayer.find("#project-window");

var projectWindow = {
  createTemplates: function() {
    this.trelloTemplate =       Handlebars.compile($("#trello-clone-profile").remove().html());
    this.trelloRailsTemplate =  Handlebars.compile($("#trello-rails-profile").remove().html());
    this.streamerTemplate =     Handlebars.compile($("#streamer-profile").remove().html());
    this.synthForumTemplate =   Handlebars.compile($("#synth-forum-profile").remove().html());
    this.tweeterTemplate =      Handlebars.compile($("#tweeter-profile").remove().html());
    this.fivechanTemplate =     Handlebars.compile($("#fivechan-profile").remove().html());
    this.techblogTemplate =     Handlebars.compile($("#techblog-profile").remove().html());
    this.discographyTemplate =  Handlebars.compile($("#discography-profile").remove().html());
    this.protoBlogTemplate =    Handlebars.compile($("#proto-blog-profile").remove().html());
    this.yelpTemplate =         Handlebars.compile($("#yelp-clone-profile").remove().html());
    this.plannerTemplate =      Handlebars.compile($("#personal-planner-profile").remove().html());
    this.postitTemplate =       Handlebars.compile($("#postit-profile").remove().html());
    this.contactsTemplate =     Handlebars.compile($("#contacts-manager-profile").remove().html());
    this.todoListTemplate =     Handlebars.compile($("#todo-list-profile").remove().html());
    this.ledzepTemplate =       Handlebars.compile($("#ledzep-profile").remove().html());
    this.contacts2Template =    Handlebars.compile($("#contacts-sinatra-profile").remove().html());
  },
  hideModal: function() {
    $("body").removeClass("noscroll");
    $modalLayer.hide(200);
  },
  openModal: function(template) {
    $("body").addClass("noscroll");
    $modalWindow.html(template());
    $modalLayer.show(200);
    $projectModal[0].scrollTop = 0;
  },
  openAppropriateModal: function(e) {
    var appListItem = $(e.currentTarget).closest("li").attr("id");

    e.preventDefault();

    switch (appListItem) {
      case "yelp-clone":
        this.openModal(this.yelpTemplate);
        break;
      case "trello-clone":
        this.openModal(this.trelloTemplate);
        break;
      case "trello-rails":
        this.openModal(this.trelloRailsTemplate);
        break;
      case "streamer":
        this.openModal(this.streamerTemplate);
        break;
      case "synth-forum":
        this.openModal(this.synthForumTemplate);
        break;
      case "tweeter":
        this.openModal(this.tweeterTemplate);
        break;
      case "fivechan":
        this.openModal(this.fivechanTemplate);
        break;
      case "techblog":
        this.openModal(this.techblogTemplate);
        break;
      case "discography":
        this.openModal(this.discographyTemplate);
        break;
      case "proto-blog":
        this.openModal(this.protoBlogTemplate);
        break;
      case "personal-planner":
        this.openModal(this.plannerTemplate);
        break;
      case "postit":
        this.openModal(this.postitTemplate);
        break;
      case "contacts-manager":
        this.openModal(this.contactsTemplate);
        break;
      case "todo-list":
        this.openModal(this.todoListTemplate);
        break;
      case "ledzep":
        this.openModal(this.ledzepTemplate);
        break;
      case "contacts-sinatra":
        this.openModal(this.contacts2Template);
        break;
    }
  },
  bindEvents: function() {
    $modalLayer.on("click", "#modal-dark-layer", this.hideModal.bind(this));
    $(".profile-link").on("click", this.openAppropriateModal.bind(this));
  },
  init: function() {
    this.createTemplates();
    this.bindEvents();
  }
};

projectWindow.init();
