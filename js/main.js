var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

$(document).ready(function () {
  /* Pre-loader */
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
  /* End Pre-loader */

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

  /* Toogle Theme */
  function toggleTheme() {
    if (localStorage.getItem("gba-theme") != null) {
      if (localStorage.getItem("gba-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }

  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("gba-theme", "dark");
    } else {
      localStorage.setItem("gba-theme", "light");
    }
    updateIcon();
  });

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }
  /* End Toogle Theme */
});
