"use strict";

function ganGiaTriInput(taiKhoan, hoTen, email, diaChi, loaiNguoiDung, diemToan, diemLy, diemHoa, luongNgay, soNgaylam, tenCongTy, triGiaHoaDon, danhGia) {
  document.getElementById("taiKhoan").value = taiKhoan;
  document.getElementById("hoTen").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("loaiNguoiDung").value = loaiNguoiDung;
  document.getElementById("diemToan").value = diemToan * 1;
  document.getElementById("diemHoa").value = diemHoa * 1;
  document.getElementById("diemLy").value = diemLy * 1;
  document.getElementById("luongNgay").value = luongNgay * 1;
  document.getElementById("soNgayLam").value = soNgaylam * 1;
  document.getElementById("tenCongTy").value = tenCongTy;
  document.getElementById("triGiaHoaDon").value = triGiaHoaDon * 1;
  document.getElementById("danhGia").value = danhGia;
}

; // Tìm vị trí người dùng dựa vào tài khoản

function timViTri(taiKhoan) {
  var viTri = timViTri(taiKhoan);

  if (viTri = -1) {
    alert("Người dùng không tồn tại");
  } else {
    arrNguoiDung.forEach(function (item, index) {
      if (item.taiKhoan == taiKhoan) {
        viTri = index;
      }
    });
    return viTri;
  }
}

function layGiaTriInput() {
  var _taiKhoan = document.getElementById("taiKhoan").value;
  var _hoTen = document.getElementById("hoTen").value;
  var _email = document.getElementById("email").value;
  var _diaChi = document.getElementById("diaChi").value;
  var _loaiNguoiDung = document.getElementById("loaiNguoiDung").value;

  var _diemToan = document.getElementById("diemToan").value * 1;

  var _diemLy = document.getElementById("diemLy").value * 1;

  var _diemHoa = document.getElementById("diemHoa").value * 1;

  var _luongNgay = document.getElementById("luongNgay").value * 1;

  var _soNgaylam = document.getElementById("soNgayLam").value * 1;

  var _tenCongTy = document.getElementById("tenCongTy").value;
  var _triGiaHoaDon = document.getElementById("triGiaHoaDon").value;
  var _danhGia = document.getElementById("danhGia").value;
  var valid = true;
  valid = kiemTraRong(_taiKhoan, "tbMaSV") & kiemTraRong(_hoTen, "tbTenSV") & kiemTraRong(_email, "tbEmail") & kiemTraRong(_diaChi, "tbDiaChi") & kiemTraRong(_loaiNguoiDung, "tbLoaiNguoiDung") & kiemTraRong(_diemToan, "tbDiemToan") & kiemTraRong(_diemLy, "tbDiemLy") & kiemTraRong(_diemHoa, "tbDiemHoa") & kiemTraRong(_luongNgay, "tbLuongNgay") & kiemTraRong(_soNgaylam, "tbSoNgayLam") & kiemTraRong(_tenCongTy, "tbTenCongTy") & kiemTraRong(_triGiaHoaDon, "tbTriGiaHoaDon") & kiemTraRong(_danhGia, "tbDanhGia");
  valid &= kiemTraEmail(_email, "tbEmail");

  if (!valid) {
    return;
  }

  if (_loaiNguoiDung === "Sinh Viên") {
    var sinhVien = new SinhVien(_taiKhoan, _hoTen, _email, _diaChi, _diemToan, _diemLy, _diemHoa);
    return sinhVien;
  }

  if (_loaiNguoiDung === "Nhân Viên") {
    var nhanVien = new NhanVien(_taiKhoan, _hoTen, _email, _diaChi, _luongNgay, _soNgaylam);
    return nhanVien;
  }

  if (_loaiNguoiDung === "Khách Hàng") {
    var khachHang = new KhachHang(_taiKhoan, _hoTen, _email, _diaChi, _tenCongTy, _triGiaHoaDon, _danhGia);
    return khachHang;
  } // Hàm lưu dữ liệu xuống local


  function saveStorage(arrNguoiDung) {
    localStorage.setItem("arrNguoiDung", JSON.stringify(arrNguoiDung));
  } // Hàm lấy giá trị từ local lên và sử dụng


  function getStorage() {
    var arrNguoiDungLocal = JSON.parse(localStorage.getItem("arrNguoiDung"));

    if (arrNguoiDungLocal != null) {
      arrNguoiDung = arrNguoiDungLocal;
    }
  }
}

;