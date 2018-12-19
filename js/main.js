$(document).ready(function(){
  sessionStorage.messages = JSON.stringify([{'user':'Anti-Dead Cat', 'message':'<img src="../img/smelly_pussy.png"></img>'}
                  ,{'user':'Happy', 'message':'that refers to u my dude'}
                  ,{'user':'Anti-Dead Cat', 'message':'<img src="../img/build_shelf.png"></img>'}
                  ,{'user':'Fix a Fix', 'message':'Why 3/4 of your memes are memes that existed 10 years ago and the other quarter are good memes? How do you even find this collection thats good only in a small part? Just a question im curious and a bit surprised to find so many 2008 memes'}
                  ,{'user':'Intellegion', 'message':'hmm nice memes'}
                  ,{'user':'mefsh', 'message':'Not really a meme, but still funny.<br><br><img src="../img/kfc_dog.jpg"></img>'}
                ]);

  fill_object('#top_content', create_top_content());
  fill_object('#main_content', create_main_content());
  create_tiles();
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
        element += '<div class="tag" style="background-color:'+get_random_rgba(0.3)+'">';
        element += '<div class="tag_name">';
        element += hashtags[i].name+'</div>';
        element += '</div>';
        i++;
      }

      return element;
  }

  function create_top_content(){
    var element = '<table id="top_table" class="full_width">';
    element += '<tr>';
    element += '<td class="top sides">';
    element += '<div id="emblem">M01N!4</div>';
    element += '<div id="div_search">';
    element += '<input id="top_search" type="text" placeholder="Search...">';
    element += '<i id="close_search" class="x icon"></i>';
    element += '</div>';
    element += '</td>';
    element += '<td>';
    element += '<div id="room">Incorporari, Exsultate, Vive,</div>';
    element += '</td>';
    element += '<td class="top sides">';
    element += '<div id="create" class="top_control"><i class="plus icon"></i></div>';
    element += '<div id="starred" class="top_control"><i class="star icon"></i></div>';
    element += '<div id="archived" class="top_control"><i class="archive icon"></i></div>';
    element += '<div id="mail" class="top_control"><i class="envelope icon"></i></div>'
    element += '</td>';
    element += '</tr>';
    element += '<tr>';
    element += '<td>'
    element += '<div id="tags" class="hidden">';
    element += create_hashtag_tabs();
    element += '</div>';
    element += '</td>';
    element += '</tr>';
    element += '</table>';
    return element;
  }

  function create_main_content(){
    var element = '<table id="main_table" class="full_width">';
    element += '<td class="sides">';
    element += '<div id="left_content"></div>';
    element += '</td>';
    element += '<td>';
    element += '<div id="center_content">'+create_tile_table()+'</div>';
    element += '</td>';
    element += '<td class="sides">';
    element += '<div id="dropdown" class="hidden"></div>';
    element += '<div id="right_content"></div>';
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

  function create_tile_table(cols){
    cols = (cols || 4)
    var i=0;
    var element = '<table id="tile_table">';
    while (i<cols){
      element += '<td id="col_'+(i+1)+'"></td>';
      i++;
    }
    element += '</table>';

    return element;
  }

  function create_chat(){
    messages = JSON.parse(sessionStorage.messages);
    var element = '<table class="full_width">';
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
    element += '</table>';

    return element;
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
                  'src':''
                , 'name': 'Fast created random conversation'
                }
                , {
                  'src':'https://www.youtube.com/embed/7eoDwvl0QGk'
                , 'name': 'Brexit explained: what happens when the UK leaves the EU?'
                }
                , {
                  'src':'https://www.youtube.com/embed/yyPODhoDgKc'
                , 'name': '2018 Google Pixel 3 event -- CNET live coverage'
                }
                , {
                  'src':''
                , 'name': 'Fast created random conversation'
                }
                , {
                  'src':'https://www.youtube.com/embed/wPxjKRwHOiQ'
                , 'name': 'Coca Cola and Pool Chlorine Strange Chemical Reaction'
                }
                , {
                  'src':''
                , 'name': 'Fast created random conversation'
                }
              ];
    var i=0,
        j=1;
    var element = '';
    var bg_color = '';
    while (i<array.length){
      bg_color = '';//'background-color:'+get_random_rgba(0.3);
      element = '';
      element += '<div class="tile" style="'+bg_color+'">';
      element += '<div class="tile_content">';
      element += '<div class="tile_window">';
      if (array[i].src==""){
        element += create_chat();
      } else {
        element += '<iframe src="'+array[i].src+'"';
        element += ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      }
      element += '</div>';
      element += '<div class="room_name">'+array[i].name+'</div>';
      element += '<div class="user_name">';
      element += 'Ninja '+(i+1)+'</div>';
      element += '</div>';
      element += '</div>';
      $('#col_'+j).append(element);
      if (j<4){
        j++;
      } else {
        j=1;
      }
      i++;
    }
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

  $(document).on('keyup', '.bottom_control>.input_field', function(e){
    adjust_height(this);
  })

  $(document).on('click', '#top_search', function(e){
    $('#div_search').attr('class', 'active');
  })

  $(document).on('click', '#close_search', function(e){
    $('#div_search').attr('class', '');
    $('#top_search').val('');
  })

  $(document).on('click', '.top_control', function(e){
    $('.top_control').attr('class','top_control');
  })

})
