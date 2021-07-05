var $checklist = $('#CheckList');

function login()
{

  let $pass =  $('#pass').val();
  let $user = $('#uname').val();
  console.log(  $user );
  $.ajax({
    type: "GET",
    url: "../JSON/users.json",
    data: "data",
    dataType: "json",
    success: function (userInfo) {
      $checklist.empty();
      var uname = userInfo.userName;
      var upass = userInfo.password;
      if( $user.toLowerCase() == uname.toLowerCase() && $pass==upass)
      { 
        window.location.replace('../html/Home.html');
      }
      else
      {
        if($user=="")
        {
          $checklist.append('<li>User Name Is Requierd</li>');
        }
        if($pass=="")
        {
          $checklist.append('<li>Password Is Requierd</li>');
        }
        if($user !="" && $pass !="")
        {
          if(uname.toLowerCase != $user || upass != $password)
          {
            $checklist.append('<li>Your User Name or Password is incorrect</li>');
          }
        }
      }
      
    }
  });
}
