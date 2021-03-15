var menuLink = $(".rigth_nav li ");

menuLink.click(
  function(){
    $(this).children(".dropdown_menu").slideToggle();
  }
);

menuLink.mouseenter(
  function(){
    $(this).children(".dropdown_menu").show();
  }
);
menuLink.mouseleave(
  function(){
    $(this).children(".dropdown_menu").hide();
  }
);
