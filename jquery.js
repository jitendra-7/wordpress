
       $(document).ready(function(){
           
           $('#fnameval').hide();
           $('#emailval').hide();
           $('#conval').hide();
           $('#contval').hide();
           $('#countval').hide();
           $('#statval').hide();
           $("#userval").hide();
           $("#passval").hide();
           $("#cpassval").hide();
                     
              var fname_err=true;
              var email_err=true;
              var con_err=true;
              var count_err=true;
              var countcode_err=true;
              var stat_err=true;
              var img_err=true;
              var usern_err=true;
              var pass_err=true;
              var cpass_err=true;
                                           // for Full Name validation
              $('#fname').keyup(function(){
                   fname_check();
              });
              function fname_check(){
                var fname_in=$('#fname').val();
                if (fname_in=='') {
                  $('#fnameval').show();
                  $('#fnameval').html('**Please Fill Your Full Name');
                  $('#fnameval').focus();
                  $('#fnameval').css("color","red");
                  fname_err=false;
                  return false;
                }
                else if ((fname_in.length< 3 )||(fname_in.length> 12 )) {
                    $("#fnameval").show();
                    $("#fnameval").text("***Name must be contain between 3 to 12 character");
                    $("#fnameval").focus();
                    $("#fnameval").css("color","red");
                    fname_err=false;
                    return false;
                  }else{
                    $("#fnameval").hide();
                   fname_err=true;
                  return true;
                     }
              }

                                               // for Email validation
              $('#email').keyup(function(){
                  email_check();
              });
               function email_check(){
                     var email = $("#email").val();
                     if (email=='') {
                      $('#emailval').show();
                      $('#emailval').text("***This Field is required");
                      $('#emailval').focus();
                      $('#emailval').css("color","red");
                      email_err=false;
                      return false;
                     }else if(email != ''){
                $("#emailval").show();
                  if(isValidEmailAddress(email))
                  {
                    $("#emailval").css("color","green");
                    $("#emailval").text("email is valid");
                    email_err=true;
                    return true;                
                      
                  } else {
                      $("#emailval").css("color","yellow");
                      $("#emailval").text("email is invalid");
                    email_err=false;
                        return false;
                  }
              }
               
               }
      function isValidEmailAddress(emailAddress) {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          // console.log(pattern.test(emailAddress));
          return pattern.test(emailAddress);
      }
                                               // for Username validation

        $("#usern").keyup(function(){
                    usern_check();
                })
        function usern_check(){
          var usercheck=$("#usern").val();
          if (usercheck=='') {
            $("#userval").show();
            $("#userval").text("***This Fiel is mandatory");
            $("#userval").focus();
            $("#userval").css("color","red");
            usern_err=false;
            return false;
          }else{
            $("#userval").hide();
                usern_err=true;
                return true;
          }
        }
              
                                               // for Password validation
          $("#pass").keyup(function(){
                    password_check();
                });
        function password_check(){
          var passcheck=$("#pass").val();
          if ((passcheck=='') || (passcheck.length< 4 )||(passcheck.length> 8 )) {
            $("#passval").show();
            $("#passval").text("***Password must contain between 4 to 8 character");
            $("#passval").focus();
            $("#passval").css("color","red");
            pass_err=false;
            return false;
          }else{
            $("#passval").hide();
                pass_err=true;
                return true;
          }
        }
                                                 // for Confirm Password validation
        $("#cpass").keyup(function(){
                    cpassword_check();
                });
        function cpassword_check(){
          var passcheck=$("#pass").val();
          var cpasscheck=$("#cpass").val();
          if (cpasscheck!=passcheck) {
            $("#cpassval").show();
            $("#cpassval").text("***Confirm Password not match");
            $("#cpassval").focus();
            $("#cpassval").css("color","red");
            cpass_err=false;
            return false;
          }else{
            $("#cpassval").hide();
                cpass_err=true;
                return true;
          }
        }
                                               // for mobile number validation
        $("#contactno").keyup(function(){
          contact_check();
        })
        function contact_check(){
          var concheck=$("#contactno").val();
          if (concheck.length=='' || concheck.length!=10) {
            $("#conval").show();
            $("#conval").text("***Invalid Mobile number");
            $("#conval").focus();
            $("#conval").css("color","red");
            con_err=false;
            return false;
          }else{
            $("#conval").hide();
            con_err=true;
                return true;
          }
        }

                                                      // for Country code validation
           $("#countcode").change(function(){
                     countcode_check();
                   });
              function countcode_check(){
                var valcountcode=$('#countcode').val();
              
              if(valcountcode=='0'){
                $('#contval').show();
                $('#contval').text("*****This Field is required");
                $('#contval').focus();
                $('#contval').css("color","red");
                  countcode_err=false;
                  return false;
              }else{
                $('#contval').hide();
                countcode_err=true;
                  return true;
              }
       
          }

                                                          // for Country validation
       $("#country").change(function(){
                     country_check();
                   });
              function country_check(){
                var countryval=$('#country').val();
              
              if(countryval=='0'){
                $('#countval').show();
                $('#countval').text("*****This Field is required");
                $('#countval').focus();
                $('#countval').css("color","red");
                  count_err=false;
                  return false;
              }else{
                $('#countval').hide();
                count_err=true;
                  return true;
              }
       
          }
                
                                                         // for State validation
       $("#state").change(function(){
                     state_check();
                   });
              function state_check(){
                var countryval=$('#state').val();
              
              if(countryval=='0'){
                $('#statval').show();
                $('#statval').text("***This Field is required");
                $('#statval').focus();
                $('#statval').css("color","red");
                  count_err=false;
                  return false;
              }else{
                $('#statval').hide();
                count_err=true;
                  return true;
              }
       
          }
                                                          // for Image validation
          $("#image").change(function(){
                     image_check();
                   });
          function  image_check(){
          var val = $("#image").val();
        if (!val.match(/(?:gif|jpg|png|bmp)$/)) {
              $('#imgval').show();
              $('#imgval').text("***please use ther jpg gif png bmp format image");
              $('#imgval').focus();
              $('#imgval').css("color","red");
                  img_err=false;
                  return false;
                 }else{
                  $('#imgval').hide();
                  img_err=true;
                  return true;
                 }
             }
             
                                                         // for  Final Submit validation
          $('#sub-btn').click(function(event){
                  var fname_err=true;
                  var email_err1=true;
                  var con_err1=true;
                  var count_err1=true;
                  var countcode_err1=true;
                  var stat_err1=true;
                  var img_err1=true;
                  var usern_err1=true;
                  var pass_err1=true; 
                  var cpass_err1=true;

                fname_err1 = fname_check();
                email_err1 = email_check();
                con_err1 = contact_check();
                count_err1 = countcode_check();
                countcode_err1 = country_check();
                stat_err1 = state_check();
                img_err1=image_check(); 
                usern_err1=usern_check();
                pass_err1=password_check();
                cpass_err1=cpassword_check();

          var check_validation = (fname_err1==true) && (email_err1==true) && (usern_err1=true) && (pass_err1==true)
          && (cpass_err1==true) &&(con_err1==true) && (count_err1==true) && (countcode_err1==true) && (stat_err1==true) && (img_err1==true);

       if (check_validation) {
          return true;
         }else{
          event.preventDefault();
             return false;  
         }
    
    }); 
    });
           