$(".loaded").on('load', function() {
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function() {
        $hamburger.toggleClass("is-active");
        $('#navbar').toggleClass("is-active");
        if ($('#navbar').hasClass('is-active')) {
            $('td#contract').appendTo('.dubsado-menu');
            $('td#invoice').appendTo('.dubsado-menu');
        } else {
            $('td#contract').appendTo('#quote-flow table tbody tr');
            $('td#invoice').appendTo('#quote-flow table tbody tr');
        }
    });
    var bgElems = $(".changebg");
    for(var i=0; i<bgElems.length; i++){
        var element = bgElems.eq(i);
        if ( element.hasClass('bgcolor') ) {
            var bg = element.css("background-color");
            element.parents().eq(4).css("background-color", bg).addClass("full-width");
        }  if ( element.hasClass('bgimg') ) {
            var bgImg = element.css("background-image");
            element.parents().eq(4).css("background-image", bgImg).addClass("full-width");
        }
    }
    var formText = $(".text");
    for(var k=0; k<formText.length; k++){
        var textElement = formText.eq(k);
        var color = textElement.css("color");
        textElement.parents().eq(4).find(".column*, .form-text *, label, input, textarea, .packageNotSelected *, .packageSelected *").css({
            'color': color,
            'border-color': color
        });
    }
    var sg = $(".sg");
    for(var i=0; i<sg.length; i++){
        var element2 = sg.eq(i);
        var sgClass = element2.attr("class").split(" ");
        for(var j=0; j<sgClass.length; j++){
            element2.parents().eq(4).addClass(sgClass[j]);
        }
    }
    if ( $( "#navbar" ).length ) {
        var scrollTop     = document.body.scrollTop;
        var navbar = document.getElementById("navbar");
        var elementOffsetTop = navbar.getBoundingClientRect().top;
        var distance      = (elementOffsetTop - scrollTop);

        $('body').scroll(function(){
          if (document.body.scrollTop >= distance) {
            $('#navbar').addClass('sticky');
        } else{
            $('#navbar').removeClass('sticky');
        }
    });
    };
    $('blockquote:has(blockquote)').addClass('alt');
    $(".item.about .col-sm-6:has(img)").addClass('sgimg');
});
