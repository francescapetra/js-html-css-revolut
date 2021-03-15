var menuLink = $(".rigth_nav li ");

menuLink.mouseenter(
  function(){
    $(this).parent().find(".dropdown_menu").hide();
    $(this).children(".dropdown_menu").show();
  }
);
menuLink.click(
  function(){
    $(this).children(".dropdown_menu").toggle();
  }
);
