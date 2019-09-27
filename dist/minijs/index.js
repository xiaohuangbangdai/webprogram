var snav;
$.ajax({
    type: 'get',
    url: 'src/json/second.json',
    dataType: 'json',
    async: false,
    success: function (res) {
        snav = res;
    }
})
var home;
$.ajax({
    type: 'get',
    url: 'src/json/home.json',
    dataType: 'json',
    async: false,
    success: function (res) {
        home = res.data;
    }
})
var detail;
$.ajax({
    async: false,
    type: 'get',
    url: 'src/json/detail.json',
    dataType: 'json',
    success: function (res) {
        detail = res;
    }
})
//导航
$(".one>li>a:gt(0)").hover(function () {
    $(this).css("color", 'white');
}, function () {
    $(this).css("color", 'gray');
});
$(".head>ul:nth-of-type(2)>li:nth-of-type(2)>a").hover(
    function () {
        $(".head>div").fadeIn(
            100, "linear"
        )
    }, function () {
        $(".head>div").fadeOut(
            100, "linear"
        )
    }
)
//二级导航栏
$(".nav input").on('focus', (function () {
    $(".nav ul:nth-of-type(2)>div").fadeIn(500, "linear")
    $(".secondnav").slideUp(100, 'linear');
})).on('blur', (function () {
    $(".nav ul:nth-of-type(2)>div").fadeOut(500, "linear")
}))

$(".nav").on('mouseenter', "ul:nth-of-type(1)>li>a", (function () {
    $(this).css("color", "blue");
    $(".nav ul:nth-of-type(2)>div").fadeOut(500, "linear")
    $(".secondnav").slideDown(300, 'linear');
    $('.secondnav>ul').eq($(this).parent().index()).css("display", "block").siblings().css("display", "none");
})).on('mouseleave', "ul:nth-of-type(1)>li>a", (function () {
    $(this).css("color", "black")
}));

$(".nav").on("mouseleave", function () {
    $(".secondnav").slideUp(300, 'linear');
})
var navimgs = document.querySelectorAll(".secondnav img");
navimgs[0].src = `${snav[0].list[0].sub[0].image}`;
navimgs[1].src = `${snav[0].list[1].sub[0].image}`;
navimgs[2].src = `${snav[0].list[1].sub[1].image}`;
navimgs[3].src = `${snav[0].list[1].sub[2].image}`;
navimgs[4].src = `${snav[0].list[1].sub[3].image}`;
navimgs[5].src = `${snav[0].list[1].sub[4].image}`;
navimgs[6].src = `${snav[0].list[2].sub[0].image}`;
navimgs[7].src = `${snav[0].list[2].sub[1].image}`;
navimgs[8].src = `${snav[0].list[3].sub[0].image}`;
navimgs[9].src = `${snav[0].list[3].sub[1].image}`;
navimgs[10].src = `${snav[0].list[3].sub[2].image}`;
navimgs[11].src = `${snav[1].list[0].ali_image}`;
navimgs[12].src = `${snav[1].list[1].ali_image}`;
navimgs[13].src = `${snav[1].list[2].ali_image}`;
navimgs[14].src = `${snav[1].list[3].ali_image}`;
navimgs[15].src = `${snav[2].list[0].sub[0].image}`;
navimgs[16].src = `${snav[2].list[1].sub[0].image}`;
navimgs[17].src = `${snav[2].list[1].sub[1].image}`;
navimgs[18].src = `${snav[2].list[1].sub[2].image}`;
navimgs[19].src = `${snav[2].list[0].sub[0].image}`;
navimgs[20].src = `${snav[2].list[0].sub[0].image}`;
navimgs[21].src = `${snav[2].list[0].sub[0].image}`;
navimgs[22].src = `${snav[3].list[0].sub[0].image}`;
navimgs[23].src = `${snav[3].list[0].sub[1].image}`;
navimgs[24].src = `${snav[3].list[1].sub[0].image}`;
navimgs[25].src = `${snav[3].list[2].sub[0].image}`;
navimgs[26].src = `${snav[3].list[2].sub[1].image}`;
navimgs[27].src = `${snav[4].list[0].sub[0].image}`;
navimgs[28].src = `${snav[4].list[0].sub[1].image}`;
//轮播
var num = 0;
$(".banner>ol>li").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
    $(".banner ul li").eq($(this).index()).fadeIn(300, 'linear').siblings().fadeOut(300, 'linear');;
});
function move() {
    if (num > $(".banner>ul>li").length - 1) {
        num = 0;
    }
    if (num < 0) {
        num = $(".banner>ul>li").length - 1;
    }
    $(".banner>ol>li").eq(num).addClass("current").siblings().removeClass("current");
    $(".banner>ul>li").eq(num).fadeIn(300, 'linear').siblings().fadeOut(300, 'linear');

}
var time;
time = setInterval(function () {
    num++;
    move();
}, 3000);
$(".banner").hover(
    function () {
        clearInterval(time);
    },
    function () {
        time = setInterval(function () {
            num++;
            move();
        }, 3000);
    }
)
//热点
$('.hot button:nth-of-type(1)').on("click", function () {
    $(".hot>ul").animate({
        left: 0,
    }, 600, 'linear')
});
$('.hot button:nth-of-type(2)').on("click", function () {
    $(".hot>ul").animate({
        left: -1218,
    }, 600, 'linear')
});
var hotarr1 = ['', "一款设计出众的随身音响", "金秋出游限时直降", '千万级DNA检测', '家装等场景使用的除甲醛超级活性碳芯', '七彩颜色随机发，为生活增添一份小小惊喜', '简约设计，德国拜尔PC箱体', '全面兼容的18W快充'];
var hotarr = ['', '出游配件一键秒杀', '自拍杆', '9.22-9.24各色DNA打折', '金秋出游活性碳芯价格直降', '金秋出游配件限时直降', '简约设计，德国拜尔PC箱体', '金秋出游优选配件限时直降'];
var hotprice = ['149', '56', '99', 499, 499, 36, 299, 58]
$(".hot ul li").hover(function () {
    $(this).find("h6").text(hotarr[$(this).index()]).css("color", "red");
    $(this).find('span').html("<button>查看详情</button>");
    $(this).css("-webkit-box-shadow", "0px 0px 8px rgb(122, 110, 110) inset");
}, function () {
    $(this).find("h6").text(hotarr1[$(this).index()]).css("color", "#666");
    $(this).find('span').text("￥" + hotprice[$(this).index()]);
    $(this).css("-webkit-box-shadow", "none")
});
$(".hot ul li ol li").hover(function () {
    $(this).siblings().css("border", "none");
    $(this).css("border", "1px solid #dbdbdb");
    $(this).parent().parent().find("img").eq($(this).index()).css("display", "block").siblings().css("display", "none");
},
    function () {
        $(this).css("border", "1px solid #dbdbdb")
    });
//专区
$('.olstyle>li').hover(function () {
    $(this).siblings().css("border", "none");
    $(this).css("border", "1px solid black");
    $(this).parent().parent().find("img").eq($(this).index()).css("display", "block").siblings().css("display", "none");
}, function () {
    $(this).css("border", "1px solid black");
})
//服饰专区
for (var i = 0; i < $('.clothes .smallli p').length; i++) {
    $('.clothes .smallli p').eq(i).text(detail.clothes[i].pp);
    $('.clothes .smallli span').eq(i).text("￥" + detail.clothes[i].price);
    $('.clothes .smallli h6').eq(i).text(detail.clothes[i].h2);
}
var clothesimgs = document.querySelectorAll(".clothes .smallli img");
for (let i in clothesimgs) {
    clothesimgs[i].src = `${detail.clothesimgs[i]}`;
}
$(".clothes .smallli").hover(function () {
    $(this).find("h6").text(detail.clothes[$(this).index() - 1].h).css("color", "red");
    $(this).find('span').html("<button>查看详情</button>");
    $(this).css("-webkit-box-shadow", "0px 0px 10px rgb(122, 110, 110) inset");
}, function () {
    $(this).find("h6").text(detail.clothes[$(this).index() - 1].h2).css("color", "#666");
    $(this).find('span').text("￥" + detail.clothes[$(this).index() - 1].price);
    $(this).css("-webkit-box-shadow", "none")
});
//箱包专区
for (var i = 0; i < $('.bag .smallli p').length; i++) {
    $('.bag .smallli p').eq(i).text(detail.bag[i].pp);
    $('.bag .smallli span').eq(i).text("￥" + detail.bag[i].price);
    $('.bag .smallli h6').eq(i).text(detail.bag[i].h2);
}
for (var i = 0; i < $('.bag .smallli img').length; i++) {
    $(".bag .smallli img").eq(i).prop("src", detail.bagimgs[i]);
}
$(".bag .smallli").hover(function () {
    $(this).find("h6").text(detail.bag[$(this).index() - 1].h).css("color", "red");
    $(this).find('span').html("<button>查看详情</button>");
    $(this).css("-webkit-box-shadow", "0px 0px 10px rgb(122, 110, 110) inset");
}, function () {
    $(this).find("h6").text(detail.bag[$(this).index() - 1].h2).css("color", "#666");
    $(this).find('span').text("￥" + detail.bag[$(this).index() - 1].price);
    $(this).css("-webkit-box-shadow", "none")
});
//手机专区
for (var i = 0; i < $('.phone .smallli p').length; i++) {
    $('.phone .smallli p').eq(i).text(detail.phone[i].pp);
    $('.phone .smallli span').eq(i).text("￥" + detail.phone[i].price);
    $('.phone .smallli h6').eq(i).text(detail.phone[i].h2);
    $('.phone .smallli a').eq(i).prop("href", `dist/html/detail.html?id=${detail.phone[i].id}`);
}
for (var i = 0; i < $('.phone .smallli img').length; i++) {
    $(".phone .smallli img").eq(i).prop("src", detail.phoneimgs[i]);
}
$(".phone .smallli").hover(function () {
    $(this).find("h6").text(detail.phone[$(this).index() - 1].h).css("color", "red");
    $(this).find('span').html("<button>查看详情</button>");
    $(this).css("-webkit-box-shadow", "0px 0px 10px rgb(122, 110, 110) inset");
}, function () {
    $(this).find("h6").text(detail.phone[$(this).index() - 1].h2).css("color", "#666");
    $(this).find('span').text("￥" + detail.phone[$(this).index() - 1].price);
    $(this).css("-webkit-box-shadow", "none")
});
//bbs论坛
for (var i = 0; i < $('.bbs .smallli p').length; i++) {
    $('.bbs .smallli p').eq(i).text(detail.bbs[i].p);
    $('.bbs .smallli span').eq(i).text(detail.bbs[i].span);
    $('.bbs .smallli h6').eq(i).text(detail.bbs[i].h6);
}
for (var i = 0; i < $('.bbs .smallli img').length; i++) {
    $(".bbs .smallli img").eq(i).prop("src", detail.bbsimgs[i]);
}









