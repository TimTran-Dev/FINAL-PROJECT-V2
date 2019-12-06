(function() {
  "use strict";

  var mobileMenuOutsideClick = function() {
    $(document).click(function(e) {
      var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".js-gtco-nav-toggle").addClass("gtco-nav-white");

        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-gtco-nav-toggle").removeClass("active");
        }
      }
    });
  };

  // <% if (userInfo.local.email) { %>
  //           <form action="/userReview" method="POST">
  //             <textarea name="userReview" rows="5" cols="50"></textarea>
  //             <button type="submit">Post</button>
  //           </form>
  //         </div>
  //         <% } %>
  // <ul class="messages">
  // <% for(var i=0; i<userInfo.length; i++) {%>
  // <li class="message">
  //   <span><%= userInfo[i].userReview %></span>
  //   <span><i class="fa fa-trash" aria-hidden="true"></i></span>
  // </li>
  // <% } %>
  // </ul>

  var formTab = function() {
    $(".tab-menu a").on("click", function(event) {
      var $this = $(this),
        data = $this.data("tab");

      $(".tab-menu li").removeClass("active");
      $this.closest("li").addClass("active");

      $(".tab .tab-content-inner").removeClass("active");
      $this
        .closest(".tab")
        .find('.tab-content-inner[data-content="' + data + '"]')
        .addClass("active");

      event.preventDefault();
    });
  };

  var offcanvasMenu = function() {
    $("#page").prepend('<div id="gtco-offcanvas" />');
    $("#page").prepend(
      '<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>'
    );
    var clone1 = $(".menu-1 > ul").clone();
    $("#gtco-offcanvas").append(clone1);
    var clone2 = $(".menu-2 > ul").clone();
    $("#gtco-offcanvas").append(clone2);

    $("#gtco-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
    $("#gtco-offcanvas")
      .find("li")
      .removeClass("has-dropdown");

    // Hover dropdown menu on mobile
    $(".offcanvas-has-dropdown")
      .mouseenter(function() {
        var $this = $(this);

        $this
          .addClass("active")
          .find("ul")
          .slideDown(500, "easeOutExpo");
      })
      .mouseleave(function() {
        var $this = $(this);
        $this
          .removeClass("active")
          .find("ul")
          .slideUp(500, "easeOutExpo");
      });

    $(window).resize(function() {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-gtco-nav-toggle").removeClass("active");
      }
    });
  };

  var burgerMenu = function() {
    $("body").on("click", ".js-gtco-nav-toggle", function(event) {
      var $this = $(this);

      if ($("body").hasClass("overflow offcanvas")) {
        $("body").removeClass("overflow offcanvas");
      } else {
        $("body").addClass("overflow offcanvas");
      }
      $this.toggleClass("active");
      event.preventDefault();
    });
  };

  var contentWayPoint = function() {
    var i = 0;

    // $('.gtco-section').waypoint( function( direction ) {

    $(".animate-box").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .animate-box.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
    // }, { offset: '90%'} );
  };

  var dropdown = function() {
    $(".has-dropdown")
      .mouseenter(function() {
        var $this = $(this);
        $this
          .find(".dropdown")
          .css("display", "block")
          .addClass("animated-fast fadeInUpMenu");
      })
      .mouseleave(function() {
        var $this = $(this);

        $this
          .find(".dropdown")
          .css("display", "none")
          .removeClass("animated-fast fadeInUpMenu");
      });
  };

  var owlCarousel = function() {
    var owl = $(".owl-carousel-carousel");
    owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
      navText: [
        "<i class='ti-arrow-left owl-direction'></i>",
        "<i class='ti-arrow-right owl-direction'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    var owl = $(".owl-carousel-fullwidth");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
      navText: [
        "<i class='ti-arrow-left owl-direction'></i>",
        "<i class='ti-arrow-right owl-direction'></i>"
      ]
    });
  };

  window.addEventListener("load", function() {
    document
      .querySelector('input[type="file"]')
      .addEventListener("change", function() {
        if (this.files && this.files[0]) {
          var img = document.querySelector("img"); // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
        }
      });
  });

  function imageIsLoaded() {
    alert(this.src); // blob url
    // update width and height ...
  }

  var goToTop = function() {
    $(".js-gotop").on("click", function(event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function() {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  // Loading page
  var loaderPage = function() {
    $(".gtco-loader").fadeOut("slow");
  };

  var counter = function() {
    $(".js-counter").countTo({
      formatter: function(value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  var counterWayPoint = function() {
    if ($("#gtco-counter").length > 0) {
      $("#gtco-counter").waypoint(
        function(direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  var dateForm = function() {
    $("#date-start").datepicker();
  };

  var parallax = function() {
    $(window).stellar({
      horizontalScrolling: false,
      hideDistantElements: false,
      responsive: true
    });
  };

  $(function() {
    mobileMenuOutsideClick();
    formTab();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    owlCarousel();
    goToTop();
    loaderPage();
    counterWayPoint();
    dateForm();
    parallax();
  });
})();
// Additional edits for event listeners

const redirectForm = document.querySelector("#leonRocks");
redirectForm.addEventListener("submit", e => {
  e.preventDefault();
  let school = document.querySelector("#fullname").value;
  window.location = "schools/" + school;
});

// const name = this.parentNode.childNodes[1].innerText;
// const school = this.parentNode.childNodes[3].innerText;
// let _id = this.parentNode.childNodes[5].innerText;
//   fetch("userRating", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: name,
//       school: school,
//       _id: _id
//     })
//   }).then(function(response) {
//     console.log(response);
//     window.location.reload();
//   });
// });
