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
    element += '<td class="content_side_td">';
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
    element += '<td class="content_side_td" style="padding-left:0px">';
    element += '<div class="ui inverted right icon input" style="margin-top:10px;">';
    element += '<input id="top_search" type="text" placeholder="Search...">';
    element += '<i class="search icon"></i>';
    element += '</div>';
    element += '</td>';
    element += '</table>';
    return element;
  }

  function create_main_content(){
    var element = '<table id="main_table" class="full_width">';
    element += '<td class="content_side_td" style="padding-right:0px"><div id="left_content"></div></td>';
    element += '<td style="vertical-align:top"><div id="center_content"></div><div id="input_message"></div></td>';
    element += '<td class="content_side_td" style="padding:0px 0px 0px 5px"><div id="right_content"></div></td>';
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
    element += '<tr class="left_content_tr">';
    element += '<td><div id="responses" class="navigation link"><i class="envelope icon"></i> responses</div></td>';
    element += '</tr>';
    element += '</table>';

    return element;
  }

  function create_right_content(){
    var element = '<table id="left_content_table" class="full_width">';
    element += '<tr class="right_content_tr">';
    element += '<td><div class="group_title">VIDEO</div></td>';
    element += '</tr>';
    var i=0;
    var q=2;
    while (i<q){
      element += '<tr class="right_content_tr">';
      element += '<td><div class="ninja link"><i class="circle icon"></i> Ninja '+(i+1)+'</div></td>';
      element += '</tr>';
      i++;
    }
    element += '<tr class="right_content_tr">';
    element += '<td><div class="group_title">CHAT</div></td>';
    element += '</tr>';
    i=0;
    q=7;
    while (i<q){
      element += '<tr class="right_content_tr">';
      element += '<td><div class="ninja link"><i class="circle icon"></i> Ninja '+(i+1)+'</div></td>';
      element += '</tr>';
      i++;
    }
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
      var element = '<table id="center_content_table" class="full_width">';
      while (i<data.length){
        element += '<tr class="room_tr">';
        element += '<td class="room_td">';
        element += '<div class="door"';
        element += 'style="background-color:rgba('+Math.round(Math.random()*255,0);
        element += ','+Math.round(Math.random()*255,0)+','+Math.round(Math.random()*255,0)+', 0.8)">';
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
        element += '<table class="room_overview">';
        element += '<tr>';
        element += '<td>'+data[i].ninjas+'</td>';
        element += '<td>'+data[i].static+'</td>';
        element += '<td>'+data[i].video+'</td>';
        element += '</tr>';
        element += '<tr>';
        element += '<td>ninjas</td>';
        element += '<td>static</td>';
        element += '<td>video</td>';
        element += '</table>';
        element += '</td></tr>';
        i++;
      }
      element += '</table>';

      return element;
  }

  function create_explore_content(){
    var element = '<table id="center_content_table" class="full_width">';
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
      delta = $('#center_content').css('height').replace('px','') - delta;
      $('#center_content').css('height', delta);
    }
  }

  function get_chat(){
    var messages = [{'user':'Anti-Dead Cat', 'message':'<img src="../img/smelly_pussy.png"></img>'}
                    ,{'user':'Happy', 'message':'that refers to u my dude'}
                    ,{'user':'Anti-Dead Cat', 'message':'<img src="../img/build_shelf.png"></img>'}
                    ,{'user':'Fix a Fix', 'message':'Why 3/4 of your memes are memes that existed 10 years ago and the other quarter are good memes? How do you even find this collection thats good only in a small part? Just a question im curious and a bit surprised to find so many 2008 memes'}
                    ,{'user':'Intellegion', 'message':'hmm nice memes'}
                    ,{'user':'mefsh', 'message':'Not really a meme, but still funny.<br><br><img src="../img/kfc_dog.jpg"></img>'}
                  ]
    var element = '';
    var color;
    var i=0;
    while (i<messages.length){
      color = 'color:rgba('+Math.round(Math.random()*255,0);
      color += ','+Math.round(Math.random()*255,0)+','+Math.round(Math.random()*255,0)+', 0.8)';
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
    $('.navigation.link').attr('class', 'navigation link');
    var element;
    if (create){
      element = '<input class="input_field" placeholder="What about?">';
      element += '</input>';
    } else {
      element = '<div>';
      element += room_name;
      element += '</div>';
    }
    $('#room_title').html(element);
    element = '<table id="center_content_table" class="full_width">';
    if (!create){
      element += get_chat();
    }
    element += '</table>';
    $('#center_content').html(element).attr('class','chat');
    element = '<div id="upload_media"><i class="paperclip icon"></i></div>';
    element += '<textarea class="input_field" placeholder="Message">';
    element += '</textarea>';
    $('#input_message').html(element);
    fill_object('#right_content', create_right_content());
  }

  $(document).on('click', '.navigation.link', function(e){
    $('#room_title').html('');
    $('#input_message').html('');
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

  $(document).on('click', '#create', function(e){
    goto_room(1);
  });

  $(document).on('keyup', '#input_message>.input_field', function(e){
    auto_height(this);
  })
  //say hellow
})
