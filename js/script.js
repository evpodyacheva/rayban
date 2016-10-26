//счетчик
var today = new Date();

var future_date = new Date(today.getTime() + 24 * 60 * 60 * 1000);

var future_date = new Date(future_date.getFullYear(), future_date.getMonth(), future_date.getDate(), 0, 0, 0);

function GetCount() {
    dateNow = new Date();
    amount = future_date.getTime() - dateNow.getTime();
    delete dateNow;
    if (amount < 0) {
        $('.timer .days').html('00');
        $('.timer .hours').html('00');
        $('.timer .minutes').html('00');
        $('.timer .seconds').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        days = Math.floor(amount / 86400);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        if(hours < 10) hours = '0'+hours;
        if(mins < 10) mins = '0'+mins;
        if(secs < 10) secs = '0'+secs;

        $('.timer .days').html(days);
        $('.timer .hours').html(hours);
        $('.timer .minutes').html(mins);
        $('.timer .seconds').html(secs);
        setTimeout("GetCount()", 1000);
    }
}

$(document).ready(function(){
    GetCount();

    //загрузка
    $('.ico-load').fadeOut('fast');
    $('.pageWrap').fadeIn('fast');

    //слайдер в шапке
    $('.header-gallery__slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 4000,
        controls:false
    });

    //слайдеры в форме
    $('.form-slider').bxSlider({
        pagerCustom: '#bx-pager',
        mode: 'fade',
        onSlideBefore: function($slideElement, oldIndex, newIndex){
            $("input[name='model']").val($slideElement.data("model"));
            $("ul.params li").each(
                function(){
                    var spanList = $(this).find("span");
                    spanList.removeClass("active");
                    $(spanList[newIndex]).addClass("active")
                }
            );
        }
    });

    $('.form-slider-md').bxSlider({
        mode: 'fade',
        onSlideBefore: function($slideElement, oldIndex, newIndex){
            $("input[name='model']").val($slideElement.data("model"));
            $("ul.params--sm li").each(
                function(){
                    var spanList = $(this).find("span");
                    spanList.removeClass("active");
                    $(spanList[newIndex]).addClass("active")
                }
            );
        }
    });

    //ширина аккордеона
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });

    //плавный скролл
    $("a.ancLinks").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate( { scrollTop: destination }, 1100 );
        return false;
    });

    

    //ANIMATE detail__list-item
    console.log($(window).width());
    if ($(window).width() >= '768') {
        $('.detail__list-item:not(:first)').viewportChecker({
            classToAdd: 'animate-visible visible animated rollIn',
            offset: 150
        });
    }

    else {
        $('.detail__list-item:not(:first)').viewportChecker({
            classToAdd: 'animate-visible',
            classToRemove: 'animate-visible visible',
            offset: 0
        });
    }

    //TABS
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });

    $(".models__btn").click(
        function(){
            var index = $(this).data("id");

            var tabs = $("ul.tabs__caption li");
            var accordionTabs = $(".accordion__content");

            tabs.removeClass("active");
            accordionTabs.hide();

            $(tabs[index]).addClass("active");
            $(accordionTabs[index]).show();

            var tabsContent = $(".tabs__content");
            tabsContent.removeClass("active");
            $(tabsContent[index]).addClass("active")
        }
    );

    //Форма
    var init_index = $(".pagination-img a.active").data("slide-index");
    var li = $("ul.bxslider2 li");
    var selectSize = $(".order__form-item--select");
    $("input[name='model']").val($(li[init_index]).data("model"));

    $(".tabs__caption li:not(:first-child)").click(function(){
        $("input[name='model']").val($(this).data("model"));
        selectSize.css({"display" : "none"});
    });

    $(".tabs__caption li:first-child").click(function(){
        var init_index = $(".pagination-img a.active").data("slide-index");
        var li = $("ul.bxslider2 li");
        $("input[name='model']").val($(li[init_index]).data("model"));
        selectSize.css({"display" : "block"});
    });

    $(".accordion__title:not(:first-child)").click(function(){
        $("input[name='model']").val($(this).data("model"));
        selectSize.css({"display" : "none"});
    });

    $(".accordion__title:first-child").click(function(){
        $("input[name='model']").val($(".bxslider3 li[aria-hidden='false']").data("model"));
        selectSize.css({"display" : "block"});
    });

    $(".btn--aviat").click(function(){
        $("input[name='model']").val("wayfarer-rb-2132-901");
    });

    $(".btn--way").click(function(){
        $("input[name='model']").val("wayfarer-rb-2132-901");
    });

    $(".btn--club").click(function(){
        $("input[name='model']").val("clubmaster-rb-3016-w0365");
    });

    $('.footer__polit-link').click(function () {
        $('.polit').fadeIn('slow');
    });

    //политика конфиденциальности
    $('.polit').click(function () {
        $('.polit').fadeOut('slow');
    });
});



