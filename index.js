
var imgwidth = 100;

function showMember($container,member,indentation,isSpouse) {
  
  var $member =  $('<div id="'+member.id+'" class="member"/>');
  
  var $filler = $('<div class="filler"/>');
  $filler.width(indentation*imgwidth);
  $member.append($filler);
    
  if (!member.img) member.img = "blank.png";
  var $img = $('<img class="person"/>').attr('src',member.img);
  $member.append($("<a/>").attr('href',member.img).append($img));
  
  var nme = member.name;

  if (member.spouse) {
    
     if (!member.spouse.img) member.spouse.img = "blank.png";
     $member.append( $('<img class="person spouse"/>').attr('src',member.spouse.img) );
     nme += ' & '+member.spouse.name;     
  }
  
  $member.append($('<p class="name" />').text(nme));
  $container.append($member);
  
  if (member.children) {
    var $children = $('<div id="childrenof-'+member.id+'" class="children"/>');
    $container.append($children);
    member.children.map ( m => showMember($children,m,indentation+1,false));
  }
}

$(function() {
  var $treemap = $("#treemaproot");
  imgwidth = $("#img-iAvis").width();
  family.map( m => showMember($treemap,m,1,false) );
});