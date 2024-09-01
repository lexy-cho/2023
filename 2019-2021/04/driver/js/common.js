function scrollClose(){
    $('html, body').css({'overflow' : 'hidden'});
}
function scrollOpen(){
    $('html, body').css({'overflow' : 'auto'});
}

$(document).ready(function() {
    /* start Device 대응 사전 정의 ***********************************/
    var isMobile = function () {
     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    if (isMobile()){}
    var isMobile1 = function () {
     return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };
    var isMobile2 = function () {
     return /Android/i.test(navigator.userAgent);
    };
    if (isMobile2()){
     $('body').addClass('androidCase');
    } else if (isMobile1()){
     $('body').addClass('iosCase');
    }
    var userAgent = window.navigator.userAgent;
    var isChrome = userAgent.indexOf('Chrome');
    var isChromeMobile = userAgent.indexOf('CriOS');
    var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
    var isWindows = userAgent.indexOf('Windows NT');
    var isEdge = userAgent.indexOf('Edge');
    var isIE = userAgent.indexOf('Trident');

    // 크롬 브라우저 체크
    if (isEdge >= 0){
     $('body').addClass('edgeCase');
    }
    /* end Device 대응 사전 정의 ***********************************/

    $(".tabNav li button").click(function () {
        $(".tabNav li").removeClass("on");
        $(this).parent("li").addClass("on");
        var activeTab = $(this).attr("data-name");
        $('.tabData').hide();
        $('.tData' + activeTab).show();
    }); /* Tab */

	$(".inputBox input, .inputBox select, .inputBox textarea").focus(function(){
		$(".inputBox").removeClass('focusOn');
		$(this).parents(".inputBox").addClass('focusOn');
	});
	$(".inputBox input, .inputBox select, .inputBox textarea").blur(function(){
		$(this).parents(".inputBox").removeClass('focusOn');
	}); //인풋영역 활성화비활성화

	$(".calSet input").focus(function(){
		$(".calSet").removeClass('focusOn');
		$(this).parents(".calSet").addClass('focusOn');
	});
	$(".calSet input").blur(function(){
		$(this).parents(".calSet").removeClass('focusOn');
	}); //달력 활성화비활성화

    $('.alertPop .pBtn button, .basicPop .pBtn button, .basicPop .pclose').click(function(){
        $('.popDim, .alertDim, .layerDim').hide();
        $(this).parents('.basicPop, .alertPop').hide();
    })

	/* page inClude ***********************************/
	function includeLayout(){
		var includeArea = $('[data-include]');
		var self, url;
		$.each(includeArea, function() {
			self = $(this);
			url = self.data("include");
			self.load(url, function() {
				self.removeAttr("data-include");
			});
		});
	}
	includeLayout();
	/* end page inClude ***********************************/

	/* PageOpen ***********************************/
	$(document).on('click tab', '.openPush', function(e){
		var slideRight = new Menu({
			wrapper: '#wrap',
			type: 'slide-right',
			menuOpenerClass: '.openPush',
			maskId: '.c-mask',
			closeClass: '.closePush',
			typeLayer: '#push'
		});
		slideRight.open();
	});// 알림오픈
	/* end PageOpen ***********************************/

	/* scroll Top ***********************************/
    var scrollTopHidden_offset = $('.tEstep.schedule').height();
    $(window).scroll(function() {
        var scrollValue = $(document).scrollTop();
        //console.log(scrollValue);
        if(scrollValue > scrollTopHidden_offset){
			$("#header .hiddenHead").show();
			$("#wrap.freightCase").addClass('scrollIn');
		}else{
			$("#header .hiddenHead").hide();
			$("#wrap.freightCase").removeClass('scrollIn');
		}
    });

	/* end scroll Top ***********************************/

	if($('body *').hasClass("calSet") === true) {
		$('.calSet button').duDatepicker({
			format: 'yyyy-mm-dd',
			theme: 'white',
			readOnly: true,
			clearBtn: false,
			cancelBtn: true,
			overlayClose: true
		}).on('datechanged', function(event){
			$(this).prev().val(event.date);
		});
	} //달력
	$(".selectSet.dis select").change( function() {
		$(this).parent().removeClass('dis');
	});//
});
