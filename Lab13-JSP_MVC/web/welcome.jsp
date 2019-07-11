<%@ page import="com.wap.jsp.User" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
<% User user = (User) request.getSession().getAttribute("user"); %>
<h1>Welcome <%=user.getUsername()%> !</h1>
<a href="/logout">Logout</a>
</body>
</html>
