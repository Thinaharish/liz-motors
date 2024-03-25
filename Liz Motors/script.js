// --------------------------------------NAV-LEFT-RIGHT-FUNCTION-----------------------------------
        var navLinks = document.getElementById("navLinks");
        function showMenu() {
            navLinks.style.right = "0";
        }
        function hideMenu() {
            navLinks.style.right = "-300px";
        }

// ----------------------------------------NAV-SCROLL-LOCK-----------------------------------------------
          const CloseButton = document.getElementsByClassName('close');
          const toggleNavbarButton = document.getElementsByClassName('toggleNavbar');
          const nav = document.getElementById('navbar');
          const body = document.body;


          function toggleScrollLock() {
              body.classList.toggle('lock-scroll');
              signup[0].classList.add('signup-scroll');
          }

        toggleNavbarButton[0].addEventListener('click', function() {
          toggleScrollLock();
        });

        CloseButton[0].addEventListener('click', function() {
          toggleScrollLock();
        });

// -------------------------------------------IMAGE-SCROLL-ANIMATION----------------------------------------

        function checkScroll() {
          var elements = document.querySelectorAll('.animation-div, .animation-effect');
          
          for (var i = 0; i < elements.length; i++) {
              var element = elements[i];
              var bounding = element.getBoundingClientRect();
              
              if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                  element.classList.add('animate');
              }
          }
      }
      
      window.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      window.addEventListener('load', checkScroll);
      
// -------------------------------AOS---------------------------------------------------
      AOS.init();