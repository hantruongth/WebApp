<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<title>Add New Contact</title>
<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="resources/js/script.js"></script>
</head>
<body>
	<table id="tbl_products">
		<thead>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${products}" var="product">
				<tr>
					<td><c:out value="${product.id}" /></td>
					<td><c:out value="${product.name}" /></td>
					<td><c:out value="${product.price}" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>


	<fieldset>
		<div>
			<label for="id">Id</label> <input type="text" id="product_id"
				readonly="readonly" placeholder="Id" />
		</div>
		<div>
			<label for="name">Name</label> <input type="text" id="product_name"
				placeholder="Name" />
		</div>
		<div>
			<label for="price">Price</label> <input type="text" id="product_price"
				placeholder="Price" />
		</div>

		<div>
			<input id="btn_add" type="submit" value="Submit" />
		</div>
	</fieldset>
</body>
</html>