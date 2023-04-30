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
					<div class="signupTitle">�޴��� ��ȣ ����</div>
						<span class="signupOrder">
							<span class="signupOrderActive">���̵� ã��</span>
							<img src="./img/step-right-arrow.png" alt="activeImg">
							<span class="signupOrderInactive">���̵� Ȯ��</span>
						</span>
							<br>

					<div class="signupText">
						<div>�����Ͻ� �޴��� ��ȣ��</div>
						<div>������ȣ�� �����帳�ϴ�.</div>
					</div>

					<!-- �޴��� ��ȣ, ������ȣ -->
					<div class="inputContainer">
						<label for="phone">�޴��� ��ȣ</label>
						<input type="tel" class="phone" maxlength="11" required>
						<button class="certification">������ȣ ����</button>
						<span class="underline"></span>
					</div>
					<div class="phoneError"></div>

					<div class="inputContainer">
						<label for="authentication">������ȣ</label>
						<input type="text" class="authentication" maxlength="6" required>
						<img src="./img/valid-input-check-icon.png" alt="image" class="authenticationValidIcon">
						<span class="underline"></span>
					</div>
					<div class="authenticationError"></div>

					<button class="nextButton">����</button>
				</form>
			</div>
		</div>
	</div>
	<script
		type="text/javascript"
		src="http://code.jquery.com/jquery-3.6.4.min.js"
	></script>
	<script src="findId.js"> </script>
</body>
</html>