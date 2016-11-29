$(document).ready(function() {
	$(document).scroll(function(e) {
		var scroll = $(this).scrollTop();
		var anchor = $("#about").offset().top;

		perc = scroll / $(document).innerHeight();
		$('.nav,.h-container').css('background',"hsl(" + perc * 255 + ",50%,50%");

	})
});
function scrollTo(pos) {
	var position = 0;
	if(pos != 0) {
		position = $(pos).offset().top;
	}
	$('html,body').animate({
		scrollTop:position
	},'slow');
}

function handleSubmit(e) {
	alert('大懒虫还没有修好它，sorry');
	// e.preventDefault();
	// sendMail();
}
function download() {
	window.location.href = "https://catepillarzyc.github.io/Resume";
}
// function sendMail() {
// 	var from = $('#sender-email').val(),
// 		message = $('#message').val(),
// 		contactElement = $('#contact-form');
// 	var to = 'caterpillar_c@outlook.com';

// 	if( from != '' && message != '') {
// 		request('POST','mail.php',{msg:message,to:to,from:from}).then(function(response) {
// 			if(response.includes('php')) {
// 				contactElement.innerHTML = response;
// 			} else {
// 				contactElement.innerHTML = `<div id='done'>mail ${to} is arrived</div>`;
// 			}
// 		});
// 	}
// }
// function request(type,url,data) {
// 	return new Promise(function(resolve) {
// 		var xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function() {
// 			if(this.readyState === 4) {
// 				resolve(this.responseText);
// 			}
// 		};
// 		var requestParams = [];
// 		for(let prop in data) {
// 			requestParams.push(prop + '=' + data[prop]);
// 		}
// 		requestParams = requestParams.join('&');
// 		xhttp.open(type,url,true);
// 		xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
// 		xhttp.send(requestParams);
// 	})
// }