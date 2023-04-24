<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>cart</title>
        <link rel="stylesheet" href="../../css/common/reset.css" />
        <link rel="stylesheet"  href="../../css/common/style.css" />
        <link rel="stylesheet" href="../../css/common/header_footer.css" />
        <link rel="stylesheet" href="../../css/main/magazine.css" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=swap" rel="stylesheet" />
    </head>
    <body>
        <%@ include file="/WEB-INF/views/common/header.jsp" %>
        <main>
            <section class="magazineTotalPage">
                <div class="magazineOuterWrapper">
                        <div class="topTitleText">
                            <h3>바이시클 트로피의 새로운 영감</h3>
                            <img class="productShareImg" src="../../images/main/product_share_btn.png"/>
                        </div>
                        <div>
                            <p class="topTitleSecondText">UP TO 20% + 20% COUPON</p>
                        </div>
                        <div class="magazineSection">
                            <img class="magazineImg" src="../../images/main/bicycle.jpeg">
                            <img class="magazineImg" src="../../images/main/bicycle1.jpeg">
                            <img class="magazineImg" src="../../images/main/bicycle2.jpeg">                            
                        </div>
                    
                </div>

            </section>
		</main>
		 <%@ include file="/WEB-INF/views/common/footer.jsp" %>
    </body>
</html>