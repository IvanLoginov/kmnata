$(document).ready(function(){

  function room_settings(){
    var element = '<table class="full_width"';
    element += '<tr><td colspan="2">';
    element += '<div id="new_room">';
    element += '<img src="../img/L3NT.png"/></div>';
    element += '</td></tr>';
    element += '<tr><td colspan="2">';
    element += '<div id="new_room_name"><input style="height: 35px;" type="text" placeholder="New gangsta room 2000"></div>';
    element += '</td></tr>';
    element += '<tr><td colspan="2">';
    element += '<div class="writing">CREATE</div>';
    element += '</td></tr>';
    element += '<tr><td style="width:50%">';
    element += '<div id="create_public_room" class="create_button">Public <i class="bullhorn icon"></i></div>';
    element += '</td><td style="width:50%">';
    element += '<div id="create_private_room" class="create_button">Private <i class="lock icon"></i></div>';
    element += '<tr><td></table>';

    return element;
  }

  $(document).on('click', '#create', function(e){
    var cls = $(this).attr('class').replace('chosen','');
    if ($('#dropdown').attr('class').indexOf('hidden')>-1){
      $(this).attr('class',cls + ' chosen');
      $('#dropdown').attr('class', '')
                    .html(room_settings());
    } else {
      $(this).attr('class',cls);
      $('#dropdown').attr('class', 'hidden')
                    .html('');
    }
  });

})
