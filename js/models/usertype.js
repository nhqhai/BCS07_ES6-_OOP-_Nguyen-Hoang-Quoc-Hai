function hienThiLoaiNguoiDung() {
    var option = document.getElementById("loaiNguoiDung").value;
    if (option == "Sinh Viên") {
            document.getElementById("inputSinhVien").style.display = "block";
            document.getElementById("inputNhanVien").style.display = "none";
            document.getElementById("inputKhachHang").style.display = "none";
        } else if (option == "Nhân Viên"){
            document.getElementById("inputNhanVien").style.display = "block";
            document.getElementById("inputSinhVien").style.display = "none";
            document.getElementById("inputKhachHang").style.display = "none";
        } else if (option == "Khách Hàng"){
            document.getElementById("inputKhachHang").style.display = "block";
            document.getElementById("inputNhanVien").style.display = "none";
            document.getElementById("inputSinhVien").style.display = "none";
        }
};