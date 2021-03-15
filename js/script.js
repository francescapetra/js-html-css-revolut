var menuLink = $(".rigth_nav li ");

menuLink.click(
  function(){
    $(this).children(".dropdown_menu").slideToggle();
  }
);
