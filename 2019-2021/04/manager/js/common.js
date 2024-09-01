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

    /* page inClude ***********************************/
	var pageUrl = location.href;
    function includeLayout(){
        var includeArea = $('[data-include]');
        var self, url;
        $.each(includeArea, function() {
            self = $(this);
            url = self.data("include");
            self.load(url, function() {
                self.removeAttr("data-include");
				$("#snb div.nav li").each(function(index, element) {
					var hrefText = $(element).find("a").attr("href");
					if (pageUrl.indexOf(hrefText) != -1){
						$(this).addClass('on');
						if ($(this).parents('li').length > 0){
							$(this).parents('li').addClass('on');
						}
					}
				});
            });
        });
    }
    includeLayout();
    /* end page inClude ***********************************/

	$('.btnLayoutR').click(function(){
		$('.content .contentScroll').removeClass('listOn').addClass('detailOn');
        /*$('.content .listArea').hide();
        $('.content .detailArea').show();
        $('.content .detailArea').css('width','calc(100% - 1.25rem)');
        $('.content .detailArea').css('float','left');
        $('.content .detailArea').css('border-left','1px solid #bbb');
        $('.content .contentScroll').css('min-width','100%');*/
    });
    $('.btnLayoutL').click(function(){
		$('.content .contentScroll').removeClass('detailOn').addClass('listOn');
        /*$('.content .detailArea').hide();
        $('.content .listArea').show();
        $('.content .listArea').css('width','calc(100% - 1.25rem)');
        $('.content .contentScroll').css('min-width','100%');*/
    });
    $('.btnLayoutP').click(function(){
		$('.content .contentScroll').removeClass('listOn').removeClass('detailOn');
        /*$('.content .detailArea').show().css('width','50%');
        $('.content .listArea').show().css('width','50%');
        $('.content .contentScroll').css('min-width','1726px');*/
    });

	/*
	.contentScroll.detailOn {min-width:100%}
	.contentScroll.detailOn .listArea {display:none;}
	.contentScroll.detailOn .detailArea {float:left;width:calc(100% - 1.25rem);border-left:1px solid #bbb;}
	.contentScroll.listOn {min-width:100%}
	.contentScroll.listOn .listArea {calc(100% - 1.25rem)}
	.contentScroll.listOn .detailArea {display:none;}
	*/
    // $(".tabNav li button").click(function () {
    //     $(".tabNav li").removeClass("on");
    //     $(this).parent("li").addClass("on");
    //     var activeTab = $(this).attr("data-name");
    //     $('.tabData').hide();
    //     $('.tData' + activeTab).show();
    // }); /* Tab */

    $(".tabNav li button").click(function () {
        $(this).parents(".tabNav").find('li').removeClass("on");
        $(this).parent("li").addClass("on");
        var activeTab = $(this).attr("data-name");
        $(this).parents('.tab').find('.tabData').hide();
        $('.tData' + activeTab).show();
    }); /* Tab */

    // codedata 행 추가
    $('.codeTable .btnCodeAdd').click(function(){
        var clone = $('.codeTable .codeData tbody tr:first').clone();
        clone.find('input').val("");
        $('.codeTable .codeData table').append(clone);
        $('.codeTable .codeData tbody tr:last td:first input').focus();
    });

    $('.listArea .listScroll tbody tr').click(function(){
        $('.listArea .listScroll tbody tr').removeClass('on');
        $(this).toggleClass('on');
    }); /* list click 이벤트 */

    /* popup ***********************************/
    $('.btnNewCode').click(function(){
        $('.popDim').show();
        $('#samplePop10').show();
    });
    $('.btnNewOperator').click(function(){
        $('.popDim').show();
        $('#samplePop11').show();
    });
    // $('.thum, .evidence').click(function(){
    //     $('.popDim').show();
    //     $('#samplePop9').show();
    // });
    $('.alertPop .pBtn button, .basicPop .pBtn button, .pclose').click(function(){
        $('.popDim, .alertDim').hide();
        $(this).parents('.alertPop, .basicPop, .bigImgPop').hide();
    });
    /* end popup ***********************************/

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

    $(".calSet input").focus(function(){
        $(".calSet").removeClass('focusOn');
        $(this).parents(".calSet").addClass('focusOn');
    });
    $(".calSet input").blur(function(){
        $(this).parents(".calSet").removeClass('focusOn');
    }); //달력 활성화비활성화

});
