<%--
  Created by IntelliJ IDEA.
  User: ThinkPad
  Date: 2020/6/28
  Time: 17:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="${pageContext.request.contextPath}/student/login" method="post">
    <input type="text" name="stuAccount" />
    <input type="text" name="stuPwd" />
    <input type="submit" value="提交"/>
</form>
</body>
</html>
