function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
      document.querySelectorAll(".sp-thongbao").innerHTML = "";
      return true;
    } else {
      document.querySelectorAll(".sp-thongbao").innerHTML =
        "Vui lòng nhập trường dữ liệu này";
      return false;
    }
  }

  function kiemTraEmail(checkInput,idThongBao ) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
      document.getElementById("tbEmail").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbEmail").innerHTML = "Vui lòng nhập đúng email";
      return false;
    }
  }