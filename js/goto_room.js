$(document).ready(function(){

  function get_random_color(){
    return Math.round(Math.random()*255,0);
  }

  function get_random_rgba(saturation){
    saturation = (saturation || 0.8);
    return 'rgba('+get_random_color()+','+get_random_color()+','+get_random_color()+', '+saturation+')';
  }

  function create_chat(){
    messages = JSON.parse(sessionStorage.messages);
    var element = '<div id="chat"><table class="full_width">';
    var color;
    var i=0;
    while (i<messages.length){
      color = 'color:'+get_random_rgba();
      element += '<tr><td class="user_icon" style="'+color+'">';
      element += '<i class="bug icon"></i>';
      element += '</td>';
      element += '<td>';
      element += '<table>';
      element += '<tr><td class="user_name">';
      element += messages[i].user;
      element += '</td></tr>';
      element += '<tr><td class="user_message">';
      element += messages[i].message;
      element += '</td></tr></table>';
      element += '</td>';
      element += '</tr>';
      i++;
    }
    element += '</table></div>';

    return element;
  }

  function goto_topic(where_is_chat, video){
    $('.sides').attr('class','sides room');
    $('#user_icon').html(get_user_icon());
    $('#center_content').html(video);
    var element;
    element = create_chat();
    element += '<div id="message_control">'
    element += '<div id="upload_media" class="control_button">';
    element += '<i class="paperclip icon"></i></div>';
    element += '<textarea class="input_field" placeholder="Message">';
    element += '</textarea>';
    element += '</div>';
    $(where_is_chat).html(element);
  }

  function goto_room(where_is_chat, video, room_name, topics, chat){
    $('#right_content').html('');
    $('.sides').attr('class','sides room');
    $('#user_icon').html(get_user_icon());
    $('#room').html(room_name);
    $('#left_content').html(topics);
    $('#center_content').html(video);
    var element;
    element = chat;
    element += '<div id="message_control">'
    element += '<div id="upload_media" class="control_button">';
    element += '<i class="paperclip icon"></i></div>';
    element += '<textarea class="input_field" placeholder="Message">';
    element += '</textarea>';
    element += '</div>';
    $(where_is_chat).html(element);
  }

  function get_topics(group, topics){
    var element = '<div class="topic_group">'+group.toUpperCase()+'</div>';
    var i=0;
    while (i<topics.length){
      if (topics[i].group==group){
        element += '<div class="topic '+topics[i].class +'" group="'+topics[i].group+'">'
        element += '<table class="topic_table full_width">';
        element += '<td class="topic_td" style="vertical-align:middle">';
        element += '<div class="topic_name">';
        element += '<span class="slash">:</span>'+topics[i].name+'</div>';
        element += '</td>';
        element += '<td class="topic_td" style="vertical-align:middle">';
        if (i<4){
          element += '<div class="n_new_messages">'
          element += Math.floor(Math.random()*10,0);
          element += '</div>';
        }
        element += '</td>';
        element += '</table>';
        element +='</div>';
      }
      i++;
    }

    return element;
  }

  function create_topics(video){
    var topics = [
                    {
                      'name':'live'
                      ,'group': 'video'
                      ,'class': 'chosen'
                    },
                    {
                      'name':'general'
                      ,'group': 'scribo'
                      ,'class': ''
                    },
                    {
                      'name':'room 303'
                      ,'group': 'scribo'
                      ,'class': ''
                    },
                    {
                      'name':'FAQ'
                      ,'group': 'scribo'
                      ,'class': ''
                    },
                    {
                      'name':'shop'
                      ,'group': 'scribo'
                      ,'class': ''
                    }
                  ]
    var i=0;
    var element = (video ? get_topics('video', topics) : '');
    element += get_topics('scribo', topics);

    return element;
  }

  function get_user_icon(){
    var color = 'color:'+get_random_rgba();
    var element = '<div style="'+color+'"><i class="bug icon"></i></div>';

    return element;
  }

  $(document).on('click', '.tile', function(e){
    var data = $(this).find('.tile_window').html();
    $('#room').attr('video', data);
    $('#left_content').html(create_topics(data.indexOf('iframe')>-1));
    var chat = '#center_content';
    var video = '';
    if (data.indexOf('iframe')>-1){
      $('#center_content').toggleClass('room');
      video = data;
      chat = '#right_content';
    }
    goto_room(chat, video, $(this).find('.room_name').html(), create_topics(video.length>0), create_chat());
  })

  $(document).on('click', '.topic', function(e){
    $('.topic').attr('class', 'topic');
    $(this).toggleClass('chosen');
    var chat = '#center_content';
    var video = '';
    if ($(this).attr('group').indexOf('video')>-1){
      chat = '#right_content';
      video = $('#room').attr('video');
    } else {
      $('#right_content').html('');
    }
    goto_topic(chat, video);
  })

  $(document).on('click', '.create_button', function(e){
    var room_name = $('#new_room_name').find('input').val();
    if (room_name.length<1){
      room_name = $('#new_room_name').find('input').attr('placeholder');
    }
    var topic = [
                    {
                      'name':'general'
                      ,'group': 'scribo'
                      ,'class': 'chosen'
                    }
                ]
    var chat = '<div id="chat"><table class="full_width"></table></div>';
    goto_room('#center_content', '', room_name, get_topics('scribo', topic), chat);
    $('#create').click();
  })

})
