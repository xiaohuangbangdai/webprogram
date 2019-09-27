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

var detail;
$.ajax({
    async: false,
    type: 'get',
    url: '../../dist/json/detail.json',
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
// 二级导航栏



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





//生成页面
function loadpage() {
    var str = localStorage.getItem("data");
    var arr = JSON.parse(str);
    var html = '';
    for (var i = 0; i < arr.length; i++) {
        html += `
            <li class = "detailli">
                <input type="checkbox" class="checkOne">
                <img src="${arr[i].imgpath[0]}" width="100" height="100">
                <div class="info">
                    <span style="float:left">${arr[i].name}</span>
                    <b><strong>${arr[i].price}</strong></b>
                </div>
                <div class="number">
                    <button class="cut">-</button>
                    <input type="text" class="num" value="${arr[i].number}">
                    <input type="hidden" name="kucun" value="${arr[i].max}">
                    <button class="add">+</button>
                </div>
                <div class="xiaoji">￥<span class="xiaojiNum">${(arr[i].number * arr[i].price).toFixed(2)}</span></div>
                <button class="remove" data-id="${arr[i].id}">×</button>
            </li>
    `

    }
    $(".detailul").html(html);
    curAdd();
    checkOneClick();
}
loadpage();

function checkOneClick() {
    $(".checkOne").click(function () {
        var arr = Array.prototype.slice.call($(".checkOne"));
        var res = arr.every(function (v) {

            if ($(v).prop("checked")) {
                return true;
            }
        });

        if (res) {
            $(".checkAll").prop("checked", true);
        } else {
            $(".checkAll").prop("checked", false);
        }
        countall()
    });
}

$(".checkAll").click(function () {
    var c = $(this).prop("checked");
    if (c) {
        $(".checkOne").prop("checked", true);
        $(".checkAll").prop("checked", true);
    } else {
        $(".checkOne").prop("checked", false);
        $(".checkAll").prop("checked", false);
    }
    countall();
});



function countxiaoji() {
    $(".xiaojiNum").each(function (k, v) {
        var num = $(this).parent().siblings(".number").find(".num").val() - 0;
        var price = parseFloat($(this).parent().siblings(".info").find("strong").text()).toFixed(2);
        $(this).text(price * num);
    });
}



function countall() {
    var Allshopnum = 0;
    var Allshopcount = 0;
    $(".checkOne:checked").each(function (k, v) {
        Allshopnum += ($(this)).siblings(".number").children(".num").val() - 0;

        Allshopcount += $(v).siblings(".xiaoji").find("span").text() - 0
    });
    $(".numberCount").text(Allshopnum);
    $(".priceCount").text(Allshopcount.toFixed(2));
}


function curAdd() {
    $(".number").click(function (e) {
        var target = e.target;
        if (target.className == "cut") {
            if ($(this).find(".num").val() - 0 - 1 <= 1) {
                var num = 1;
            } else {
                var num = $(this).find(".num").val() - 0 - 1;
            }
            $(this).find(".num").val(num);
        }
        if (target.className == 'add') {
            if ($(this).find(".num").val() - 0 + 1 >= $(this).find("[name='kucun']").val() - 0) {
                var num = $(this).find("[name='kucun']").val() - 0;
            } else {
                var num = $(this).find(".num").val() - 0 + 1;
            }
            $(this).find(".num").val(num);
        }
        countxiaoji();
        repleace();
        countall();
    });
}

// 删除功能，完善
$(".remove").each(function () {
    $(this).click(function () {
        var arr = JSON.parse(localStorage.getItem("data"));
        var id = $(this).attr("data-id");
        var key;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                key = i;
            }
        }
        arr.splice(key, 1)
        localStorage.setItem("data", JSON.stringify(arr));
        loadpage()
    });
});




//
function repleace() {
    var str = localStorage.getItem("data");
    var arr = JSON.parse(str);
    for (var i = 0; i < arr.length; i++) {
        $(".remove").each(function (i, v) {
            if (arr[i].id == $(v).attr("data-id")) {
                arr[i].number = $(v).siblings(".number").children(".num").val() - 0;
            }
        });
    }

    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(arr));

}



$(".num").blur(function () {
    if ($(this).prop("value") >= $(this).parent().find("[name='kucun']").val()) {
        $(this).prop("value", `${$(this).parent().find("[name='kucun']").val()}`);
    }
    if ($(this).prop("value") <= 1) {
        $(this).prop("value", 1);
    }
    repleace();
})




$('.olstyle>li').hover(function () {
    $(this).siblings().css("border", "none");
    $(this).css("border", "1px solid black");
    $(this).parent().parent().find("img").eq($(this).index()).css("display", "block").siblings().css("display", "none");
}, function () {
    $(this).css("border", "1px solid black");
})
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


$(".jiesuan").click(function () {
    alert("结算成功!即将为您跳转主页")
    localStorage.clear();
    location.href = "../../index.html";

})