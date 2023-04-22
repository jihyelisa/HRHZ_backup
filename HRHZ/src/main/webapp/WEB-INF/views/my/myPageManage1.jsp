<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<section class="mypageContentSection">
  <section class="mypageSection">
    <section>
      <h3>회원정보수정</h3>
      <section class="mypageManage">
        <article class="manageLoginInfo">
          <h4 class="manageLoginHead">로그인 정보</h4>
          <!-- 일반 로그인 -->
          <div class="normalLogin">
            <form class="" novalidate>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">아이디</label>
                </div>
                <div class="formRight">
                  <div class="formText">아이디비번세션값@gmail.com</div>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">비밀번호</label>
                </div>
                <div class="formRight">
                  <input class="passwordForm" type="password" readonly value="0000000" />
                  <div class="btnWrap">
                    <button class="whiteBtn modifyPwdBtn">
                      비밀번호 수정
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- snsLogin -->
          <!-- <div class="snsLogin">
              <p class="snsMainText">
                <span class="snsType">카카오</span>
                로 로그인 하였습니다.
              </p>
              <p class="snsSubText">
                SNS로 가입하신 분들은 SNS계정에서 비밀번호를 바꿔주세요.
              </p>
            </div> -->
        </article>
        <article class="manageUserInfo">
          <h4>회원 정보</h4>
          <div class="userInfoFormWrap">
            <form class="userInfoForm" novalidate>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel required">이름</label>
                </div>
                <div class="formRight">
                  <div class="inputPlaceholder formInput">
                    <input type="text" name="userName" maxlength="20" placeholder="이름을 입력해 주세요." />
                    <label for="userName"></label>
                    <!-- <img
                        class="inputCheckIcon"
                        alt=""
                        src="./mypageManageImg/valid-input-check-icon.png"
                      /> -->
                    <!-- <p class="infoErrorMsg">1~20자의 이름을 입력해 주세요.</p> -->
                  </div>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">휴대폰 번호</label>
                </div>
                <div class="formRight">
                  <div class="formText">010-1234-1234(세션)</div>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">이메일</label>
                </div>
                <div class="formRight">
                  <div class="formInput">
                    <input type="text" name="userEmail" maxlength="80" placeholder="이메일을 입력해 주세요." />
                    <label for="userEmail"></label>
                  </div>
                  <!-- <p class="infoErrorMsg">유효한 이메일을 입력해 주세요.</p> -->
                  <p class="infoFormMsg">
                    이메일 입력 시 할인, 쿠폰 등 할인 혜택을 알려드립니다.
                  </p>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">혜택정보 알림</label>
                </div>
                <div class="formRight">
                  <div class="formInput receiveWrap">
                    <div class="snsCheckbox">
                      <input type="checkbox" name="smsReceive" id="smsReceive" />
                      <label for="smsReceive"><span>SNS 수신동의</span></label>
                    </div>
                    <div class="snsCheckbox">
                      <input type="checkbox" name="emailReceive" id="emailReceive" />
                      <label for="emailReceive"><span>E-Mail 수신동의</span></label>
                    </div>
                  </div>
                  <p class="infoFormMsg">
                    아몬즈 회원을 위한 할인 소식, 쿠폰 등<br />
                    특별한 맞춤 혜택을 편하게 받아보실 수 있습니다.
                  </p>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">생일</label>
                </div>
                <div class="formRight">
                  <div class="reactDatepickerWrap">
                    <div class="reactDatepicker">
                      <button type="button" class="datepickBtn">
                        <div class="placeholder">날짜를 선택해주세요.</div>
                        <img alt="Date" src="./mypageManageImg/date_picker_icon.png" />
                      </button>
                    </div>
                  </div>
                  <p class="infoFormMsg">
                    아몬즈에서 생일 축하 쿠폰을 발급해드립니다. (계정당 연 1회)
                  </p>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formLeft">
                  <label class="formLabel">성별</label>
                </div>
                <div class="formRight">
                  <div class="formInput genderWrap">
                    <input type="radio" name="userGender" id="userGenderW" class="genderInput" value="0" checked="checked" />
                    <label for="userGenderW">여자</label>
                    <input type="radio" name="userGender" id="userGenderM" class="genderInput" value="1" />
                    <label for="userGenderM">남자</label>
                  </div>
                  <div class="btnWrap">
                    <button type="button" class="goShopBtn submitBtn" disabled>
                      수정
                    </button>
                  </div>
                </div>
              </div>
              <div class="userInfoFormArea">
                <div class="formRight">
                  <div class="userRemove">
                    <button type="button">회원탈퇴</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </article>
      </section>
    </section>
  </section>
</section>
