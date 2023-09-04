$(document).ready(function() {
  const $carousel = $('.carousel');
  const $slides = $('.slide');
  const $prevButton = $('.prev-button');
  const $nextButton = $('.next-button');
  let currentIndex = 0;

  function updateCarousel() {
    $carousel.css('transform', `translateX(-${currentIndex * 100}%)`);
  }

  $prevButton.on('click', function() {
    currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
    updateCarousel();
  });

  $nextButton.on('click', function() {
    currentIndex = (currentIndex + 1) % $slides.length;
    updateCarousel();
  });

  updateCarousel();

  $('#city-dropdown').on('change', function() {
    showData();
  });

  function showData() {
    const selectedCity = $('#city-dropdown').val();
    const $addresses = $('#addresses');
    $addresses.empty();

    if (selectedCity === 'Киев') {
      addAddress('улица Владимирская, 51/53, +380 95 233 82 88');
      addAddress('улица Рыболовная, 14/16, +380 66 402 58 68');
      addAddress('Новопечерский переулок, 5, +380 50 303 16 32');
      addAddress('улица Здолбуновская, 4,+380 50 361 41 10');
      displayMap('./img/maps/kiev-map.jpg');
    } else if (selectedCity === 'Львов') {
      addAddress('Львов адрес 1');
      addAddress('Львов адрес 2');
      displayMap('./img/maps/lviv-map.jpg');
    } else if (selectedCity === 'Харьков') {
      addAddress('Адрес в Харьков 1');
      addAddress('Адрес в Харьков 2');
      displayMap('./img/maps/kharkiv-map.jpg');
    }
  }

  function addAddress(address) {
    const $addresses = $('#addresses');
    const li = $('<li>').text(address);
    $addresses.append(li);
  }

  function displayMap(mapImage) {
    $('#map-image').attr('src', mapImage);
  }
  showData();
  function detect_active() {
    var get_active = $("#dp-slider .dp_item:first-child").data("class");
    $("#dp-dots li").removeClass("active");
    $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    $("#dp-slider .dp_item").removeClass("blurred");
    $("#dp-slider .dp_item[data-position!='1']").addClass("blurred");
  }
  $("#dp-next").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });
    detect_active();
  });

  $("#dp-prev").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });

    detect_active();
  });

  $("#dp-dots li").click(function () {
    $("#dp-dots li").removeClass("active");
    $(this).addClass("active");
    var get_slide = $(this).attr("data-class");
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]")
      .hide()
      .prependTo("#dp-slider")
      .fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });
  });

  $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
    var get_slide = $(this).attr("data-class");
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]")
      .hide()
      .prependTo("#dp-slider")
      .fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });

    detect_active();
  });
  const $hamburger = $(".hamburger");
    const $navMenu = $(".nav-menu");
    const $navLink = $(".nav-link");

    $hamburger.click(function() {
        $hamburger.toggleClass("active");
        $navMenu.toggleClass("active");
    });

    $navLink.click(function() {
        $hamburger.removeClass("active");
        $navMenu.removeClass("active");
    });
});
