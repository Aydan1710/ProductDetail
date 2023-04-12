'use script'

let MainImg= document.getElementsByClassName('img-fluid w-100 pb-1');
let smallimg=document.getElementsByClassName('small-img');
let newArr = Array.from($('img'));

smallimg[0].onclick=function(){
    MainImg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    MainImg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    MainImg.src=smallimg[2].src;
}












let newArray = Array.from($("img"));

  newArray.forEach((element, index) => {
    if (index % 2 == 0) {
      element.style.float = "right";
    } else {
      element.style.float = "left";
    }
  });


  $("img").attr("title", "Nike");


  $('#bg').css({
    'width' : '100%',
    'height' : '100%',
    'background-repeat' : 'no-repeat',
    'background-size' : 'contain',
    'background-position' : 'center',
     'background-color' : 'rgba(0,0,0,0.5)',
     position  : 'fixed',
     top : 0,
     display : "none",
     'cursor' : 'zoom-out'
     
  })


  $('img').click(function(){
  let imgPath = $(this).attr('src');
  $('#bg').css({
    'background-image' : `url('${imgPath}')`,
    'display' : 'block'
  })
  });

  $('#bg').click(function(){
    $('#bg').css({
        'display':'none'
    })
  });