/* start Device 대응 사전 정의 ***********************************/
var isMobile = function () {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
var isAndroid = function () {
	//return /iPhone|iPad|iPod/i.test(navigator.userAgent);
	return /Android/i.test(navigator.userAgent);
};
var userAgent = window.navigator.userAgent;
var isChrome = userAgent.indexOf('Chrome');
var isChromeMobile = userAgent.indexOf('CriOS');
var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
var isWindows = userAgent.indexOf('Windows NT');
var isEdge = userAgent.indexOf('Edge');
var isIE = userAgent.indexOf('Trident');
var g_bMainPageChk = false;
function comDeviceActive(){
	if (isMobile()){
		$('body').addClass('is-Mobile');
		if (isAndroid()){
			$('body').addClass('is-Android');
		} else {
			$('body').addClass('is-iOS');
		}
	} else if (!isMobile()){
		$('body').removeClass('is-Mobile');
	}
	if (isEdge >= 0){
		$('body').addClass('is-Edge');
	}
}

var getMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i) == null ? false : true;
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
	},
	IOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
	}
};

/* end Device 대응 사전 정의 ***********************************/
/* GNB & SNB inClude / menu Toggle ***********************************/
var pageUrl = location.href;
function menuToggle(){
}

function includeLayout(){
	var includeArea = $('[data-include]');
	var self, url;
	$.each(includeArea, function() {
		self = $(this);
		url = self.data("include");
		self.load(url, function() {
			self.removeAttr("data-include");
			menuToggle();
		});
	});
}
/* ebd GNB & SNB inClude / menu Toggle ***********************************/


$(document).ready(function (){
	comDeviceActive();
	/**/
	var navFunction = new Menu({
		wrapper: '#wrap',
		type: 'slide-left', // 우측 Slide 일 경우
		menuOpenerClass: '.btnNav',
		maskId: '.c-mask',
		closeClass: '.c-close'
	});
	$(document).on('click tab', '.btnNav', function(e){
		e.preventDefault;
		navFunction.open();
	});
	/**/
	var navFunction2 = new Menu({
		wrapper: '#wrap',
		type: 'slide-right', // 우측 Slide 일 경우
		menuOpenerClass: '.btnMainMore',
		maskId: '.c-mask',
		closeClass: '.mnavClose'
	});
	$(document).on('click tab', '.btnMainMore', function(e){
		e.preventDefault;
		navFunction2.open();
	});
    // 페이지 제일 위로 이동
    $(".pageTop").hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".pageTop").fadeIn();
            $("#header").addClass('scrollIn');
            $(".fab").fadeOut();
        }else{
            $(".pageTop").fadeOut();
            $("#header").removeClass('scrollIn');
            $(".fab").fadeIn();
        }
    });
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 300);
    });

	if($('body *').hasClass("calSet") === true) {
		$('.calSet button').duDatepicker({
			format: 'yyyy-mm-dd',
			theme: 'blue',
			readOnly: true,
			clearBtn: false,
			cancelBtn: true,
			overlayClose: true
		}).on('datechanged', function(event){
			$(this).prev().val(event.date);
		});
	}

	includeLayout();

});
