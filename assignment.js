var fb = function(number) {
  if(number % 15 === 0) {
    return "FizzBuzz";
  } else if(number % 3 === 0) {
    return "Fizz";
  } else if(number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};
$(document).ready(function() {
    for(var i = 1; i <= 100; i++) {
        var $li = $('<li></li>').text(fb(i));
        $('#list').append($li);
    }
});
