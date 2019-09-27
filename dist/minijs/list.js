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
console.log(snav)
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


var list;
$.ajax({
    type: 'get',
    url: '../../dist/json/list.json',
    dataType: 'json',
    async: false,
    success: function (res) {
        list = res;
    }
})


var parames = location.search;
var reg = /id=([1-9]\d*)/;
var res = parames.match(reg);
var id = "id" + res[1];
var data;
for (var i in list) {
    if (i == id) {
        data = list[i];
    }
}
console.log(data)
var liststr = "";
for (var i in data) {
    liststr += `<li><div class = "imgbox"><img src = ${data[i].path}></div>
<h3>${data[i].name}</h3>
<h5>${data[i].jieshao}</h5>
<p>￥${data[i].peice}</p></li>
`
}
$(".list").html(liststr)