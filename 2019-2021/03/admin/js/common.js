
function lToggle(){
	$(".swichToggle").click(function(){
		$(this).next('.toggleTarget').toggle();
	});
}

$( document ).ready( function() {

	/* start Device 대응 사전 정의 ***********************************/
	var isMobile = function () {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	};
	if (isMobile()){}
	var isMobile2 = function () {
		//return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		return /Android/i.test(navigator.userAgent);
	};
	if (isMobile2()){
		$('body').addClass('androidCase');
	} else {
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
	/* start Layout Slide & Push ***********************************/

	/* GNB 공통*/
	/* Full팝업 영역*/
	/* end Layout Slide & Push ***********************************/

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

	/* GNB & SNB inClude / menu Toggle ***********************************/
	var pageUrl = location.href;
	function menuToggle(){
		if (pageUrl.indexOf("/pubGuide/main") != -1){
			$("#snb div.back").hide();
		} else if (pageUrl.indexOf("/pubGuide/") != -1){
			$("#snb div.back").hide();
			if (pageUrl.indexOf("/pubGuide/guide_") != -1){
				$("#snb div.back.smnG1").show();
				$("#header .ggnb1").addClass('on');
			} else if (pageUrl.indexOf("/pubGuide/library_") != -1){
				$("#snb div.back.smnG2").show();
				$("#header .ggnb2").addClass('on');
			} else if (pageUrl.indexOf("/pubGuide/wa_") != -1){
				$("#snb div.back.smnG3").show();
				$("#header .ggnb3").addClass('on');
			} else if (pageUrl.indexOf("/pubGuide/management_") != -1){
				$("#snb div.back.smnG4").show();
				$("#header .ggnb4").addClass('on');
			}
		} else if (pageUrl.indexOf("/management/") != -1){
			$("#snb div.back").hide();
			if (pageUrl.indexOf("biz_") != -1){
				$("#snb div.back.smnM1").show();
				$("#header .mgnb1").addClass('on');
			} else if (pageUrl.indexOf("project_") != -1){
				$("#snb div.back.smnM2").show();
				$("#header .mgnb2").addClass('on');
			}  else if (pageUrl.indexOf("board_") != -1){
				$("#snb div.back.smnM3").show();
				$("#header .mgnb3").addClass('on');
			} else if (pageUrl.indexOf("app_") != -1){
				$("#snb div.back.smnM4").show();
				$("#header .mgnb4").addClass('on');
			} else if (pageUrl.indexOf("task_") != -1){
				$("#snb div.back.smnM5").show();
				$("#header .mgnb5").addClass('on');
			}else if (pageUrl.indexOf("system_") != -1){
				$("#snb div.back.smnM6").show();
				$("#header .mgnb6").addClass('on');
			}else if (pageUrl.indexOf("appr_") != -1){
				$("#snb div.back.smnM7").show();
				$("#header .mgnb7").addClass('on');
			}
		} else if (pageUrl.indexOf("/plan/") != -1){
			$("#snb div.back").hide();
			if (pageUrl.indexOf("plan_") != -1){
				$("#snb div.back.smnP1").show();
				$("#header .pgnb1").addClass('on');
			} else if (pageUrl.indexOf("managing_") != -1){
				$("#snb div.back.smnP2").show();
				$("#header .pgnb2").addClass('on');
			} else if (pageUrl.indexOf("output_") != -1){
				$("#snb div.back.smnP3").show();
				$("#header .pgnb3").addClass('on');
			}
		} else if (pageUrl.indexOf("/project") != -1){
			//$("#header nav").hide();
		} else if (pageUrl.indexOf("/homepage/") != -1){
			$("#snb div.back").hide();
			if (pageUrl.indexOf("homepage_") != -1){
				$("#snb div.back.smnH1").show();
				$("#header .hgnb1").addClass('on');
			}
		}else if (pageUrl.indexOf("/video/") != -1){
			if (pageUrl.indexOf("video_main") != -1){
				$("#header .vgnb1").addClass('on');
			} else if (pageUrl.indexOf("video_user") != -1){
				$("#header .vgnb2").addClass('on');
			}
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
				$("#projectGo").on("change", function(){
					if($(this).find("option:selected").val() == 1){
						window.location.href = 'project.html';
					}else if($(this).find("option:selected").val() == 2){
						window.location.href = 'project2.html';
					}else if($(this).find("option:selected").val() == 3){
						window.location.href = 'project3.html';
					}
				});
				$("#partGo").on("change", function(){
					if($(this).find("option:selected").val() == 0){
						window.location.href = 'project.html';
					}else if($(this).find("option:selected").val() == 1){
						window.open('../main.html', '_blank');
					}else if($(this).find("option:selected").val() == 2){
						window.location.href = '../pubGuide/guide_policy.html';
					}else if($(this).find("option:selected").val() == 3){
						window.location.href = '../management/biz_user.html';
					}else if($(this).find("option:selected").val() == 4){
						window.location.href = '../plan/plan_proposal.html';
					}else if($(this).find("option:selected").val() == 5){
						window.location.href = '../project/project_main.html';
					}else if($(this).find("option:selected").val() == 6){
						window.location.href = '../homepage/homepage_default.html';
					}else if($(this).find("option:selected").val() == 7){
						window.location.href = '../video/video_main.html';
					}
				});
				$("#partGo2").on("change", function(){
					if($(this).find("option:selected").val() == 0){
						window.location.href = 'project.html';
					}else if($(this).find("option:selected").val() == 1){
						window.open('../main.html', '_blank');
					}else if($(this).find("option:selected").val() == 2){
						window.location.href = 'pubGuide/guide_policy.html';
					}else if($(this).find("option:selected").val() == 3){
						window.location.href = 'management/biz_user.html';
					}else if($(this).find("option:selected").val() == 4){
						window.location.href = 'plan/plan_proposal.html';
					}else if($(this).find("option:selected").val() == 5){
						window.location.href = 'project/project_main.html';
					}else if($(this).find("option:selected").val() == 6){
						window.location.href = 'homepage/homepage_default.html';
					}else if($(this).find("option:selected").val() == 7){
						window.location.href = 'video/video_main.html';
					}
				});
				$("#snb div.back li").each(function(index, element) {
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
	/* ebd GNB & SNB inClude / menu Toggle ***********************************/
	lToggle();


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
	$(function(){
		$("iframe.viewIframe").load(function(){ //iframe 컨텐츠가 로드 된 후에 호출됩니다.
			var frame = $(this).get(0);
			var doc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;
			$(this).height(doc.body.scrollHeight);
			//$(this).width(doc.body.scrollWidth);
		});
	});



});
