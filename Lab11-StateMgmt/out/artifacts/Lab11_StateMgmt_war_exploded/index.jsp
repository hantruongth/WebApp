<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Login Form</title>
    <style>
      #form{
        width: 800px;
        margin:auto;
        text-align: center;
        font-size: 14pt;
      }
      input{
        margin-bottom: 10px;
        font-size: 14pt;
      }
    </style>
  </head>
  <body>
  <div id="form">
    <form method="post" action="/login">
      Username <input type="text" name="usernameTxt" /><br/>
      Password <input type="password" name="passwordTxt" /><br/>
      <input type="submit" value="Login"/>
    </form>
  </div>
  </body>
</html>
