var typed = new Typed(".typed", {
    strings: ["Frontend Developer","Sagar Sharma", "", "ReactJS Developer",],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });


  
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-filters li').on( 'click', function() {
    $("#portfolio-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
