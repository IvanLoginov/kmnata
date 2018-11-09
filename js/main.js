$(document).ready(function(){
  var messages = [{'user':'Anti-Dead Cat', 'message':'<img src="../img/smelly_pussy.png"></img>'}
                  ,{'user':'Happy', 'message':'that refers to u my dude'}
                  ,{'user':'Anti-Dead Cat', 'message':'<img src="../img/build_shelf.png"></img>'}
                  ,{'user':'Fix a Fix', 'message':'Why 3/4 of your memes are memes that existed 10 years ago and the other quarter are good memes? How do you even find this collection thats good only in a small part? Just a question im curious and a bit surprised to find so many 2008 memes'}
                  ,{'user':'Intellegion', 'message':'hmm nice memes'}
                  ,{'user':'mefsh', 'message':'Not really a meme, but still funny.<br><br><img src="../img/kfc_dog.jpg"></img>'}
                ]

  fill_object('#top_content', create_top_content());
  fill_object('#main_content', create_main_content());
  fill_object('#center_content', create_tiles());
  adjust_last_tile();
  function fill_object(which, filling){
    $(which).html(filling);
  }

  function create_hashtag_tabs(){
      var hashtags = [
                      {
                        'name':'education'
                      },
                      {
                        'name':'gaming'
                      },
                      {
                        'name':'chilling'
                      },
                      {
                        'name':'DIY'
                      },
                      {
                        'name':'howto'
                      }
                    ]
      var element = '';
      var i = 0;
      while (i<hashtags.length){
        element += '<div class="tag">';
        element += '<div class="tag_name" style="background-color:'+get_random_rgba().replace('0.8','0.3')+'">';
        element += '#'+hashtags[i].name+'</div>';
        element += '</div>';
        i++;
      }

      return element;
  }

  function create_top_content(){
    var element = '<table id="top_table" class="full_width">';
    element += '<td class="top_td">';
    element += '<div id="portal_logo"><img src="../img/logo.png"></div>';
    element += '<div id="tags">';
    element += create_hashtag_tabs();
    element += '</div>';
    element += '</td>';
    element += '<td class="top_td">';
    element += '<div class="ui inverted right icon input" style="margin-left:6px;">';
    element += '<input id="top_search" type="text" placeholder="Search...">';
    element += '<i class="search icon"></i>';
    element += '</div>';
    element += '<button id="create" class="ui inverted blue button">Create</button>';
    element += '</td>';
    element += '</table>';
    return element;
  }

  function create_main_content(){
    var element = '<table id="main_table" class="full_width">';
    element += '<td>';
    element += '<div id="center_content"></div>';
    element += '<div id="center_name" class="bottom_control"></div>';
    element += '<div id="center_bottom" class="bottom_control"></div>';
    element += '</td>';
    element += '<td style="width:1%">'
    element += '<div id="right_content"></div>';
    element += '<div id="right_bottom" class="bottom_control"></div>';
    element += '</td>';
    element += '</table>';

    return element;
  }

  function auto_height(el){
    var delta = $(el).outerHeight();
    el.style.height = '1px';
    el.style.height = (el.scrollHeight)+"px";
    delta = $(el).outerHeight() - delta;
    if (delta){
      delta = $('#right_content').css('height').replace('px','') - delta;
      $('#right_content').css('height', delta);
    }
  }

  function get_random_color(){
    return Math.round(Math.random()*255,0);
  }

  function get_random_rgba(){
    return 'rgba('+get_random_color()+','+get_random_color()+','+get_random_color()+', 0.8)';
  }

  function create_chat(){
    var element = '';
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

    return element;
  }

  function goto_room(create, room_name){
    create = (create || 0);
    room_name = (room_name || 'Wassssssuuup!!!');
    var element;
    element = '<table class="full_width">';
    if (!create){
      element += create_chat();
    }
    element += '</table>';
    $('#right_content').html(element).attr('class','chat');
    element = '<div id="upload_media" class="control_button">';
    element += '<i class="paperclip icon"></i></div>';
    element += '<textarea class="input_field" placeholder="Message">';
    element += '</textarea>';
    $('#right_bottom').html(element);
    fill_object('#center_bottom', create_topics());
    $('#desks').click();
    adjust_last_tile();
  }

  function adjust_last_tile(){
    var x = $('.tile');
    var i = x.length-1;
    $(x[i]).css('margin-right','0px');
    var top = $(x[i]).offset().top;
    var q_last_row = 0;
    var q_first_row = 0;
    i--;
    while ($(x[i]).offset().top==top && i>-1){
      q_last_row++;
      i--;
    }
    i = 0;
    top = $(x[i]).offset().top;
    i++;
    while ($(x[i]).offset().top==top && i<x.length){
      q_first_row++;
      i++;
    }
    var margin = (q_first_row - q_last_row)*$(x[0]).outerWidth(true)+10;
    $(x[x.length-1]).css('margin-right', margin);
  }

  function create_tiles(){
    var array = [
                  {
                    'type': 'video'
                  , 'src':'https://www.youtube.com/embed/5AEbq6X33A8'
                  , 'name':'24/7 lofi hip hop radio - beats to chill/study/relax'
                }
                , {
                    'type': 'video'
                  , 'src':'https://www.youtube.com/embed/LbG5STFZ3C0'
                  , 'name': 'Samurai Champloo episode 01/26'
                }
                , {
                  'type': 'chat'
                , 'src':'How to steal honey from bees'
                , 'name': 'How to steal honey from bees'
                }
                , {
                  'type': 'video'
                , 'src':'https://www.youtube.com/embed/YyoKXfBQgXw'
                , 'name': 'Tron(2010) Disc Wars (action only)'
                }
                , {
                  'type': 'chat'
                , 'src':'Making online presentation'
                , 'name': 'Making online presentation'
                }
              ];
    var i=0;
    var element = '';
    var dots = '';
    while (i<array.length){
      color = 'color:'+get_random_rgba();
      element += '<div class="tile">';
      element += '<div class="tile_content">';
      if (array[i].type=='video'){
        element += '<div class="tile_window"><iframe style="width:100%;height:100%"src="'+array[i].src+'"';
        element += ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
      } else {
        element += '<div class="tile_window" style="background-color:'+get_random_rgba().replace('0.8','0.5')+'">';
        element += array[i].src+'</div>';
      }
      dots = (array[i].name.length>27 ? '...' : '');
      element += '<div class="tile_name" title="'+array[i].name+'">'+array[i].name.slice(0,27)+dots+'</div>';
      element += '<div class="tile_user_name">';
      element += 'Ninja '+(i+1)+'</div>';
      element += '</div>';
      element += '</div>';
      i++;
    }

    return element;
  }

  function create_topics(){
    return 0;
  }

  function get_unique(value, index, self){
    return self.indexOf(value)===index;
  }

  function get_values(object, key){
    var array = [];
    var i=0;
    while (i<object.length){
      array[i] = object[i][key];
      i++;
    }

    return array;
  }

  $(document).on('click', '.tabs', function(e){
    $('.tabs').attr('class', 'tabs');
    $(this).toggleClass('chosen');
  })

  $(document).on('click', '#create', function(e){
    goto_room(1);
  });

  $(document).on('keyup', '.bottom_control>.input_field', function(e){
    auto_height(this);
  })

  $(document).on('click', '.tile', function(e){
    $('#center_content').toggleClass('room');
    $('#center_name').html($(this).find('.tile_name').attr('title'));
    $('#center_content').html($(this).find('.tile_window').html());
    goto_room(0);
  })

})
