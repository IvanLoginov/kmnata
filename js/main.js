$(document).ready(function(){

  fill_object('#top_content', create_top_content());
  fill_object('#main_content', create_main_content());
  fill_object('#left_content', create_left_content());
  fill_object('#center_content', create_desired_content());

  function fill_object(which, filling){
    $(which).html(filling);
  }

  function create_top_content(){
    var element = '<table id="top_table" class="full_width">';
    element += '<td class="left_content_td">';
    element += '<table><td style="vertical-align:bottom">'
    element += '<div id="portal_logo"><div class="door_handle"></div></div>';
    element += '</td>';
    element += '<td style="vertical-align:bottom">';
    element += '<div id="portal_name">kmnata</div>';
    element += '</td></table>';
    element += '</td>';
    element += '<td>';
    element += '<table style="margin-top:5px" class="full_width"><td id="room_title">';
    element += '</td>';
    element += '<td style="width:140px">';
    element += '<button id="create"';
    element += ' class="ui inverted blue button">Create</button>';
    element += '</td></table>';
    element += '</td>';
    element += '<td class="right_content_td active">';
    element += '<div class="ui inverted right icon input" style="margin-top:10px;width:90%">';
    element += '<input id="top_search" type="text" placeholder="Search...">';
    element += '<i class="search icon"></i>';
    element += '</div>';
    element += '</td>';
    element += '</table>';
    return element;
  }

  function create_main_content(){
    var element = '<table id="main_table" class="full_width">';
    element += '<td class="left_content_td" style="padding-right:0px"><div id="left_content"></div></td>';
    element += '<td style="vertical-align:top"><div id="center_content">';
    element += '</div><div id="center_bottom" class="bottom_control"></div></td>';
    element += '<td class="right_content_td"><div id="tabs"></div><div id="right_content"></div>';
    element += '<div id="right_bottom" class="bottom_control"></div></td>';
    element += '</table>';

    return element;
  }

  function create_left_content(){
    var element = '<table id="left_content_table" class="full_width">';
    element += '<tr class="left_content_tr">';
    element += '<td><div id="total_online"><i class="user icon"></i><span class="amount">906</span></div></td>';
    element += '</tr>';
    element += '<tr class="left_content_tr">';
    element += '<td><div id="total_views"><i class="eye icon"></i><span class="amount">123K</span></div></td>';
    element += '</tr>';
    element += '<tr class="left_content_tr">';
    element += '<td><div id="desired" class="navigation link chosen"><i class="heart icon"></i> desired</div></td>';
    element += '</tr>';
    element += '<tr class="left_content_tr">';
    element += '<td><div id="explore" class="navigation link"><i class="building icon"></i> explore</div></td>';
    element += '</tr>';
    element += '</table>';

    return element;
  }

  function create_desired_content(){
    var data = [{
                  "header": "Java scanner not waiting for user input",
                  "tags": ["java", "java.util.scanner"],
                  "ninjas": 33,
                  "static": 0,
                  "video": 0
                },
                {
                  "header": "Query not working properly with LEFT JOIN (MySQL)",
                  "tags": ["mysql", "sql", "join"],
                  "ninjas": 22,
                  "static": 3,
                  "video": 2
                },
                {
                  "header": "How is it that a {} block can represent a function in scala?",
                  "tags": ["scala"],
                  "ninjas": 22,
                  "static": 1,
                  "video": 1
                },
                {
                  "header": "Strip Characters form URL using Javascript",
                  "tags": ["javascript", "arrays", "split", "strip"],
                  "ninjas": 21,
                  "static": 2,
                  "video": 0
                },
                {
                  "header": "Expose docker in VB to windows host",
                  "tags": ["windows", "docker", "ubuntu", "virtualbox"],
                  "ninjas": 2,
                  "static": 0,
                  "video": 0
                },
                {
                  "header": "Crontab (Centos7) with Python Files",
                  "tags": ["python", "cron", "centos7", "scheduler"],
                  "ninjas": 2,
                  "static": 0,
                  "video": 0
                },
                {
                  "header": "Boost locale 'Conversion failed' for gettext",
                  "tags": ["c++", "boost", "gettext", "mo"],
                  "ninjas": 9,
                  "static": 1,
                  "video": 0
                },
                {
                  "header": "pass image from FileReader to form input in Angular 6",
                  "tags": ["angular", "file-upload", "angular6", "image-uploading", "angular-reactive-forms"],
                  "ninjas": 17,
                  "static": 2,
                  "video": 1
                }]

      var i=0;
      var j, tags;
      var element = '<table class="full_width">';
      while (i<data.length){
        var color =
        element += '<tr class="room_tr">';
        element += '<td class="room_td">';
        element += '<div class="door"';
        element += 'style="background-color:'+get_random_rgba()+'">';
        element += '<div class="door_handle"></div></div></td>';
        element += '<td class="room_td">'
        element += '<table><tr>'
        element += '<td><div class="room_name">'+data[i].header+'</div></td>';
        element += '</tr>';
        element += '<tr><td>';
        j=0;
        tags = data[i].tags;
        while (j<tags.length){
          element += '<div class="tags">'+tags[j]+'</div>';
          j++;
        }
        element += '</td></tr></table>';
        element += '</td>';
        element += '<td class="room_td">';
        element += '<div class="brief_view">';
        element += 'Brief view</div>';
        element += '</tr>';
        i++;
      }
      element += '</table>';

      return element;
  }

  function create_explore_content(){
    var element = '<table class="full_width">';
    element += '<tr><td>';
    element += '<div style="font-size:18px; color:rgba(255,255,255,0.5)">Check it later</div>';
    element += '</td></tr>';
    element += '</table>';

    return element;
  }

  function auto_height(el){
    var delta = $(el).outerHeight();
    el.style.height = '1px';
    el.style.height = (el.scrollHeight)+"px";
    delta = $(el).outerHeight() - delta;
    if (delta){
      if ($('#center_bottom').html().length){
        delta = $('#center_content').css('height').replace('px','') - delta;
        $('#center_content').css('height', delta);
      } else {
        delta = $('#right_content').css('height').replace('px','') - delta;
        $('#right_content').css('height', delta);
      }
    }
  }
  var messages = [{'user':'Anti-Dead Cat', 'message':'<img src="../img/smelly_pussy.png"></img>'}
                  ,{'user':'Happy', 'message':'that refers to u my dude'}
                  ,{'user':'Anti-Dead Cat', 'message':'<img src="../img/build_shelf.png"></img>'}
                  ,{'user':'Fix a Fix', 'message':'Why 3/4 of your memes are memes that existed 10 years ago and the other quarter are good memes? How do you even find this collection thats good only in a small part? Just a question im curious and a bit surprised to find so many 2008 memes'}
                  ,{'user':'Intellegion', 'message':'hmm nice memes'}
                  ,{'user':'mefsh', 'message':'Not really a meme, but still funny.<br><br><img src="../img/kfc_dog.jpg"></img>'}
                ]

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
    if (create){
      element = '<input class="input_field" placeholder="What about?">';
      element += '</input>';
    } else {
      element = '<div id="room_title_div">';
      element += room_name;
      element += '</div>';
    }
    $('#room_title').html(element);
    element = '<table class="full_width">';
    if (!create){
      element += create_chat();
    }
    element += '</table>';
    $('#center_content').html(element).attr('class','chat');
    $('#right_content').attr('class','chat');
    element = '<div id="upload_media" class="control_button">';
    element += '<i class="paperclip icon"></i></div>';
    element += '<textarea class="input_field" placeholder="Message">';
    element += '</textarea>';
    $('#center_bottom').html(element);
    fill_object('#right_content', create_video_tiles());
    fill_object('#tabs', create_filter_tabs());
    $('#desks').click();
  }

  function create_video_tiles(){
    var array = ['https://www.youtube.com/embed/5AEbq6X33A8'
                , 'https://www.youtube.com/embed/LbG5STFZ3C0'];
    var i=0;
    var element = '';
    while (i<array.length){
      color = 'color:'+get_random_rgba();
      element += '<div class="tile">';
      element += '<div class="tile_user_name"><i class="bug icon" style="'+color+'">';
      element += '</i> Ninja '+(i+1)+'</div>';
      element += '<div class="tile_content">';
      element += '<iframe style="width:100%;height:100%"src="'+array[i]+'"';
      element += ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      element += '</div></div>';
      i++;
    }

    return element;
  }

  function create_tiles(){
    var i=0;
    var j=0;
    var element = '<div class="tile">';
    element += '<div class="tile_user_name">Main chat</div>';
    element += '<div class="tile_content">';
    element += '<table class="full_width">'+create_chat()+'</table>';
    element += '</div></div>';
    var uniq_users = get_values(messages, 'user');
    uniq_users = uniq_users.filter(get_unique);
    var color;
    while (i<uniq_users.length){
      color = 'color:'+get_random_rgba();
      element += '<div class="tile">';
      element += '<div class="tile_user_name"><i class="bug icon" style="'+color+'">';
      element += '</i> '+uniq_users[i]+'</div>';
      element += '<div class="tile_content"><table class="full_width">';
      j=0;
      while (j<messages.length){
        if (messages[j].user==uniq_users[i]){
          element += '<tr><td>';
          element += '<div class="user_message">'+messages[j].message+'</div>';
          element += '</td></tr>';
        }
        j++;
      }
      element += '</table></div></div>';
      i++;
    }

    return element;
  }

  function create_filter_tabs(){
    var array = ['DESKS', 'CHAT'];
    var i=0;
    var element = '';
    while (i<array.length){
      element += '<div id="'+array[i].toLowerCase()+'" title="Show here '+array[i].name+'"';
      element += ' class="tabs">';
      element += array[i];
      element += '</div>';
      i++;
    }

    return element;
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

  $(document).on('click', '.navigation.link', function(e){
    $('#room_title').html('');
    $('.bottom_control').html('');
    $('#tabs').html('');
    $('#center_content').attr('class','');
    $('.navigation.link').attr('class', 'navigation link');
    $(this).attr('class', 'navigation link chosen');

    var id = $(this).attr('id');
    var element;
    if (id=='desired'){
      element = create_desired_content();
    }
    if (id=='explore' || id=='responses'){
      element = create_explore_content();
    }
    fill_object('#center_content', element);
    fill_object('#right_content', '');
  });

  $(document).on('click', '.room_name', function(e){
    goto_room(0, $(this).html());

  });

  $(document).on('click', '.brief_view', function(e){
    fill_object('#right_content', '<table class="full_width chat">'+create_chat()+'</table>');
  })

  $(document).on('click', '#create', function(e){
    goto_room(1);
  });

  $(document).on('keyup', '.bottom_control>.input_field', function(e){
    auto_height(this);
  })

  $(document).on('click', '.tabs', function(e){
    $('.tabs').attr('class', 'tabs');
    $('.chat').attr('style','');
    $(this).toggleClass('chosen');
    var id = $(this).attr('id');
    var center;
    var right;
    var c_bot, r_bot;
    if (id == 'desks'){
      center = '<table class="full_width">';
      center += create_chat();
      center += '</table>';
      right = create_video_tiles();
      r_bot = '';
      c_bot = '<div id="upload_media" class="control_button">';
      c_bot += '<i class="paperclip icon"></i></div>';
      c_bot += '<textarea class="input_field" placeholder="Message">';
      c_bot += '</textarea>';
    } else {
      center = create_video_tiles();
      right = '<table class="full_width">';
      right += create_chat();
      right += '</table>';
      r_bot = '<div id="upload_media" class="control_button">';
      r_bot += '<i class="paperclip icon"></i></div>';
      r_bot += '<textarea class="input_field" placeholder="Message">';
      r_bot += '</textarea>';
      c_bot = '';

    }
    fill_object('#center_content', center);
    fill_object('#right_content', right);
    fill_object('#center_bottom', c_bot);
    fill_object('#right_bottom', r_bot)
  })

  $(document).on('click', '.tile_content', function(e){
    if ($('.tabs.chosen').html()=='DESKS'){
      $('#chat').click();
    }

    $('#center_content').html($(this).html());
  })

})
