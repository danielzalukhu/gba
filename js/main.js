var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

$(document).ready(function () {
  /* Navbar Shrink */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  /* End Navbar Shrink */

  /* Video PopUp Section */
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });
  /* End Video PopUp Section */

  /* Obligation Section - Carousel Script */
  $(".obligations-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    margin: 5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* End Obligation Section - Carousel Script */

  /* Gallery Photos Section- Carousel Script */
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  /* End Gallery Photos Section - Carousel Script */

  /* Profil Pengerja-1 */
  $(".profile-pengerja-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* End Profil Pengerja-1 */

  /* Structure Organization */
  $(".structure-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  /* End Structure Organization */

  /* Pages Scrolling */
  $.scrollIt({
    topOffSet: -60,
  });
  /* End Pages Scrolling */

  /* Navbar Collapse */
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  /* End Navbar Collapse */
});
