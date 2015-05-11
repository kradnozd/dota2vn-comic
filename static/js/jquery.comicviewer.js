$(window).ready(function() {

    currentImage = 0;
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

$(window).on('load', function() {
    comicSizer('load');
});
$(window).on('resize', function() {
    comicSizer('resize');
    setFramePosition(currentImage);
});

window.onkeydown = function(e) { 
  return !(e.keyCode == 32);
};

function comicSizer(status) {
    var imgsHeight = $(".read-comic ul").height();
    if (status == 'load') {
        $(".read-comic").css('height', imgsHeight);
        var imgHeight = $(".read-comic li").height();
        $(".read-comic").css('height', imgHeight);    
    } else {
        var imgHeight = $(".read-comic li").height();
        $(".read-comic").css('height', imgHeight);
    }
}

function setFramePosition(pos){
    var imageHeight = $('.read-comic').height();
    //calculate position
    var px = (imageHeight)*pos*-1;
    //set ul top position
    $('.read-comic ul').animate({
        top: px
    }, 0);
}
