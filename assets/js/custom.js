/* ------------------------------ back to top  ----------------------------- */
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

        $("#toTop").addClass("show-back");
        $("html, body").animate({
            scrollTop: 0
        }, 100);

    } else {

        $("#toTop").removeClass("show-back");

    }
});
/* ------------------------------ back to top  ----------------------------- */

/* ------------------------------ Template color  ----------------------------- */




// var current_color = "default";
$('link[rel*=skin]').remove();
var color_link = localStorage.getItem("color_link");
if(color_link != null)
{
    $('link[rel*=skin]').remove();
    $('head').append(color_link);
}
else
{
    $('link[rel*=skin]').remove();
    localStorage.removeItem("color_link");
}

//Default
$("#reset-color").click(function(e) {
    e.preventDefault();
    $('link[rel*=skin]').remove();
    localStorage.removeItem("color_link");
    // current_color = "default";
});

//Teal	
$("#teal").click(function(e) {
    e.preventDefault();
    color_link = '<link rel="stylesheet skin" href="../assets/css/teal-styles.css" type="text/css" />';
    localStorage.setItem("color_link", color_link);
    $('link[rel*=skin]').remove();
    $('head').append(color_link);
    // current_color = "teal";
});

//Blue
$("#blue").click(function(e) {
    e.preventDefault();
    color_link = '<link rel="stylesheet skin" href="../assets/css/blue-style.css" type="text/css" />';
    localStorage.setItem("color_link", color_link);
    $('link[rel*=skin]').remove();
    $('head').append(color_link);
    // current_color = "blue";
});

//Brown
$("#brown").click(function(e) {
    e.preventDefault();
    color_link = '<link rel="stylesheet skin" href="../assets/css/brown-style.css" type="text/css" />';
    localStorage.setItem("color_link", color_link);
    $('link[rel*=skin]').remove();
    $('head').append(color_link);
    // current_color = "brown";
});

//Purple
$("#purple").click(function(e) {
    e.preventDefault();
    color_link = '<link rel="stylesheet skin" href="../assets/css/purple-style.css" type="text/css" />';
    localStorage.setItem("color_link", color_link);
    $('link[rel*=skin]').remove();
    $('head').append(color_link);
    // current_color = "purple";
});

//Peach
$("#peach").click(function(e) {
    e.preventDefault();
    color_link = '<link rel="stylesheet skin" href="../assets/css/peach-style.css" type="text/css" />';
    localStorage.setItem("color_link", color_link);
    $('link[rel*=skin]').remove();
    $('head').append(color_link);
    // current_color = "peach";
});

/* ------------------------------ Template color  ----------------------------- */

/* ------------------------------ Color Switcher ----------------------------- */

$("#setting-button").click(function(e) {
    e.preventDefault();
    if ($("#setting-button i").hasClass("fa-gear")) {
        $("#options-setting").addClass("move-right");
        $("#setting-button i").removeClass("fa-gear");
        $("#setting-button i").addClass("fa-times");
    } else {
        $("#options-setting").removeClass("move-right");
        $("#setting-button i").removeClass("fa-times");
        $("#setting-button i").addClass("fa-gear");
    }
});

/* ------------------------------ Color Switcher ----------------------------- */

/* ------------------------------ Back to top svg change for theme ----------------------------- */

$(function() {
  
    if(color_link != null)
    {   
        var bottom_top = localStorage.getItem("bottom-top");
        var logo_dark = localStorage.getItem("logo-dark");
        var logo_light = localStorage.getItem("logo-light");
        var loader = localStorage.getItem("loader");
        var mobile_logo = localStorage.getItem("mobile-logo");
        $("#bottom-top").attr('src', bottom_top);
        $(".logo-dark").attr('src', logo_dark);
        $(".logo-light").attr('src', logo_light);
        $("#load img").attr('src', loader);
        $(".mobile-logo").attr('src', mobile_logo);
    }

    $('#teal').click(function(e) {
        e.preventDefault();
        localStorage.setItem("bottom-top", "../assets/images/teal-icons/bottom-top.svg");
        localStorage.setItem("logo-dark", "../assets/images/teal-icons/logo-dark.png");
        localStorage.setItem("logo-light", "../assets/images/teal-icons/logo.png");
        localStorage.setItem("loader", "../assets/images/teal-icons/loader.svg");
        localStorage.setItem("mobile-logo", "../assets/images/teal-icons/logo-dark.png");
        $("#bottom-top").attr('src', "../assets/images/teal-icons/bottom-top.svg");
        $(".logo-dark").attr('src', "../assets/images/teal-icons/logo-dark.png");
        $(".logo-light").attr('src', "../assets/images/teal-icons/logo.png");
        $("#load img").attr('src', "../assets/images/teal-icons/loader.svg");
        $(".mobile-logo").attr('src', "../assets/images/teal-icons/logo-dark.png");
    });
    $('#blue').click(function(e) {
        e.preventDefault();
        localStorage.setItem("bottom-top", "../assets/images/blue-icons/bottom-top.svg");
        localStorage.setItem("logo-dark", "../assets/images/blue-icons/logo-dark.png");
        localStorage.setItem("logo-light", "../assets/images/blue-icons/logo.png");
        localStorage.setItem("loader", "../assets/images/blue-icons/loader.svg");
        localStorage.setItem("mobile-logo", "../assets/images/blue-icons/logo-dark.png");
        $("#bottom-top").attr('src', "../assets/images/blue-icons/bottom-top.svg");
        $(".logo-dark").attr('src', "../assets/images/blue-icons/logo-dark.png");
        $(".logo-light").attr('src', "../assets/images/blue-icons/logo.png");
        $("#load img").attr('src', "../assets/images/blue-icons/loader.svg");
        $(".mobile-logo").attr('src', "../assets/images/blue-icons/logo-dark.png");
    });
    $('#brown').click(function(e) {
        e.preventDefault();
        localStorage.setItem("bottom-top", "../assets/images/brown-icons/bottom-top.svg");
        localStorage.setItem("logo-dark", "../assets/images/brown-icons/logo-dark.png");
        localStorage.setItem("logo-light", "../assets/images/brown-icons/logo.png");
        localStorage.setItem("loader", "../assets/images/brown-icons/loader.svg");
        localStorage.setItem("mobile-logo", "../assets/images/brown-icons/logo-dark.png");
        $("#bottom-top").attr('src', "../assets/images/brown-icons/bottom-top.svg");
        $(".logo-dark").attr('src', "../assets/images/brown-icons/logo-dark.png");
        $(".logo-light").attr('src', "../assets/images/brown-icons/logo.png");
        $("#load img").attr('src', "../assets/images/brown-icons/loader.svg");
        $(".mobile-logo").attr('src', "../assets/images/brown-icons/logo-dark.png");
    });
    $('#purple').click(function(e) {
        e.preventDefault();
        localStorage.setItem("bottom-top", "../assets/images/purple-icons/bottom-top.svg");
        localStorage.setItem("logo-dark", "../assets/images/purple-icons/logo-dark.png");
        localStorage.setItem("logo-light", "../assets/images/purple-icons/logo.png");
        localStorage.setItem("loader", "../assets/images/purple-icons/loader.svg");
        localStorage.setItem("mobile-logo", "../assets/images/purple-icons/logo-dark.png");
        $("#bottom-top").attr('src', "../assets/images/purple-icons/bottom-top.svg");
        $(".logo-dark").attr('src', "../assets/images/purple-icons/logo-dark.png");
        $(".logo-light").attr('src', "../assets/images/purple-icons/logo.png");
        $("#load img").attr('src', "../assets/images/purple-icons/loader.svg");
        $(".mobile-logo").attr('src', "../assets/images/purple-icons/logo-dark.png");
    });
    $('#peach').click(function(e) {
        e.preventDefault();
        localStorage.setItem("bottom-top", "../assets/images/peach-icons/bottom-top.svg");
        localStorage.setItem("logo-dark", "../assets/images/peach-icons/logo-dark.png");
        localStorage.setItem("logo-light", "../assets/images/peach-icons/logo.png");
        localStorage.setItem("loader", "../assets/images/peach-icons/loader.svg");
        localStorage.setItem("mobile-logo", "../assets/images/peach-icons/logo-dark.png");
        $("#bottom-top").attr('src', "../assets/images/peach-icons/bottom-top.svg");
        $(".logo-dark").attr('src', "../assets/images/peach-icons/logo-dark.png");
        $(".logo-light").attr('src', "../assets/images/peach-icons/logo.png");
        $("#load img").attr('src', "../assets/images/peach-icons/loader.svg");
        $(".mobile-logo").attr('src', "../assets/images/peach-icons/logo-dark.png");
    });
    $('#reset-color').click(function(e) {
        e.preventDefault();
        localStorage.setItem("bottom-top", "../assets/images/icons/bottom-top.svg");
        localStorage.setItem("logo-dark", "../assets/images/logo-dark.png");
        localStorage.setItem("logo-light", "../assets/images/logo.png");
        localStorage.setItem("loader", "../assets/images/loader.svg");
        localStorage.setItem("mobile-logo", "../assets/images/logo-dark.png");
        $("#bottom-top").attr('src', "../assets/images/icons/bottom-top.svg");
        $(".logo-dark").attr('src', "../assets/images/logo-dark.png");
        $(".logo-light").attr('src', "../assets/images/logo.png");
        $("#load img").attr('src', "../assets/images/loader.svg");
        $(".mobile-logo").attr('src', "../assets/images/logo-dark.png");
    });

});

/* ------------------------------ Back to top svg change for theme ----------------------------- */

/* ------------------------------ page loader  ----------------------------- */
document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}

// mobile sticky header - main page

window.onscroll = function() {
    scrollFunction()
};



function scrollFunction() {
    if ($('#sticky-mobile').length) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

            document.getElementById("sticky-mobile").style.display = "block";

        } else {

            document.getElementById("sticky-mobile").style.display = "none";

        }
    }
}


/* ------------------------------ add bg when scroll down ----------------------------- */
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $(".desktop-menu").addClass("header-bg");
    } else {
        $(".desktop-menu").removeClass("header-bg");
    }
});
if (window.scrollY) {
    window.scroll(0, 0);
}
/* ------------------------------ add bg when scroll down ----------------------------- */

/* ----------------------------- top bottom bar ----------------------------- */
jQuery("body").on("click", ".mobile-menu-btn", function() {
        jQuery(".mobile-menu").toggleClass("menu-open");
    })
    /* ----------------------------- top bottom bar ----------------------------- */

/* ------------------------------ home page banner slider ----------------------------- */
$('.home-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    infinite: true,
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
}).slickAnimation();
/* ------------------------------ home page banner slider ----------------------------- */

/* ------------------------------ time counter ----------------------------- */
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

let countDownBox = document.querySelector(".allTime");
let daysBox = document.querySelector(".days");
let hrsBox = document.querySelector(".hrs");
let minBox = document.querySelector(".min");
let secBox = document.querySelector(".sec");
let countDownDate = new Date("Dec 02, 2023 10:00:00").getTime();

// COUNT DOWN FUNCTION

if (countDownBox && daysBox && hrsBox && minBox && secBox && countDownDate) {
    let x = setInterval(function() {

        // GET DATE
        let now = new Date().getTime();

        // TIME BETWEEN NOW AND DATE
        let distance = countDownDate - now;

        // CALCULATION TIME
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysBox.innerHTML = zeroPad(days, 2) + "<span>Days</span>";
        hrsBox.innerHTML = zeroPad(hours, 2) + "<span>Hours</span>";
        minBox.innerHTML = zeroPad(minutes, 2) + "<span>Minutes</span>";
        secBox.innerHTML = zeroPad(seconds, 2) + "<span>Seconds</span>";

        // IF FINISH
        if (distance < 0) {
            clearInterval(x);
            countDownBox.innerHTML = "¡FELICIDADES!";
        }
    }, 1000);
}


/* ------------------------------ time counter ----------------------------- */

/* ------------------------------ light box  ----------------------------- */
$(".search").click(function() {
    $("body").addClass("light-box-body");
});
$(".lb-close").click(function() {
    $("body").removeClass("light-box-body");
});
$("#lightboxOverlay").click(function() {
    $("body").removeClass("light-box-body");
});
$(".lightbox").click(function() {
    $("body").removeClass("light-box-body");
});
/* ------------------------------ light box  ----------------------------- */

/* ------------------------------ Bridesmaid slider ----------------------------- */
$('.bridemaids-slider-inside').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 30,
    autoplay: false,
    speed: 800,
    autoplaySpeed: 2000,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    infinite: true,
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
}).slickAnimation();
/* ------------------------------ Bridesmaid slider ----------------------------- */

/* ------------------------------ filter tabbing  ----------------------------- */

$(".filter-category .li-btn ").click(function(e) {
    $(".filter-category .li-btn").removeClass("active");
    $(this).addClass("active")
})

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filter");
if (btnContainer != null) {
    var btns = btnContainer.getElementsByClassName("li-btn")[0];
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            $('.li-btn').removeClass('active')
            this.className += " active";
        });
    }
}

// 08. MOBILE MENU
//==================================================================================
$("#mobile-nav").click(function(e) {
    e.preventDefault()
    $("#nav-menu").toggleClass("open");
});

// Hide Menu After Click It. Will be used on onepage version. 
$("#nav-menu li a").click(function() {
    if ($(this).attr("href") !== "#") {
        $("#nav-menu").removeClass("open");
    }
});


// home -3 header js

/* ------------------------------ side bar menu ----------------------------- */
$(".sidebar-menu .sidemenu-icon").click(function() {
    $("body").css('overflow', 'hidden');
});
$(".sidebar-menu .closebtn").click(function() {
    $("body").css('overflow', 'auto');
});
/* ------------------------------ side bar menu ----------------------------- */