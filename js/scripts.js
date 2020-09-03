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
var list=document.querySelectorAll('.timeline li');
console.log(list);
var j=1;
for(var i=0;i<list.length;i++)
{
    list[i].style.animationDelay+="${j}s";
    j=j+2;

}
console.log(list[2].style.animationDelay);
