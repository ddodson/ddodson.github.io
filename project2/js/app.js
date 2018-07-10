/*
  Please add all Javascript code to this file.
*/

//api set up data
var apis = {
  nyt:{
    source:'The New York Times',
    returnResult:'results',
    apikey:'3a2be41461714996a25b6f9a46daa606',
    url:'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=3a2be41461714996a25b6f9a46daa606',
    subthumb:'',
    defaultthumb:'http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg',
    translate:{
      pk:'url',
      type:'type',
      section1:'section',
      section2:'type',
      date:'published_date',
      title:'title',
      author:'byline',
      url:'url',
      thumb:'media[0][\'media-metadata\'][0].url',
      thumb_alt:'media[0].caption',
      abrev:'abstract',
      impressions:'',
      bodytext:'abstract',
      bodyhtml:'abstract',
    }
  },
  guardian:{
    source:'The Guardian',
    returnResult:'response.results',
    apikey:'cab434ec-44d1-4d51-a16e-d7c116819d03',
    url:'https://content.guardianapis.com/search?api-key=cab434ec-44d1-4d51-a16e-d7c116819d03&show-fields=all',
    subthumb:'',
    defaultthumb:'https://i.vimeocdn.com/portrait/23154888_300x300',
    translate:{
      pk:'id',
      type:'type',
      section1:'sectionId',
      section2:'sectionName',
      date:'webPublicationDate',
      title:'webTitle',
      author:'fields.byline',
      url:'webUrl',
      thumb:'fields.thumbnail',
      thumb_alt:'',
      abrev:'fields.bodyText',
      impressions:'',
      bodytext:'fields.bodyText',
      bodyhtml:'fields.body',
    }
  },
};

var articles = [];
var source_menu = '<li><a class="newssource" href="#all">All</a></li>';
var request = new XMLHttpRequest();
var html_result = '';

$('#sources').html('');
for(api in apis){
  parseApi(apis[api]);
  source_menu += '<li><a class="newssource" href="#" id="api_'+api+'">'+apis[api].source+'</a></li>'
  $('#sources').html(source_menu);
}

$('#sources').on("click", "li", function() {
  api = $(event.target).attr('id').substring(4);
  html_result = '';
  articles = [];
  $('#main').html(html_result);
  parseApi(apis[api]);
});


function parseApi(api){
  var requestURL = api.url;
  var request = new XMLHttpRequest();
  var aliases = api.translate;
  request.addEventListener('load', function(){
    var myData = JSON.parse(request.response);
    var resultsA = eval('myData.'+api.returnResult);
    //loop through results and push values to articles array
    for(res in resultsA){
      var temp = {};
      //loop through aliases and load result values into object to pass into articles array
      for(alias in aliases){
        //add value and key to object to be passed to articles
        if(aliases[alias] == ''){
          if(alias == 'thumb'){
            temp[alias] = api['defaultthumb'];
          }else{
            temp[alias] = '';
          }
        }else if(alias == 'thumb'){
          temp[alias] = eval('resultsA[res].'+aliases[alias]);
        }else{
          temp[alias] = eval('myData.'+api.returnResult+'[res].'+aliases[alias]);
        }
      }
      //add value and key object to articles array
      articles.push(temp);
    }

    populateArticles(articles, api.subthumb, api.defaultthumb);
  });

  request.open('GET', requestURL);
  request.send();
}

function populateArticles(articles, subthumb, defaultthumb){
  for(i = 0; i < articles.length; ++i){
    var thumb_url = (subthumb != '') ? eval('articles[i].thumb'+subthumb) : articles[i].thumb;
    if(thumb_url == ''){
      thumb_url == defaultthumb;
    }
    if(articles[i].abrev.length > 230){
      articles[i].abrev = articles[i].abrev.substring(0,230)+'...';
    }
    html_result += '<article class="article">';
    html_result +=   '<section class="featuredImage">';
    html_result +=     '<img src="'+thumb_url+'" alt="'+articles[i].title+'">';
    html_result +=   '</section>';
    html_result +=   '<section class="articleContent">';
    html_result +=     '<a href="#"><h3 id="title">'+articles[i].title+'</h3></a>';
    html_result +=     '<h6>'+(articles[i].section1 != undefined ? (articles[i].section1+' ') : '');
    html_result +=            (articles[i].section2 != undefined ? articles[i].section2 : '');
    html_result +=            ': '+articles[i].abrev+'</h6>';
    html_result +=   '</section>';
    html_result +=   '<section class="impressions">'+articles[i].impressions+'</section>';
    html_result +=   '<div class="clearfix"></div>';
    html_result +=   '<div class="hidden" id="bodyhtml">'+articles[i].bodyhtml+'</div>';
    html_result +=   '<div class="hidden" id="weburl">'+articles[i].url+'</div>';
    html_result += '</article>';
  }
  $('#main').html(html_result);
  $('.article').bind( "click", function() {
    var popuptitle = $(this).find("#title").html();
    var popupbody = $(this).find("#bodyhtml").html();
    var url = $(this).find("#weburl").html();
    var readmore = '<a href="'+url+'" class="popUpAction" target="_blank">Read more from source</a>';

    $('#popUp > div > h1').html(popuptitle);
    $('#popUp > div > p').html(popupbody.substring(0,2000)+'...');
    $('#popUp > div > a').html(readmore);
    $('#popUp').removeClass("loader hidden");
  });
  $('#closePopUp').bind("click", function() {
    $('#popUp').addClass("loader hidden");
  });
}
