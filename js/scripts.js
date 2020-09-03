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
