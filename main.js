// CLOCK

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);

  let ampm = '';
  if (h < 12) {
    ampm = ' am';
  } else if (h > 12) {
    h = h - 12;
    ampm = ' pm';
  }

  document.getElementById('time').innerHTML = h + ':' + m + ampm;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();

// PERSISTANT CHECKBOXES

let checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
  $checkboxes = $('#checkbox-container :checkbox');

$checkboxes.on('change', function () {
  $checkboxes.each(function () {
    checkboxValues[this.id] = this.checked;
  });

  localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
});

// On page load
$.each(checkboxValues, function (key, value) {
  $('#' + key).prop('checked', value);
});

// CLEAN CHECKBOXES

$('#btn').click(function () {
  $("input[type='checkbox']").attr('checked', false);
});
