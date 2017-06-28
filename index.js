
var imgwidth = 100;

function appendImg($container,src,id,classes,name) {
  var $img = $('<img class="'+classes+'"/>').attr('src',src?src:"blank.png");
  if (src) { 
    $img.attr('id',id);
    $img.attr('title',name);
  }
  var $aimg = src?$('<a target="#" />').attr('href',src).append($img):$img;
  $container.append($aimg);
}

function showMember($container,member,indentation) {
  
  var $member =  $('<div id="'+member.id+'" class="member"/>');
  
  var $filler = $('<div class="filler"/>');
  $filler.width(indentation*imgwidth);
  $member.append($filler);
      
  appendImg($member,member.img,'img-'+member.id,'person',member.name); 
  var nme = member.name;

  if (member.spouse) {  
     appendImg($member,member.spouse.img,'img-'+member.spouse.id,'person spouse',member.spouse.name);
     nme += ' & '+member.spouse.name;   
  }
  
  $member.append($('<p class="name" />').text(nme));
  $container.append($member);

  if (member.children) {
    $member.addClass('collapsable');
    var $children = $('<div id="childrenof-'+member.id+'" class="children"/>');
    $container.append($children);
    member.children.map ( m => showMember($children,m,indentation+1));
  }
}

$(function() {
  var $treemap = $("#treemaproot");
  imgwidth = $("#img-iAvis").width();
  family.map( m => showMember($treemap,m,1) );
});