$(window).ready(function() {
 	var imageHeight = $(".read-comic li").height()
    $(".read-comic").css('height',imageHeight);
    
    var currentImage = 0;
    //set image count 
    var allImages = $('.read-comic li img').length;

    //attach click event to slideshow buttons
    $('.read-comic').click(function(){
        //increase image counter
        currentImage++;
        //if we are at the end let set it to 0
        if(currentImage>=allImages) currentImage = 0;
        //calcualte and set position
        setFramePosition(currentImage);
    });
    
    $('body').keyup(function(e){
       if(e.keyCode == 32){
        //increase image counter
        currentImage++;
        //if we are at the end let set it to 0
        if(currentImage>=allImages) currentImage = 0;
        //calcualte and set position
        setFramePosition(currentImage);
       }
    });

});

$(window).resize(function() {
    var imageHeight = $(".read-comic li").height()
    $(".read-comic").css('height',imageHeight);
});

function setFramePosition(pos){
    var imageHeight = $('.read-comic').height();
    //calculate position
    var px = (imageHeight)*pos*-1;
    //set ul top position
    $('.read-comic ul').animate({
        top: px
    }, 0);
}
