/* ------------------------------ Menu  ----------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.dropdown-menu').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    })
    if (window.innerWidth < 992) {
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function() {
                this.querySelectorAll('.submenu').forEach(function(everysubmenu) {
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
            element.addEventListener('click', function(e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    e.preventDefault();
                    console.log(nextEl);
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }
                }
            });
        })
    }
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".sidebar-menu").addClass("sticky");
    } else {
        $(".sidebar-menu").removeClass("sticky");
    }
});
/* ------------------------------ Menu  ----------------------------- */
/* ------------------------------ Sidebar - index - video section  ----------------------------- */
$(document).ready(function() {
    $(".c-video-btn").on("click", function() {
        $(".lightbox").fadeIn(1000);
        $(this).hide();
        var videoURL = $('.video').prop('src');
        videoURL += "?autoplay=1";
        $('.video').prop('src', videoURL);
    });
    $(".close-btn").on("click", function() {
        $(".lightbox").fadeOut(500);
        $(".c-video-btn").show(250);
    });
});
/* ------------------------------ Sidebar - index - video section  ----------------------------- */