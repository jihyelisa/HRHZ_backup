<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/common/reset.css">
    <link rel="stylesheet" href="../../css/admin/adminModal.css">
</head>

<body>
        <section class="sectionBackGroundBrand">
        <div class="modalBody1">
            <div class="brandFilter">
                <div class="brandFilterSearchDiv">
                    <img class="searchIcon" src="../../images/common/search_btn.png" alt="search icon" />
                    <input type="text" placeholder="브랜드명을 입력해 주세요" id="brandInput" />
                    <img class="modalCloseBtn" src="../../images/main/modal_close_btn.png" alt="closing icon" />
                </div>
                <ul class="brandSearch1">
                    <li class="brandContainer">
                        <div class="radios">
                            <input class="radio" type="radio" name="radio">
                            <img class="uncheck" src="../../images/purchase/uncheck_round_icon.png" alt="image">
                            <img class="check" src="../../images/purchase/check_round_purple_icon.png" alt="image">
                        </div>
                        <img class="brandImg" src="../../images/member/black.jpg" alt="images">
                        <span>브랜드명</span>
                    </li>
                    <li class="brandContainer">
                        <div class="radios">
                            <input class="radio" type="radio" name="radio">
                            <img class="uncheck" src="../../images/purchase/uncheck_round_icon.png" alt="image">
                            <img class="check" src="../../images/purchase/check_round_purple_icon.png" alt="image">
                        </div>
                        <img class="brandImg" src="../../images/member/black.jpg" alt="images">
                        <span>브랜드명</span>
                    </li>
                    <li class="brandContainer">
                        <div class="radios">
                            <input class="radio" type="radio" name="radio">
                            <img class="uncheck" src="../../images/purchase/uncheck_round_icon.png" alt="image">
                            <img class="check" src="../../images/purchase/check_round_purple_icon.png" alt="image">
                        </div>
                        <img class="brandImg" src="../../images/member/black.jpg" alt="images">
                        <span>브랜드명</span>
                    </li>
                    <li class="brandContainer">
                        <div class="radios">
                            <input class="radio" type="radio" name="radio">
                            <img class="uncheck" src="../../images/purchase/uncheck_round_icon.png" alt="image">
                            <img class="check" src="../../images/purchase/check_round_purple_icon.png" alt="image">
                        </div>
                        <img class="brandImg" src="../../images/member/black.jpg" alt="images">
                        <span>브랜드명</span>
                    </li>
                </ul>
                <button class="brandSelect">브랜드 선택</button>
            </div>
        </div>
    </section>
    
    <script type="text/javascript" src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
	<script src="text/javascript" src="../../js/admin/admin.js"></script>
</body>
</html>