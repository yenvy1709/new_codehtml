
$(".submit").click(function (e) {
    e.preventDefault();
    const phone = $(".phone").val().trim()
    const password = $(".password").val().trim()
   
    fetch("http://localhost:5500/api/getAllUser").then(data => data.json()).then(result => {
        let check = false
       
        result.forEach((val) => {
            if(val.phone==""||val.password==""){
             check=false;
          
            }
            else{
                if (val.phone === phone && val.password === password) {
                    if(val.phone=="0901057398"&&val.password=="1"){
                        alert("Welcome " + val.name);
                        check = true;
                        window.location.href="admin.html";
                    }
                    else{
                        alert("Welcome " + val.name);
                        check = true;
                        window.location.href="user.html";
                    }
                }
                
            }
           
            
            
        });
        if (check === false) {
            window.alert("Sai tài khoản hoặc mật khẩu!")
        }
    })
})

