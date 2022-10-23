$(".regsiter").click(function (e) {
    const name = $(".name").val().trim()
    const email = $(".email").val().trim()
    const phone = $(".phone").val()
    const password = $(".password").val()
    checkRegiter()
    const user = {
        name,
        email,
        phone,
        password
    }

    fetch("http://localhost:5500/api/getAllUser").then(data => data.json()).then(result => {
        let checkRegiter = false
        result.forEach((val) => {
            if (val.phone === phone ) {
                alert("Tài khoản đã tồn tại");
                checkRegiter = true;
            }
        });
        if (checkRegiter === false) {
            
            $.ajax({
                type: "POST",
                url: "http://localhost:5500/api/signup",
                data: JSON.stringify(user),
                contentType: "application/json",
                dataType: "json",
                success: function () {
                    alert("Register successed!");
                },
                error: function () {
                    alert("Something was wrong");
                },
            });
        }
    })

})