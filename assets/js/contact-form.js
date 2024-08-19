jQuery(document).ready(function () {
	jQuery('#submit').on('click',document,function(){

				jQuery("#contactpage").validate({
					submitHandler : function (e) {
						submitSignupFormNow(jQuery("#contactpage"))
					},
					rules : {
						fname : {
							required : true
						},
						phone : {
							required : true,
							number : true
						}
					},
					errorElement : "span",
					errorPlacement : function (e, t) {
						e.appendTo(t.parent())
					}
				});
				let params = {
					fname : document.getElementById("fname").value,
					phone : document.getElementById("phone").value,
					email : document.getElementById("email").value,
					practiceArea : document.getElementById("practiceArea").value,
					message : document.getElementById("message").value
				}
				submitSignupFormNow = function (e) {
					var t = e.serialize();
					
					emailjs.send("service_jh0r6x5","template_kj5dplg",params).then(response => {
						if (response.status == "200") {
							$('.loader-mask').delay(350).fadeOut('slow');
							const postFormSubmit = document.getElementById("postFormSubmit");
							const preFormSubmit = document.getElementById("preFormSubmit");
							preFormSubmit.style.display = "none"; 
							postFormSubmit.style.display = "block"; 
						} else {
							jQuery("#form_result").html('<span class="form-error alert alert-danger d-block">' + t.msg + "</span>")
						  }
						  jQuery("#form_result").show();
						});
					return false
				}
		
	});
	
})
