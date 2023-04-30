// ---------------------------------------------------
//               brandInsert
// ---------------------------------------------------
$('.adminBrandInsert').click(function(){
		$.ajax({
				type:'post',
				url :'/admin/brandMemberInsert',
				data :{
				'name' :$('input[name=brandName]').val(),
				'phone' : $('input[name=representativeNumber]').val(),
	       		'email' :$('input[name=brandEmail]').val(),	       		
	       		'businessLocation1': $('input[name=businessLocation1]').val(),
	       		'businessLocation2': $('input[name=businessLocation2]').val(),
	       		'returnAddress1': $('input[name=returnAddress1]').val(),
	       		'returnAddress2': $('input[name=returnAddress2]').val(),
	       		'deliveryFee' : $('input[name=deliveryCharge]').val(),
	       		'kakaoId' : $('input[name=kakaotalk]').val(),
	       		'instagramId' : $('input[name=instagram]').val(),
       },
       
				success : function(){
				alert("브랜드등록완료");
				location.href='/admin/brandInsert'
				},
				error:function(err){
					console.log(err);
					} 
				});
			});
			
// ---------------------------------------------------
//              Address찾기
// ---------------------------------------------------
 function post() {
        new daum.Postcode({
            oncomplete: function(data) {

                var addr = ''; 
                               
              
                if (data.userSelectedType === 'R') { 
                    addr = data.roadAddress;
                } else { 
                    addr = data.jibunAddress;
                }
                
                document.getElementById("businessLocation1").value = addr;
                
                document.getElementById("businessLocation2").focus();
            
            }
        }).open();
    }
    
     function returnpost() {
        new daum.Postcode({
            oncomplete: function(data) {
               
                var addr = ''; 
                               
                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else { 
                    addr = data.jibunAddress;
                }
              
                document.getElementById("returnAddress1").value = addr;
              
                document.getElementById("returnAddress2").focus();
            }
        }).open();
    }
