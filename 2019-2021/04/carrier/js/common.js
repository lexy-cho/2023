
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
        $(this).parents(".tabNav").find('li').removeClass("on");
        $(this).parent("li").addClass("on");
        var activeTab = $(this).attr("data-name");
        $(this).parents('.cTabCase1, .cTabCase2, .cTabCase3').find('.tabData').hide();
        $('.tData' + activeTab).show();
    }); /* Tab */

	/* 팝업 여닫기 샘플 ***********************************/
    $('.btnOption').click(function(){
        $('.popDim').show();
        $('.filterPop').show();
        scrollClose();
    });
    $('.btnSearchOrder').click(function(){
        $('.popDim').show();
        $('.contractSearchPop').show();
        scrollClose();
    });
    $('.btnTaxChk, .btnTax').click(function(){
        $('.popDim').show();
        $('.taxBillPop').show();
        scrollClose();
    });
    $('.btnAdress').click(function(){
        $('.popDim').show();
        $('.addressPop').show();
        scrollClose();
    });
    $('.searchCompany').click(function(){
        $('.popDim').show();
        $('.companyPop').show();
        scrollClose();
    });
    $('.btnSetting').click(function(){
        $('.popDim').show();
        $('.filterPop').show();
        scrollClose();
    });
    $('.btnLoadResult').click(function(){
        $('.popDim').show();
        $('.loadResultPop').show();
        scrollClose();
    });
    $('.alertPop .pBtn button, .basicPop .pBtn button, .pclose').click(function(){
        $('.popDim, .alertDim').hide();
        $('.alertPop, .basicPop').hide();
        $('html, body').css({'overflow' : 'auto'});
    });
	/* end 팝업 여닫기 샘플 ***********************************/

    /* 이미지 팝업 관련 ***********************************/
    $('.btnFileChk').click(function(){
        $('.popDim').show();
        $('.imgZoomPop').show();
    }); // 이미지 확대 팝업
    $('.imgZoomPop .pclose').click(function(){
        $('.popDim').hide();
        $('.imgZoomPop').hide();
    }); // 이미지 확대 팝업 닫기

    /* 2020-08-04 모바일 운송실행 히든헤드 ***********************************/
    function mobileHiddenHead(){
        var windowWidth = $( window ).width();
        if(windowWidth < 800){
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
        }
    }
    mobileHiddenHead();
    $( window ).resize(function() {
        mobileHiddenHead();
    });
	/* end 모바일 운송실행 히든헤드 ***********************************/

	$(".inputBox input, .inputBox select, .inputBox textarea, .company input, .address input, .calSet input").focus(function(){
		$(".inputBox").removeClass('focusOn');
		$(this).parents(".inputBox").addClass('focusOn');
	});
	$(".inputBox input, .inputBox select, .inputBox textarea, .company input, .address input, .calSet input").blur(function(){
		$(this).parents(".inputBox").removeClass('focusOn');
	}); //인풋영역 활성화비활성화

	$(".calSet input").focus(function(){
		$(".calSet").removeClass('focusOn');
		$(this).parents(".calSet").addClass('focusOn');
	});
	$(".calSet input").blur(function(){
		$(this).parents(".calSet").removeClass('focusOn');
	}); //달력 활성화비활성화

	/* GNB & SNB inClude / menu Toggle ***********************************/
	var pageUrl = location.href;
	function menuToggle(){
		/*if (pageUrl.indexOf("/monitoring") != -1){
			$(".nav li").removeClass('on');
			$(".nav li.navList0").addClass('on');
		} else if (pageUrl.indexOf("/order") != -1){
			$(".nav li").removeClass('on');
			$(".nav li.navList1").addClass('on');
		}*/
		$("#snb div.nav li").each(function(index, element) {
			var hrefText = $(element).find("a").attr("href");
			if (pageUrl.indexOf(hrefText) != -1){
				$(this).addClass('on');
				if ($(this).parents('li').length > 0){
					$(this).parents('li').addClass('on');
				}
			}
		});
		$(".mobileNav li").each(function(index, element) {
			var hrefText2 = $(element).find("a").attr("href");
			if (pageUrl.indexOf(hrefText2) != -1){
				$(this).addClass('on');
				if ($(this).parents('li').length > 0){
					$(this).parents('li').addClass('on');
				}
			}
		});

		if (pageUrl.indexOf("setting") != -1 || pageUrl.indexOf("user_approval") != -1 || pageUrl.indexOf("mypage") != -1 || pageUrl.indexOf("matching_fee") != -1 || pageUrl.indexOf("faq") != -1){
			$(".snbInfo .st").addClass('on');
		}

		if (pageUrl.indexOf("system_notice") != -1){
			$(".snbInfo .sn").addClass('on');
		}

		if (pageUrl.indexOf("contract_order") != -1 || pageUrl.indexOf("call_order") != -1){
			$(".btnOrder").addClass('on');
		}
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
	includeLayout();
	/* end GNB & SNB inClude / menu Toggle ***********************************/

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

	if($('body *').hasClass("dateCalSet") === true) {
		$('.dateCalSet').duDatepicker({
			format: 'yyyy-mm-dd',
			theme: 'white',
			readOnly: true,
			clearBtn: false,
			cancelBtn: true,
			overlayClose: true
		}).on('datechanged', function(event){
			$(this).text(event.date);
		});
	} //달력2

	$(".taxStamp button").click(function(){
		$(this).parent().addClass('on');
		$(this).hide();
        $(this).siblings('button.cancel').show();
	});
    $(".taxStamp button.cancel").click(function(){
		$(this).parent().removeClass('on');
		$(this).hide();
        $(this).siblings('button').show();
    });

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

	/**/
	if($('body *').hasClass("autoCom") === true) {
		$(function() {
			var availableTags = [
			  "ActionScript",
			  "AppleScript",
			  "Asp",
			  "BASIC",
			  "C",
			  "C++",
			  "Clojure",
			  "COBOL",
			  "ColdFusion",
			  "Erlang",
			  "Fortran",
			  "Groovy",
			  "Haskell",
			  "Java",
			  "JavaScript",
			  "Lisp",
			  "Perl",
			  "PHP",
			  "Python",
			  "Ruby",
			  "Scala",
			  "Scheme",
			  "ActionScript",
			  "AppleScript",
			  "Asp",
			  "BASIC",
			  "C",
			  "C++",
			  "Clojure",
			  "COBOL",
			  "ColdFusion",
			  "Erlang",
			  "Fortran",
			  "Groovy",
			  "Haskell",
			  "Java",
			  "JavaScript",
			  "Lisp",
			  "Perl",
			  "PHP",
			  "Python",
			  "Ruby",
			  "Scala",
			  "Scheme"
			];
			$( ".autoCom" ).autocomplete({
			  source: availableTags
			});
		}); // 회사명 자동완성
	}
	if($('body *').hasClass("autoShipper") === true) {
		$(function() {
			var availableTags = [
			  "HMM / HYUNDAI MERCHANT MARINE CO.,LTD : 현대상선",
			  "HLC / HAPAG LLOYD KOREA : 하파그로이드코리아",
			  "HSL / HAN SUNG LINE CO.,LTD : 한성라인"
			];
			$( ".autoShipper" ).autocomplete({
			  source: availableTags
			});
		}); // 선사 자동완성
	}
	$(".selectSet.dis select").change( function() {
		$(this).parent().removeClass('dis');
	});//
});
