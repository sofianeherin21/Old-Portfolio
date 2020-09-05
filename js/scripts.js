$(document).ready(function(){

            $('[data-toggle="tooltip"]').tooltip(); 
            $("#myCarousel").carousel({interval: 2000});
            $("#carouselBtn").click(function(){
                if($("#carouselBtn").children("span").hasClass('fa-pause'))
                {
                    $("#myCarousel").carousel('pause');
                    $("#carouselBtn").children("span").removeClass('fa-pause');
                    $("#carouselBtn").children("span").addClass('fa-play');
                }

                else if($("#carouselBtn").children("span").hasClass('fa-play'))
                {
                    $("#myCarousel").carousel('cycle');
                    $("#carouselBtn").children("span").removeClass('fa-play');
                    $("#carouselBtn").children("span").addClass('fa-pause');
                }
                
            })

})
items=document.querySelectorAll('.timeline .list');
for(var i=0;i<items.length;i++)
{
    var toggleItemMove = getToggleItemMove( i );
    setTimeout( toggleItemMove, i * 200 );
}
function getToggleItemMove( i ) {
  var item = items[i];
  return function() {
    item.style.animation='fadeRight 2s';
    item.style.animationFillMode='forwards'
  }
}

// cards=document.querySelectorAll('#project .card');
// for(var i=0;i<cards.length;i++)
// {
//     var toggleCardMove = getToggleCardMove( i );
//     setTimeout( toggleCardMove, i * 500 );
// }
// function getToggleCardMove( i ) {
//   var card = cards[i];
//   return function() {
//     card.style.animation='fadeRight 2s';
//     card.style.animationFillMode='forwards'
//   }
// }
