<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<html>
<head>
    <title>nishi</title>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script>
        $(document).ready(function () {
            alert("aaaaa")
        })
    </script>
</head>
<body>
<h2>Hello World!</h2>
<a href="account/findAll">测试</a>
<h3>测试11</h3>
<form action="account/save" method="post">
    姓名：<input type="text" name="name">
    姓名：<input type="text" name="money">
    <input type="submit" value="保存">
</form>
</body>
</html>
