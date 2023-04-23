$(document).ready(function () {
  // ---------------------------------------------------
  //                  getProductImages
  // ---------------------------------------------------
  var imgs = $(".mainThumbnailList");
  var img_count = 0;
  var img_position = 1; //default position

  $.ajax({
    type: "post",
    data: "productCode=" + $(".productCode").text(),
    url: "/purchase/getProductImages",
    success: function (data) {
      $.each(data, function (index, items) {
        // thumbnail images
        if (items.thumbnailYn == "Y") {
          let thumbnailHTML =
            "<img src='/storage/" +
            items.brandCode +
            "/" +
            items.imgName +
            "' alt='product thumbnail image'/>";
          $(".mainThumbnailList").append(thumbnailHTML);
          $(".productThumbnailImageList").append(thumbnailHTML);
          img_count++;
        }
        if (items.thumbnailYn == "N") {
          let thumbnailHTML =
            "<img src='/storage/" +
            items.brandCode +
            "/" +
            items.imgName +
            "' alt='product thumbnail image'/>";
        }
      }); //each

      data[0];
    },
    error: function (err) {
      console.log(err);
    },
  });

  /*
  SELECT 'name' AS "productName", detail_type AS "detailType", price AS "price", 'like' AS "like",
      pd.name AS "detailName",
      b.code AS "brandCode", b.name AS "brandName",
      bi.img_path AS "brandImgPath", img_name AS "brandImgName"
  */

  // ---------------------------------------------------
  //                  getProductDetail
  // ---------------------------------------------------
  $.ajax({
    type: "post",
    data: "productCode=" + $(".productCode").text(),
    url: "/purchase/getProductDetail",
    success: function (data) {
      $.each(data, function (index, items) {
        // add all option box HTML
        let optionItem = $(
          "<li class='selectedOptionItem'>" +
            "<div class='optionBoxTop'>" +
            "<div class='optionName'>" +
            items.detailName +
            "</div>" +
            "<img class='deleteOptionBtn' src='../../images/purchase/delete_btn.png' alt='X icon' />" +
            "</div>" +
            "<div class='productOptionQuantity'>" +
            "<div class='countWrap'>" +
            "<img class='countDecrease' src='../../images/purchase/product_quantity_minus_round_btn.png' alt='minus icon' />" +
            "<div class='count'>0</div>" +
            "<img class='countIncrease' src='../../images/purchase/product_quantity_plus_round_btn.png' alt='plus icon' />" +
            "</div>" +
            "<span class='amountWrap'>" +
            "<span class='amount'>0</span>" +
            "<div class='originalAmount'>" +
            items.price +
            "</div>" +
            "<span class='unit'>원</span>" +
            "</span></div></li>"
        );
        $("ul.selectedProductOptionList").append(optionItem);

        // option list
        $(".dropdownBox").append(
          "<p class='dropdownOption'>" + items.detailName + "</p>"
        );
      }); //each

      // option title
      $(".dropdownSelectLabel").text(data[0].detailType);
      $(".dropdownOpenLabel").text(data[0].detailType);
    },
    error: function (err) {
      console.log(err);
    },
  });

  // ---------------------------------------------------
  //                  thumbnail btns
  // ---------------------------------------------------
  // main thumbnail slide
  // call the function by clicking btn
  $(".swiperButtonPrev").click(function () {
    --img_position;
    imgChange();
  });
  $(".swiperButtonNext").click(function () {
    ++img_position;
    imgChange();
  });
  // mini thumbnail click
  $("div.productThumbnail").on(
    "click",
    ".productThumbnailImageList > img",
    function (event) {
      img_position = $(this).index() + 1;
      console.log(img_position);
      imgChange();
    }
  );

  function imgChange() {
    var img_left = (1 - img_position) * 550 + "px";
    console.log(img_left);
    imgs.animate({
      left: img_left,
    });

    // btns remove & appear
    $(".swiperButtonNext, .swiperButtonPrev").css("display", "block");
    if (img_position == 1) {
      $(".swiperButtonPrev").css("display", "none");
    }
    if (img_position == img_count) {
      $(".swiperButtonNext").css("display", "none");
    }

    // mini thumbnails opacity
    $(".productThumbnailImageList > img").css("opacity", "1");
    $(".productThumbnailImageList > img")
      .eq(img_position - 1)
      .css("opacity", "0.6");
  }

  // ---------------------------------------------------
  //                    Like heart
  // ---------------------------------------------------
  // like heart icon
  $(".productLikeHeart").on("click", function (event) {
    $(".productLikeHeart").css("display", "none");
    $(".productLikeHeartViolet").css("display", "block");
  });
  $(".productLikeHeartViolet").on("click", function (event) {
    $(".productLikeHeart").css("display", "block");
    $(".productLikeHeartViolet").css("display", "none");
  });

  // ---------------------------------------------------
  //                      options
  // ---------------------------------------------------
  // option dropdown box
  $(".productOptionAndPrice").on("click", ".dropdownSelect", function (event) {
    $(".dropdownBox").css("display", "flex");
  });
  $(".productOptionAndPrice").on("click", ".dropdownBox p", function (event) {
    $(".dropdownBox").css("display", "none");
  });

  // price formatter
  function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  // total price calc function
  function totalUpdate() {
    let total_price = 0;

    $(".selectedOptionItem").each(function () {
      let current_amount = parseInt(
        $(this).find(".amount").text().replace(",", "")
      );

      total_price += current_amount;
    });
    $(".productTotalPrice .amount").text(addComma(total_price));
  }

  // display selected option box
  $(".productOptionAndPrice").on("click", ".dropdownOption", function (event) {
    // get selected option name
    var select_name = $(this).text();

    // check existing boxes
    $(".selectedOptionItem").each(function () {
      if ($(this).find(".optionName").text() == select_name) {
        $(this).find(".countIncrease").click();
        $(this).css("display", "block");
      }
    });
    totalUpdate();
  });

  // count btns
  // - button
  $("ul.selectedProductOptionList").on(
    "click",
    ".countDecrease",
    function (event) {
      const $count_class = $(this).siblings(".count");
      const $amount_class = $(this)
        .parents(".productOptionQuantity")
        .find(".amount");
      const $original_amount_class = $amount_class.siblings(".originalAmount");
      let option_count = parseInt($count_class.text());
      let original_amount = parseInt($original_amount_class.text());

      if (option_count > 0) {
        $count_class.text(--option_count);
        $amount_class.text(addComma(option_count * original_amount));
      }
      totalUpdate();
    }
  );
  // + button
  $("ul.selectedProductOptionList").on(
    "click",
    ".countIncrease",
    function (event) {
      const $count_class = $(this).siblings(".count");
      const $amount_class = $(this)
        .parents(".productOptionQuantity")
        .find(".amount");
      const $original_amount_class = $(this)
        .parents(".productOptionQuantity")
        .find(".originalAmount");
      let option_count = parseInt($count_class.text());
      let original_amount = parseInt($original_amount_class.text());

      $count_class.text(++option_count);
      $amount_class.text(addComma(option_count * original_amount));

      totalUpdate();
    }
  );

  // option box delete btn
  $("ul.selectedProductOptionList").on(
    "click",
    ".deleteOptionBtn",
    function (event) {
      const $parentLi = $(this).parents("li.selectedOptionItem");

      // count, amount 초기화
      $parentLi.find(".count").text("0");
      $parentLi.find(".amount").text("0");
      $parentLi.css("display", "none");
      totalUpdate();
    }
  );
});

// ---------------------------------------------------
//                  add cart button
// ---------------------------------------------------
$(".addCartBtn").on("click", function (event) {
  location.href = "/purchase/cartForm";
});

// ---------------------------------------------------
//                   store notice
// ---------------------------------------------------
// 더보기
$(".storeNoticeOpenBtn").on("click", function (event) {
  $(".storeNoticeContents").css("max-height", "1000px");
  $(".storeNoticeOpenBtn").css("display", "none");
  $(".storeNoticeCloseBtn").css("display", "block");
});
// 접기
$(".storeNoticeCloseBtn").on("click", function (event) {
  $(".storeNoticeContents").css("max-height", "60px");
  $(".storeNoticeOpenBtn").css("display", "block");
  $(".storeNoticeCloseBtn").css("display", "none");
});

// ---------------------------------------------------
//                   info modals
// ---------------------------------------------------
$(".refundInfoBtn").on("click", function (event) {
  $("section.modalWindow").css("display", "block");
  $(".refundModal").css("display", "flex");
  $(".asModal").css("display", "none");
  $(".reviewModal").css("display", "none");
});

$(".asInfoBtn").on("click", function (event) {
  $("section.modalWindow").css("display", "block");
  $(".asModal").css("display", "flex");
  $(".refundModal").css("display", "none");
  $(".reviewModal").css("display", "none");
});

// ---------------------------------------------------
//                   review modal
// ---------------------------------------------------
$(".reviewModalBtn").on("click", function (event) {
  $("section.modalWindow").css("display", "flex");
  $(".refundModal").css("display", "none");
  $(".asModal").css("display", "none");
});

// 별점 아이콘
$(".reviewStarIcon").on("click", function (event) {
  $(".reviewStars").children().removeClass("starOn");
  $(this).addClass("starOn").prevAll(".reviewStarIcon").addClass("starOn");

  $(".reviewStarIcon").attr(
    "src",
    "../../images/purchase/product_review_star_off.png"
  );
  $(".starOn").attr("src", "../../images/purchase/product_review_star_on.png");
});

// 등록 버튼 활성화
$(".reviewWriteDiv textarea").keyup(function (event) {
  if ($(this).val().length >= 5 && $(this).val().length <= 2000) {
    $(".reviewWriteBtn")
      .prop("disabled", true)
      .css("background-color", "#000")
      .css("cursor", "pointer");
  } else {
    $(".reviewWriteBtn")
      .prop("disabled", false)
      .css("background-color", "#ddd")
      .css("cursor", "default");
  }
});

// ---------------------------------------------------
//                  modals close btn
// ---------------------------------------------------
$(".modalCloseBtn").on("click", function (event) {
  $("section.modalWindow").css("display", "none");

  // 별점 아이콘 초기화
  $(".reviewStarIcon").attr(
    "src",
    "../../images/purchase/product_review_star_on.png"
  );
  // textarea 초기화
  $(".reviewWriteDiv textarea").val("");
  // 등록버튼 초기화
  $(".reviewWriteBtn").css("background-color", "#ddd");
});
