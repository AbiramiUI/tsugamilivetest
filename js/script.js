$(document).ready(function(){
    
    // Floatinf Header script
    
    $(document).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $("nav").removeClass('floating-nav');
        } else {
            $("nav").addClass('floating-nav');
        }
    });
    
    // Menu script
    
    $(".menuIcon").click(function(){
        $(".menuList").slideToggle(500);
    })
    
    $(".menuclose").click(function(){
        $(".menuList").slideUp(500);
    });
    
    // Timeline script
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        nav: true,
        items: 4,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        loop: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        navText: ["<img src='images/left-arrow.png' alt=''>", "<img src='images/right-arrow.png' alt=''>"],
        responsive: {
          0: {
            items: 2,
              slideBy: 1
          },
          600: {
            items: 3,
              slideBy: 1
          },
          1000: {
            items: 4,
              slideBy: 1
          }
        }
    });
    $('.owl-carousel').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target)
            .find('.owl-item').removeClass('activeItem')
            .eq(event.item.index).addClass('activeItem');
    });
    setTimeout(function(){
        $(".sliderItem").removeClass('activeItem');
    },5000);
    
    setInterval(function(){ 
        var sliderId = $(".activeItem .sliderItem").attr("id");
        $(".item").hide();
        $("."+sliderId).show();
    }, 5000);
    
    // Lightbox script
    
    $('.factoryFlx img').click(function(){
        var dataVal = $(this).attr('data-rel');
        var imgSrc = "images/"+dataVal+".jpg";
        var imgId = "#"+dataVal;
        let myImg = document.querySelector(imgId);
        var imgwidth = myImg.naturalWidth;
        $('.lightboxImg').attr("src",imgSrc);
        $('.lightboxImg').attr("data-rel",dataVal);
        $(".lightbox_popup").show();
        if($(window).width() >= 1200){
            $('.lightbox').css('width',imgwidth);
        }else{
            $('.lightbox').css('width',"80%");
        }
    })
    $('.popPrev').click(function(){
        var imgVal = $('.lightboxImg').attr('data-rel').slice(-1);
        var navVal = "prev";
        popupPrev(imgVal,navVal);
    })
    $('.popNext').click(function(){
        var imgVal = $('.lightboxImg').attr('data-rel').slice(-1);
        var navVal = "next";
        popupPrev(imgVal,navVal);
    })
    $(".close").click(function(){
        $(".lightbox_popup").hide();
    });
    
    // Form Validation script
    
    $("#contactForm").on("submit",function(){
        var name = $("#name").val();
        var phoneNo = $("#phoneNo").val();
        var email = $("#email").val();
        var product = $("#product").val();
        var nameRegex = new RegExp("^[a-zA-Z ]+$");
        var phoneRegex = new RegExp("^[0-9]+$");
        
        if(name == ""){
            alert("Please enter your name");
            $("#name").focus();
            return false;
        }else if(!nameRegex.test(name)){
            alert("Name must be alphabet");
            $("#name").focus();
            return false;
        }else if(phoneNo == ""){
            alert("Please enter your phone number");
            $("#phoneNo").focus();
            return false;
        }else if(!phoneRegex.test(phoneNo)){
            alert("phone number must be numeric value");
            $("#phoneNo").focus();
            return false;
        }else if(email == ""){
            alert("Please enter your email id");
            $("#email").focus();
            return false;
        }else if(product == ""){
            alert("Please select any product");
            $("#product").focus();
            return false;
        }else{
            return;
        }
        
    })
})
function popupPrev(imgVal,navVal){
    if(navVal == "prev"){
        var imgValue = parseInt(imgVal) - 1;
        if(imgValue >= 1){
            var dataVal = "factory-"+imgValue;
            var imgSrc = "images/"+dataVal+".jpg";
            $('.lightboxImg').attr("src",imgSrc);
            $('.lightboxImg').attr("data-rel",dataVal);
            var imgId = "#"+dataVal;
            let myImg = document.querySelector(imgId);
            var imgwidth = myImg.naturalWidth;
            if($(window).width() >= 1200){
                $('.lightbox').css('width',imgwidth);
            }else{
                $('.lightbox').css('width',"80%");
            }
        }
    }
    if(navVal == "next"){
        var imgValue = parseInt(imgVal) + 1;
        if(imgValue <= 5){
            var dataVal = "factory-"+imgValue;
            var imgSrc = "images/"+dataVal+".jpg";
            $('.lightboxImg').attr("src",imgSrc);
            $('.lightboxImg').attr("data-rel",dataVal);
            var imgId = "#"+dataVal;
            let myImg = document.querySelector(imgId);
            var imgwidth = myImg.naturalWidth;
            if($(window).width() >= 1200){
                $('.lightbox').css('width',imgwidth);
            }else{
                $('.lightbox').css('width',"80%");
            }
        }
    }
}