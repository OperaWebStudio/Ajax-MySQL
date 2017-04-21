$(document).ready(function() {

  $('#myForm').bootstrapValidator({
    fields: {
      name: {
        validators: {
          stringLength: {
            min: 2,
            message: 'Пожалуйста, введите Ваше имя'
          },
          notEmpty: {
            message: 'Пожалуйста, введите Ваше имя'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Пожалуйста, введите email'
          },
          emailAddress: {
            message: 'Неверный email!'
          }
        }
      },
      message: {
        validators: {
          stringLength: {
            min: 10,
            max: 200,
            message:'Пожалуйста, введите от 10 до 200 символов'
          },
          notEmpty: {
            message: 'Введите сообщение!'
          }
        }
      }
    }
  });

  updates();

});


// insert functions

$("#send").click(function() {
  $.post($("#myForm").attr("action"), $("#myForm :input").serializeArray(), function(info){$("#result").html(info);});
  clearInput();
  done();
  updates();
});

$("#myForm").submit(function() {
  return false;
});

function clearInput() {
  $("#myForm :input").each(function() {
    $(this).val('');
  });
}

// fetching functions
function done() {
  setTimeout( function() {
    $('#success_message').fadeOut();
  }, 1000);
}

function updates() {
  $.getJSON("fetching.php", function(data) {
    $("#cards").empty();
    $.each(data.result, function(){
      $("#cards").prepend("<div class=\"col-sm-6 col-md-4\"><div class=\"card\"><p> "+this['name']+"</p><p> "+this['email']+"</p><p> "+this['message']+"</p></div></div>");
    });
  });
}
