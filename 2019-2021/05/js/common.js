$( document ).ready( function() {

	/* start Device 대응 사전 정의 ***********************************/
	var isMobile = function () {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	};
	if (isMobile()){
	}
	var isMobile2 = function () {
		//return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		return /Android/i.test(navigator.userAgent);
	};

	if (isMobile2()){
		$('body').addClass('androidCase');
	} else {
		$('body').addClass('iosCase');
	}

	/* 2019-10-22 */
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
	/* end 2019-10-22 */
	
	/* end Device 대응 사전 정의 ***********************************/

	/* start PLUS Select 2019-04-17 select 스크립트 사용하지 않도록 함
	// Common
	var select_root = $('.smselect');
	var select_value = $('.my_value');
	var select_li = $('.smselect>ul>li');
	var select_a = $('.smselect>ul>li>a');
	var select_none = $('.smselect>ul>li.selNone');
	
	/ Show
	function show_option(target){
		/console.log($(this));
		/alert(target.parents('div.smselect:first').toggleClass());
		/target.parents('div.smselect:first').toggleClass('open');
		target.toggleClass('open');
	}
	/ Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			//t.parents('div.smselect:first').removeClass('open');
			t.parents('ul').prev('.my_value').removeClass('open');
		}, 1);
	}
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}
	// Anchor Focus Out
	$('*:not(".smselect a")').focus(function(){
		$('.sList').parent('.smselect').removeClass('open');
	});
	/*select_value.click(show_option);
	select_value.bind('click', function(){
		show_option($(this));
	});
	select_root.removeClass('open');
	select_value.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_li.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover); ***********************************/
	/* end PLUS Select Projdect ***********************************/

	/*$('.btnCal').duDatepicker({
		 format: 'yyyy-mm-dd', // Determines the date format
		  theme: 'yellow',        // Determines the color theme of the date picker
		  readOnly: true,       // Determines if input element is readonly (key input is disabled)
		  clearBtn: false,      // Determines if Clear button is displayed
		  cancelBtn: true,     // Determines if Cancel button is displayed
		  overlayClose: true    // Determines if clicking the overlay will close the date picker
	});	//달력*/

	$(".popMNCase .close, .popLGCase .close, .popSMCase .btn button").click(function(){
		$('.dimPop, .popMNCase, .popLGCase, .popSMCase').hide();
	}); //팝업닫기 샘플

	/* start Layout Slide & Push ***********************************/
	/* GNB 공통*/
	var slideLeft = new Menu({
		wrapper: '#wrap',
		type: 'slide-left',
		menuOpenerClass: '.gnbOpen',
		maskId: '#c-mask',
		closeClass: '.gnbClose'
	});
	$(document).on('click tab', '.gnbOpen', function(e){
		e.preventDefault;
		slideLeft.open();
		$('body').addClass('gnbCase');
	});
	/* 견적 써머리 영역 */
	var pushLeft = new Menu({
		wrapper: '#estimateWrap',
		type: 'push-left',
		menuOpenerClass: '.stepOpen',
		maskId: '',
		closeClass: '.stepClose'
	});
	$(document).on('click', '.stepOpen', function(e){
		e.preventDefault;
		pushLeft.open();
	});
	/* Full팝업 영역*/
	var slideBottom = new Menu({
		wrapper: '#wrap',
		type: 'slide-bottom',
		menuOpenerClass: '.fullOpen',
		maskId: '',
		closeClass: '.fullClose'
	});
	$(document).on('click', '.fullOpen', function(e){
		e.preventDefault;
		slideBottom.open();
	});
	/* end Layout Slide & Push ***********************************/
	
	/*$(".popScrollArea").mCustomScrollbar({
		axis:"y",
		theme:"light",
		contentTouchScroll:true
	}); 2019-04-17 스크롤 적용삭제 */
	$(".popTab span").click(function () {
		$(".popTab span").removeClass("on");
		$(this).addClass("on");
	});

	/*$( ".cal" ).datepicker({ 
	    dateFormat: "yy년 mm월",
	    showButtonPanel: true,
	    buttonImageOnly: true
 	}); // datepicker */
	
	/*var select = $(".selectSet select"); 2019-04-17 select 스크립트 사용하지 않도록 함
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("strong").text(select_name);
	});
	for (i=0; i<$(".selectSet select").length; i++){
		var select_ = $(".selectSet select").get(i);
		if($(select_).is(":disabled")) $(select_).siblings('strong').css('opacity','0.5');
	} // select disabled opacity */

    // 페이지 제일 위로 이동
    $(".pageTop").hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".pageTop").fadeIn();
        }else{
            $(".pageTop").fadeOut();
        }
    });
    $(".pageTop").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 300);
    });
    
    // 견적관리 - 홈버튼 클릭
    $(".goMain.process").click(function(event){
        $('.dimPop, #moveHome').show();

        event.preventDefault();
    });
            
    // 견적관리 - 삭제버튼 클릭
    $("#estimateDelBtn").click(function(){
        $('.dimPop, #estimateDel').show();
    });
    
    // 견적관리 - 복사견적 버튼 클릭
    $("#estimateCopyBtn").click(function(){
        $('.dimPop, #estimateCopy').show();
    });

	$(".gnbClose").click(function(){
		$('body').removeClass('gnbCase');
	});

    // 2019-07-31 서명활성화,비활성화
	$(".singToggleBtn").click(function(){
		$(this).prev().prev().children(".signDim").toggle();
	});
});



function funcGnbOpen(){
	$('.gnbMenu li strong').click(function(){
		//alert();
		if ($(this).parent('li').hasClass('on') == true){
			$('.gnbMenu li ol').slideUp();
			$('.gnbMenu li').removeClass('on');
		} else {
			$('.gnbMenu li ol').slideUp();
			$('.gnbMenu li').removeClass('on');
			$(this).next('ol').slideDown();
			$(this).parent().addClass('on');
		}
	});
}