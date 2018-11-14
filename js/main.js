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
        element += '<div class="tag_name" style="background-color:'+get_random_rgba(0.3)+'">';
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
    element += '<div id="center_content_info" class="bottom_control">';
    element += '<table><td id="user_icon"></td><td id="topic_info"></td></table>';
    element += '</div>';
    element += '<div id="center_bottom" class="bottom_control"></div>';
    element += '</td>';
    element += '<td style="width:1%">'
    element += '<div id="right_content"></div>';
    element += '<div id="right_bottom" class="bottom_control"></div>';
    element += '</td>';
    element += '</table>';

    return element;
  }

  function adjust_height(el){
    var delta = $(el).outerHeight();
    el.style.height = '1px';
    el.style.height = (el.scrollHeight-2)+"px";
    delta = $(el).outerHeight() - delta;
    if (delta){
      delta = $('#right_content').css('height').replace('px','') - delta;
      $('#right_content').css('height', delta);
    }
  }

  function get_random_color(){
    return Math.round(Math.random()*255,0);
  }

  function get_random_rgba(saturation){
    saturation = (saturation || 0.8);
    return 'rgba('+get_random_color()+','+get_random_color()+','+get_random_color()+', '+saturation+')';
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
  }

  function adjust_last_tile(){
    var x = $('.tile');
    var i = x.length-1;
    $(x[i]).css('margin-right','0px');
    var top = $(x[i]).offset().top;
    var q_last_row = 0;
    var q_first_row = 0;
    i--;
    while (i>-1 && $(x[i]).offset().top==top){
      q_last_row++;
      i--;
    }
    i = 0;
    top = $(x[i]).offset().top;
    i++;
    while (i<x.length && $(x[i]).offset().top==top){
      q_first_row++;
      i++;
    }
    var margin = (q_first_row - q_last_row)*$(x[0]).outerWidth(true)+15;
    $(x[x.length-1]).css('margin-right', margin);
  }

  function create_tiles(){
    var array = [
                  {
                  'src':'https://www.youtube.com/embed/LbG5STFZ3C0'
                  , 'name':'Samurai Champloo non-stop'
                }
                , {
                  'src':'https://www.youtube.com/embed/MmkHAlhCvWg'
                  , 'name': 'The Moment Diablo Died At Blizzcon 2018'
                }
                , {
                  'src':'https://www.youtube.com/embed/g190nCcC5CM'
                , 'name': 'FIBER Festival 2017 - Intelligent Machines that Learn: What Do They Know? by Memo Akten'
                }
                , {
                  'src':'https://www.youtube.com/embed/OxGorVTMDIU'
                , 'name': '2018 Bethesda E3 Showcase - 6/10 at 6:30pm PT'
                }
                , {
                  'src':'https://www.youtube.com/embed/jtyk_2_f3d0'
                , 'name': 'Lesson#2 AWS CodeStar | Deploy Java Spring webapp on AWS'
                }
                , {
                  'src':'https://www.youtube.com/embed/7eoDwvl0QGk'
                , 'name': 'Brexit explained: what happens when the UK leaves the EU?'
                }
                , {
                  'src':'https://www.youtube.com/embed/yyPODhoDgKc'
                , 'name': '2018 Google Pixel 3 event -- CNET live coverage'
                }
              ];
    var i=0;
    var element = '';
    var bg_color = '';
    while (i<array.length){
      bg_color = 'background-color:'+get_random_rgba(0.3);
      element += '<div class="tile" style="'+bg_color+'">';
      element += '<div class="tile_content">';
      element += '<div class="tile_window">';
      element += '<iframe src="'+array[i].src+'"';
      element += ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      element += '</div>';
      element += '<div class="topic_name">'+array[i].name+'</div>';
      element += '<div class="user_name">';
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

  function get_user_icon(){
    var color = 'color:'+get_random_rgba();
    var element = '<div style="'+color+'"><i class="bug icon"></i></div>';

    return element;
  }

  function get_topic_info(object){
    var topic_name = object.find('.topic_name').html();
    var user_name = object.find('.user_name').html();
    var element = '<div class="topic_name">'+topic_name+'</div>';
    element += '<div class="user_name">'+user_name+'</div>';

    return element;
  }

  function create_topics(){
    var topics = [
                    {
                      'name':'live'
                      ,'class': 'chosen'
                    },
                    {
                      'name':'red shirt guy 2010'
                      ,'class': ''
                    },
                    {
                      'name':'Arrays - lesson 16'
                      ,'class': ''
                    },
                    {
                      'name':'How to deploy on Heroku'
                      ,'class': ''
                    },
                    {
                      'name':'Ocarina of time'
                      ,'class': ''
                    }
                  ]
    var i=0;
    var element = '';
    while (i<topics.length){
      element += '<div class="topic '+topics[i].class +'">'
      element += '<table class="full_width topic_table">';
      element += '<td style="vertical-align:middle">';
      if (i%2==0){
        element += '<div class="n_new_messages">'
        element += Math.floor(Math.random()*10,0);
        element += '</div>';
      }
      element += '</td>';
      element += '<td style="vertical-align:middle">';
      element += '<div class="topic_name">'+topics[i].name+'</div>';
      element += '</td>';
      element += '</table>';
      element +='</div>';
      i++;
    }

    return element;
  }

  $(document).on('click', '.tabs', function(e){
    $('.tabs').attr('class', 'tabs');
    $(this).toggleClass('chosen');
  })

  $(document).on('click', '#create', function(e){
    goto_room(1);
  });

  $(document).on('keyup', '.bottom_control>.input_field', function(e){
    adjust_height(this);
  })

  $(document).on('click', '.tile', function(e){
    $('#center_content').toggleClass('room');
    $('#user_icon').html(get_user_icon());
    $('#topic_info').html(get_topic_info($(this)));
    $('#center_bottom').html(create_topics());
    $('#center_content').html($(this).find('.tile_window').html());
    goto_room(0);
  })

})
