
$(".Fill").click(function (e) {
    e.preventDefault();
    const id=$(".id").val()
    fetch("http://localhost:5500/api/getAllProduct").then(data => data.json()).then(result => {
      let check = false
      result.forEach((val) => {
        $.ajax({
          type: "POST",
          url: "http://localhost:5500/api/product",
          data: JSON.stringify(user),
          contentType: "application/json",
          dataType: "json",
          success: function () {
              alert("Register successed!");
          },
          error: function () {
              alert("Something was wrong");
          },
        })
      }); 
    })
});
