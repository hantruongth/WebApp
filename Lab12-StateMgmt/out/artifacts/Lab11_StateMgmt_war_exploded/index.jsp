<%@ page import="com.wap.state.management.Constants" %>
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
      fieldset{
        width: 400px;
        display: inline;
      }
    </style>
  </head>
  <body>
  <div id="form">

    <% String error = request.getAttribute("errorMsg") != null ? request.getAttribute("errorMsg").toString() : "" ;%>
    <%
      String username = "";
      String remember = "";
      Cookie[] cookies = request.getCookies();
      for (Cookie cookie: cookies) {
        if(cookie.getName().equals(Constants.COOKIES_NAME) && !cookie.getValue().isEmpty()) {
          username = cookie.getValue();
          remember = "checked";
        }
      }

    %>

    <form method="post" action="/login">
      <fieldset>
        <legend>Login information</legend>
        Username <input type="text" name="usernameTxt" required value="<%=username%>"/><br/>
        Password <input type="password" name="passwordTxt" required/><br/>
        <label><input type="checkbox" name="rememberBtn" <%=remember%> /> Remember me</label> <br/>
        <input type="submit" value="Login"/><br/>
        <span style="color:red;"><%=error%></span>
      </fieldset>
    </form>
  </div>
  </body>
</html>
