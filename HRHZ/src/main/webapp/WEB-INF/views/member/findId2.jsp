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
						<div>입력하신 정보와</div>
						<div>일치하는 아이디입니다.</div>
					</div>
						<span class="signupOrder2">
							<span class="signupOrderActive">아이디 찾기</span>
							<img src="./img/step-right-arrow.png" alt="activeImg">
							<span class="signupOrderActive">아이디 확인</span>
						</span>
						<br>
					<div class="signupText">
						<div>아이디 확인 후, 로그인 또는 비밀번호 찾기 버튼을 눌러주세요.</div>
					</div>
					<div> 찾은 아이디값 입력 </div>
					<button class="nextButton2">로그인</button>
					<div class="findPasswordSection">
						<a href="#">비밀번호를 잊으셨나요?</a>
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