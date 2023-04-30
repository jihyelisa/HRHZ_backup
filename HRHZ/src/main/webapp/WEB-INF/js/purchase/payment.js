//selectBox function
$(".dropDownCoverSelector").on("click", function (event) {
    $(".dropDownList").css("display", "block");
});

$(".dropDownList").on("click", function (event) {
    $(".dropDownList").css("display", "none");
});

$(".dropDownListPlain li").on("click", function (event) {
    $(".dropDownSelect span").text($(this).text());
    $(".dropDownList").css("display", "none");
});

//-----------------------------------
// product
$(function () {
    // var list = [];
    // var list2 = [];
    // var listData1 = { optionCode: "D00000179", productCount: 1 };
    // var listData2 = { optionCode: "D00000180", productCount: 0 };
    // var listData3 = { optionCode: "D00000181", productCount: 1 };
    // var listData4 = { optionCode: "D00000182", productCount: 0 };
    // var listData5 = { optionCode: "D00000183", productCount: 0 };
    // var listData6 = { optionCode: "D00000184", productCount: 0 };
    // list.push(listData1);
    // list.push(listData2);
    // list.push(listData3);
    // list.push(listData4);
    // list.push(listData5);
    // list.push(listData6);
    //
    // var listData21 = { optionCode: "D00000023", productCount: 2 };
    // var listData22 = { optionCode: "D00000024", productCount: 0 };
    // var listData23 = { optionCode: "D00000025", productCount: 0 };
    // var listData24 = { optionCode: "D00000026", productCount: 0 };
    // var listData25 = { optionCode: "D00000027", productCount: 0 };
    // var listData26 = { optionCode: "D00000028", productCount: 0 };
    // list2.push(listData21);
    // list2.push(listData22);
    // list2.push(listData23);
    // list2.push(listData24);
    // list2.push(listData25);
    // list2.push(listData26);
    // var jsonList = JSON.stringify({ P00000072: list, P00000020: list2 });
    // let jsonList = $('div.jsonList').text();

    // key
    let productList = $('.productCode').val();

    // String > list type conversion
    // value
    var jsonSting = $('.jsonList').val();
    var jsonObj = $.parseJSON(jsonSting);

    let obj = {};
    obj[productList] = jsonObj;

    let jsonStr = JSON.stringify(obj);

    $.ajax({
        contentType: "application/json",
        type: "post",
        url: "/purchase/getPaymentInfo",
        traditional: true,
        data: jsonStr,
        success: function (data) {
            let headName = [];
            let totalPrice = 0;

            $.each(data, function (index, items) {
                let thead = "";
                let tbody = "";
                let tfoot = "";
                let productSum = 0;

                let brandName = items.brandName;

                // brand remove duplicate
                if (headName.indexOf(brandName) === -1) {
                    thead =
                        "<table class='payProductTable'>" +
                        "<thead>" +
                        "<tr>" +
                        "<th class='storeName'>" +
                        brandName +
                        "</th>" +
                        "<th class='count'>수량</th>" +
                        "<th class='benefit'>할인혜택</th>" +
                        "<th class='price'>주문금액</th>" +
                        "</tr>" +
                        "</thead>" +
                        "<tbody>";
                    $.each(data, function (index, items) {
                        if (brandName === items.brandName) {
                            tbody +=
                                "<tr>" +
                                "<td class='productInfoBox'>" +
                                "<div class='productInfoImgBox'>" +
                                "<span class='productImg'>" +
                                "<img src='/storage/" +
                                items.imgPath +
                                "' />" +
                                "</span>" +
                                "</div>" +
                                "<div class='productInfo'>" +
                                "<div class='productName'>" +
                                items.productName +
                                "</div>" +
                                "<div class='productOption'>" +
                                items.detailType +
                                " : " +
                                items.optionName +
                                "</div>" +
                                "<div class='productCountAndPrice'>" +
                                "<span class='productPrice'>" +
                                "<span class='amount'>" +
                                items.productPrice.toLocaleString() +
                                "</span>" +
                                "<span class='unit'>" +
                                "원" +
                                "</span>" +
                                "</span>" +
                                "</div>" +
                                "</div>" +
                                "</td>" +
                                "<td class='productCount'>" +
                                "<span class='amount'>" +
                                items.productCnt +
                                "</span>" +
                                "<span class='unit'>" +
                                "개" +
                                "</span>" +
                                "</td>" +
                                "<td class='discountBenefit'>" +
                                "<div class='applyCoupon'>" +
                                "<span class='applyCouponInfo'>" +
                                "<span>쿠폰적용</span>" +
                                "</span>" +
                                "</div>" +
                                "</td>" +
                                "<td class='orderPrice'>" +
                                "<span class='amount productTotalPay'>" +
                                items.sum.toLocaleString() +
                                "</span>" +
                                "<span class='unit'>원</span>" +
                                "</td>" +
                                "</tr>";
                            productSum += items.sum;
                        }
                    });
                }

                if (headName.indexOf(items.brandName) === -1) {
                    tfoot =
                        "</tbody>" +
                        "<tfoot>" +
                        "<tr>" +
                        "<td class='productTotal' colspan='4'>" +
                        "<span class='productPrice'>" +
                        "<span>상품 </span>" +
                        "<span class='amount'>" +
                        productSum.toLocaleString() +
                        "</span>" +
                        "<span> + </span>" +
                        "<span>배송비 </span>" +
                        "<span class='amount'>0</span>" +
                        "<span> = </span>" +
                        "</span>" +
                        "<span class='totalPriceAmount'>" +
                        productSum.toLocaleString() +
                        "</span>" +
                        "</td>" +
                        "</tr>" +
                        "</tfoot>" +
                        "</table>";
                    totalPrice += productSum;
                    headName.push(brandName);
                }
                thead += tbody + tfoot;
                $(".payProductInfo").append(thead);
            });

            //total price in summary contents
            $('.paySummaryContents .productPrc, .paySummaryContents .paySummaryPrice .amount').text(totalPrice.toLocaleString());
            $('.paySummaryContents .paySavingPoint .amount').text((Math.ceil(totalPrice*0.01)).toLocaleString());
        },
        err: function (err) {
            console.log(err);
        },
    });

    let name;
    let phone;
    let email;

    // get member info
    $.ajax({
        type: 'post',
        url: '/purchase/getMember',
        success: function (data){
            name = data.name;
            phone = data.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
            email = data.email;
            if(data.name === null){
                $('.buyerInfo div.buyerName').addClass('empty').text("이름 (필수)");
            }else $('.buyerInfo .buyerName').empty().text(name);

            $('.buyerInfo .buyerCellPhone').text(phone);

            if(data.email === null){
                $('div.buyerEmail').addClass('empty').text("이메일 (필수)");
            }else $('div.buyerEmail').empty().text(email);

        },
        err: function (err) { console.log(err)}

    });

    // ---------------------------------------------------------------
    // member info change modal
    // ---------------------------------------------------------------
    $('.payOrderInfo .payOrderEditBtn').on("click", function (){
        $.ajax({
            type: 'get',
            url: "/purchase/memberInfoChangeModal",
            data: {name: name, phone: phone, email: email},
            success: function (html) {
                $(html).appendTo('body').modal({
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
                });
            }
        });
    });

    //name
    $(document).on("focus", ".infoChangeModal .buyerName input", function (){
        $(this).css("border-bottom-color", "#000");
    });
    $(document).on("blur", ".infoChangeModal .buyerName input", function () {
        $(this).css("border-bottom-color", "rgb(225, 225, 225)");
    });

    const deleteIconImg = "<img class='clearInputBtn' src='../../images/purchase/clear_input_btn.png'>";
    $(document).on("input", ".infoChangeModal .buyerName input", function (){
       name = $(this).val();

       if(name){
           if(!$(this).parent().find('.clearInputBtn').length)
               $(this).parent().append(deleteIconImg);
           if(!$(document).find('.infoChangeModal .buyerEmail .infoErrorMsg').length)
               $('.infoChangeBtn').removeAttr("disabled");
       }else {
           $(this).parent().find('.clearInputBtn').remove();
           $('.infoChangeBtn').attr("disabled", true);
       }

    });

    //email
    $(document).on("focus", ".buyerEmail input", function (){
        $(this).css("border-bottom-color", "#000");
    });
    $(document).on("blur", ".buyerEmail input", function () {
        $(this).css("border-bottom-color", "rgb(225, 225, 225)");
    });
    $(document).on("input", ".buyerEmail input", function (){
        email = $(this).val();

        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const errMsg = "<p class='infoErrorMsg'>6~80자의 유효한 이메일을 입력해 주세요.</p>";
        if (email){
            if(!$(this).parent().find('.clearInputBtn').length)
                $(this).parent().append(deleteIconImg);

            if (!regExp.test($(this).val())) {
                $('.infoChangeBtn').attr("disabled", true);
                if (!$(this).parent().find('.infoErrorMsg').length)
                    $(this).parent().append(errMsg);
            } else {
                $(this).parent().find('.infoErrorMsg').remove();

                if(name) $('.infoChangeBtn').removeAttr("disabled");
            }
        } else {
            $(this).parent().find('.clearInputBtn').remove();
            $('.infoChangeBtn').attr("disabled", true);
            if (!$(this).parent().find('.infoErrorMsg').length)
                $(this).parent().append(errMsg);
        }
    });

    // radio btn
    $(document).on('change', '#buyerCellPhoneSelectType_0', function() {
        if($(this).is(':checked'))
            $('.phoneSelectType .newBuyerPhone').css("display", "none");
    });
    $(document).on('change', '#buyerCellPhoneSelectType_1', function() {
        if($(this).is(':checked'))
            $('.phoneSelectType .newBuyerPhone').css("display", "block");
    });

    // member info change
    $(document).on('click', '.modalFooter .infoChangeBtn', function() {
        if($('.newBuyerPhone input').val() !== "") phone = $('.newBuyerPhone input').val();

        $('.buyerInfo .buyerName').empty().removeClass('empty').text(name);
        $('.buyerInfo .buyerCellPhone').text(phone);
        $('div.buyerEmail').empty().removeClass('empty').text(email);
    });
    // remove modal tag when close the modal
    $(document).on('click', '.modalCloseBtn, .modalFooter .infoChangeBtn', function() {
        $(this).closest('.modal').remove();
    });


});

$(function () {
    $(window).on("scroll", function () {
        var topOffset = $(".bothSideInfoWrap").offset().top - 95;

        if ($(this).scrollTop() >= topOffset) {
            $(".paySummaryInfo").addClass("fixed");
        } else {
            $(".paySummaryInfo").removeClass("fixed");
        }
    });
});



