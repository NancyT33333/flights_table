$(".user-query").on("keyup", function() {
  var inputValue = $('.user-query').val().toLowerCase();
  $("#flights-info tr").not('.table-head').filter(function() {
    $(this).toggle($(this).children('.flight-n').text().toLowerCase().indexOf(inputValue) > -1)
  });
});

$("label[for*='displ-delayed']").on("click", function() {
  
  $("#flights-info tr").not('.table-head').filter(function() {
    $(this).toggle($(this).children('td:last-of-type').text().toLowerCase().indexOf('delayed') > -1)
  });
});


$("label[for*='displ-all']").on('click', function () {
	$("#flights-info tr:hidden").toggle();
});

$("label[for*='displ-arrivals']").on('click', function() {
  $("#flights-info tr").not('.table-head').filter(function() {
    $(this).toggle($(this).find('.e-text-hidden').text().indexOf('arrival') > -1)
  });
});


$("label[for*='displ-departures']").on('click', 
function() {
  $("#flights-info tr").not('.table-head').filter(function() {
    $(this).toggle($(this).find('.e-text-hidden').text().toLowerCase().indexOf('departure') > -1)
  });
});
