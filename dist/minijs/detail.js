var snav;
$.ajax({
    type: 'get',
    url: '../../dist/json/second.json',
    dataType: 'json',
    async: false,
    success: function (res) {
        snav = res;
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



var parames = location.search;
var reg = /id=([1-9]\d*)/;
var res = parames.match(reg);
var id = "id" + res[1];
var data;
for (var i in shop) {
    if (i == id) {
        data = shop[i];
    }
}
for (var i = 0; i < $(".shopminiimg img").length; i++) {
    $(".shopminiimg img").eq(i).prop("src", data.imgpath[i]);
}

var pcolor = "";
for (var i in data.color) {
    pcolor += `<p style='background: ${data.color[i]}'></p>`
}
$(".color").html("选颜色" + pcolor);
$(".name h1").text(data.name);
$(".name>p>span").text(data.jieshao);
$(".name>p>b").css("color", "red").text(data.price).css("font-size", "20px");
$(".cuxiao>span").text(data.cuxiao);

//详情信息

var str = "";
for (var i in data.message) {
    str += `<img src = "${data.message[i]}" width = 1220px>`;
}
$(".message").html(str);




//选项卡
$(".shopminiimg>li").click(function () {
    $(this).addClass("shopon").siblings().removeClass("shopon");
    var src = ($(this).find("img").prop("src"));
    $(".mimg").prop("src", src);
    $(".bigimg").css("background-image", `url("${src}")`)
})


//放大镜
$(".midleimg").hover(function () {
    $(".shadow").css("display", "block");
    $(".bigimg").css("display", "block");
}, function () {
    $(".shadow").css("display", "none");
    $(".bigimg").css("display", "none");
});


var bigimgpath = $(".shopminiimg img").eq(0).prop("src");
$(".midleimg img").prop("src", `${bigimgpath}`);
$(".bigimg").css("background-image", `url("${bigimgpath}")`)


$(".midleimg").on("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var boxheight = $(this).height();
    var boxwidth = $(this).width();
    var left = $(this).offset().left;
    var top = $(this).offset().top;

    if (x > left + boxwidth - 40) {
        x = left + boxwidth - 40 - 8;
    }
    if (x < left + 40) {
        x = left + 40;
    }

    if (y < top + 40) {
        y = top + 40;
    }
    if (y > top + boxheight - 40) {
        y = top + boxheight - 40 - 8;
    }

    $(".shadow").css("left", `${x - left - 40}px`);
    $(".shadow").css("top", `${y - top - 40}px`);
    var xp = parseInt($(".shadow").css("left")) / 360;
    var yp = parseInt($(".shadow").css("top")) / 360;
    $(".bigimg").css("background-position", `${-xp * 1440}px ${-yp * 1440}px`);
})

//选数量

var num = 1;
$(".add").click(function () {

    num += 1;
    if (num >= data.max) {
        num = data.max;
    }
    $(".num").prop("value", num);
})
$(".cut").click(function () {
    num -= 1;
    if (num <= 1) {
        num = 1;
    }
    $(".num").prop("value", num);
})
$(".num").blur(function () {
    if ($(".num").prop("value") >= data.max) {
        $(".num").prop("value", data.max);
    }
    if ($(".num").prop("value") <= 1) {
        $(".num").prop("value", 1);
    }
})
$(".intocar").click(function () {
    var u = getCookie("username");
    if (u == undefined) {
        location.href = "../html/login.html";
    } else {
        data.number = $(".num").prop("value");
        var res = localStorage.getItem("data");
        var arr = JSON.parse(res);
        if (!arr) {
            arr = [];
        } else {
            for (var i in arr) {
                if (arr[i].id == data.id) {
                    arr[i].number = parseInt(arr[i].number) + parseInt(data.number);
                    if (arr[i].number < arr[i].max) {
                        arr[i].number = JSON.stringify(arr[i].number);
                        res = JSON.stringify(arr);
                        localStorage.setItem("data", res);
                        alert("加入购物车成功");
                        return false;
                    } else {
                        arr[i].number = arr[i].max
                        res = JSON.stringify(arr);
                        localStorage.setItem("data", res);
                        alert("您已经达到最大添加数量无法继续添加");
                        return false;
                    }
                }
            }
        }
        arr.push(data);
        res = JSON.stringify(arr);
        localStorage.setItem("data", res);
        alert("加入购物车成功");
    }
})



