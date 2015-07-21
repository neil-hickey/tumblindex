/**
 * Tumblindex
 * original: April 19, 2012
 */

var ct = new Date();
if (document.location.hostname != 'www.tumblr.com') {
	document.write("<script src='http://"+document.location.hostname+"/api/read/json?num=50?"+ct.getTime()+"'></script>");
}

$(document).ready(function(){

	//get root and current URL
	var loc = document.URL;
  var root = document.location.hostname;
  var path = window.location.pathname;
	var dir = path.substring(path.lastIndexOf('/'));

	//read in posts from tumblr
	if (root != 'www.tumblr.com') {
		var posts = tumblr_api_read.posts;
		for (var i in posts) {
			$('#project-list').append('<li><a href='+posts[i].url+'>'+posts[i].tags[0]+'</a></li>');
		}
	} else {
		$('#project-list').append('<li><a href="#">project title</a></li>')
	}

	//determine whether we are on homepage and should remove posts
	if (loc == 'http://'+root+'/' || root == 'www.tumblr.com'){
		$('#posts').remove();
	} else {
		$('#posts').show();
		$('#description').remove();
	}

	//determine if there is a description on homepage and remove img margin
	if ($('#desc').text().length <= 0){
		$('#description img').css('margin-top','0px');
	}

	//video fixing madness
	$('.video').fitVids();

	//current page
	$('#project-list a,#pages a').each(function(){
		if( $(this).attr('href') == loc || $(this).attr('href') == dir ){
			$(this).parent('li').addClass('activelink');
		}
	});

});
