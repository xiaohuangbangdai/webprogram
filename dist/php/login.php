<?php
header("content-type:text/html;charset=utf8");
    $uname = $_POST["uname"];
    $pass = $_POST["pass"];
    $con = mysqli_connect("localhost","root","root","test");
    mysqli_query($con,"set names utf8");
    $sql = "select * from shopping where username='".$uname."' and password='$pass'";
    $res = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($res);
    if($row){
        $arr = [
            "status"=>1,
            "msg"=>"登陆成功"
        ];
        $str = json_encode($arr);
        echo $str; 
    }else{
        $arr = [
            "status"=>2,
            "msg"=>"登陆失败"
        ];
        $str = json_encode($arr);
        echo $str;
    }

