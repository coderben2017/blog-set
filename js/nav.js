function goToCover() {
  $('#title').text("随想集");
  $('#content').text("Poetry is a deal of joy and pain and wonder, with a dash of the dictionary..");
  $('#tip').hide();
}

function showPoetry(id) {
  $.get('json/poetries.json', (res) => {
    const {title, contents, tips} = res['data'][id - 1];

    let content = '';
    contents.forEach(element => {
      content += `<p>${element}</p>`;
    });

    let tip = "";
    if (tips.length === 1) {
      tip = tips[0]
    } else {
      tip = `${tips[0]}<br>${tips[1]}`;
    }

    $('#title').text(title);
    $('#content').html(content);
    $('#tip').html(tip).show();
  });
  
  setTimeout(function() {
    $('#dropdown').addClass('open');    
  }, 0);
}

$(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

  trigger.click(function () {
    if (isClosed == true) {          
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }     
  });
  
  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  goToCover();
});
