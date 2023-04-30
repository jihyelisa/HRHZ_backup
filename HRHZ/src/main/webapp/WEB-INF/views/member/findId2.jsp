<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<link rel="stylesheet" href="../../css/common/reset.css" />
<link rel="stylesheet" href="../../css/member/findId.css" /> 
</head>
<body>
<div class="background">
		<div class="outerWrapper">
			<div class="formContainer">
				<form class="form1" action="/signup" method="post">
					<!-- singupTitle -->
					<div class="signupTitle">
						<div>�Է��Ͻ� ������</div>
						<div>��ġ�ϴ� ���̵��Դϴ�.</div>
					</div>
						<span class="signupOrder2">
							<span class="signupOrderActive">���̵� ã��</span>
							<img src="./img/step-right-arrow.png" alt="activeImg">
							<span class="signupOrderActive">���̵� Ȯ��</span>
						</span>
						<br>
					<div class="signupText">
						<div>���̵� Ȯ�� ��, �α��� �Ǵ� ��й�ȣ ã�� ��ư�� �����ּ���.</div>
					</div>
					<div> ã�� ���̵� �Է� </div>
					<button class="nextButton2">�α���</button>
					<div class="findPasswordSection">
						<a href="#">��й�ȣ�� �����̳���?</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script
		type="text/javascript"
		src="http://code.jquery.com/jquery-3.6.4.min.js"
	></script>
</body>
</html>