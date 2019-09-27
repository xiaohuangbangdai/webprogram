<?php
header("content-type:text/html;charset=utf8");
echo "<pre>";
$con = mysqli_connect("localhost","root","root","test");
$res1 =mysqli_query($con,"select * from shopping where username='$_POST[username]'");
$row1 = mysqli_fetch_assoc($res1);
if($row1>0){
    echo '<script> 
    alert("用户名已经存在！");
     location.href="../html/region.html";
    </script>'; 
}else{
    $res = mysqli_query($con,"insert into shopping(username,password,email,phone) values('".$_POST['username']."','".$_POST['password']."','".$_POST['email']."',".$_POST['phone'].")");
    if($res){
        echo "<script>
        alert('注册成功');
        location.href = '../html/login.html';
        </script>";
    }else{
        echo '<script> 
        alert("写入失败，请重新注册");
         location.href="../html/region.html";
        </script>';
    }

}
