// function tip(){
//                    //点击走你触发进度提示
//                 //    document.getElementById("tip").style.visibility="visible";
//                 alert("快点写功能，人家不想再弹出来了");
//                }

// function qiehuan(){
//     //登陆注册面板切换
//    var loginBox = document.getElementById("logInBox");
//     var registerBox = document.getElementById("registerBox");
//     loginBox.querySelector('a').on('click',function(){
//         alert("huoqudaolebingchufalefangfa");
//     });
// }

//页面切换
$(function(){
    var loginBox = $('#logInBox');
    var registerBox = $('#registerBox');

    loginBox.find('a').on('click',function(){
         registerBox.show();
         loginBox.hide();
    });

    registerBox.find('a').on('click',function(){
         loginBox.show();
         registerBox.hide();
         
    });
//点击注册
    registerBox.find('button').on('click',function(){
         //通过ajax提交请求
         $.ajax({
             type: 'post',
             url: '/api/user/register',
             data: {
                 uusername: registerBox.find('[name="username"]').val(),
                 password: registerBox.find('[name="password"]').val(),
                 repassword: registerBox.find('[name="repassword"]').val()
             },
             dataType: 'json',
             success: function(result){
                 console.log(result);
             }
            // fail: function(){
            //     console.log("result");
            // }
         });
         //先改用一般的js获取数据？？
         
    })
});