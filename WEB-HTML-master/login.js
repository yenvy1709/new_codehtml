
$(".submit").click(function (e) {
    e.preventDefault();
    const phone = $(".phone").val().trim()
    const password = $(".password").val().trim()
    if(phone===""||password===""||phone===null||password===null){
        window.alert("Tài khoản hoặc mật khẩu không được để trống !!!!")
        return false
        
    }
    fetch("http://localhost:5500/api/getAllUser").then(data => data.json()).then(result => {
        var check = false
        result.forEach((val) => {
            if (val.phone === phone && val.password === password) {
                if(val.phone==="0901057398"&&val.password==="1"||val.phone==="admin"&&val.password==="1"){
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
        });
        if (check === false) {
            window.alert("Sai tài khoản hoặc mật khẩu!")
        }
    })
})

