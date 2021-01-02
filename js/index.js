$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $nav = $(".navbar-brand");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    var $nav = $(".item");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function beautifySkill(){
  var $nav = $(".project-skill");

  for(id=0;id<$nav.length;id++){
    var skills = $nav[id].innerText.split(",");
    if(skills.length>0){
    var text="";
    for(skill=0;skill<skills.length;skill++)
    {
      text+='<div class="skill">'+skills[skill]+' </div>';
    }
    $nav[id].innerHTML=text;
    }
  }
}
beautifySkill();
