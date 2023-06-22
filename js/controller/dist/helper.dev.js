"use strict";

function ganInputSinhVien(taiKhoan, hoTen, email, diaChi, loaiNguoiDung, diemToan, diemHoa, diemLy) {
  document.getElementById("taiKhoan").value = taiKhoan;
  document.getElementById("hoTen").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("loaiNguoiDung").value = loaiNguoiDung;
  document.getElementById("diemToan").value = diemToan * 1;
  document.getElementById("diemHoa").value = diemHoa * 1;
  document.getElementById("diemLy").value = diemLy * 1;
}

;

function ganInputNhanVien(taiKhoan, hoTen, email, diaChi, loaiNguoiDung, soNgayLam, luongNgay) {
  document.getElementById("taiKhoan").value = taiKhoan;
  document.getElementById("hoTen").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("loaiNguoiDung").value = loaiNguoiDung;
  document.getElementById("luongNgay").value = luongNgay * 1;
  document.getElementById("soNgayLam").value = soNgayLam * 1;
}

;

function ganInputKhachHang(taiKhoan, hoTen, email, diaChi, loaiNguoiDung, tenCongTy, triGiaHoaDon, danhGia) {
  document.getElementById("taiKhoan").value = taiKhoan;
  document.getElementById("hoTen").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("diaChi").value = diaChi;
  document.getElementById("loaiNguoiDung").value = loaiNguoiDung;
  document.getElementById("tenCongTy").value = tenCongTy;
  document.getElementById("triGiaHoaDon").value = triGiaHoaDon * 1;
  document.getElementById("danhGia").value = danhGia;
}

;

function layInputSinhVien() {
  var _taiKhoan = document.getElementById("taiKhoan").value;
  var _hoTen = document.getElementById("hoTen").value;
  var _email = document.getElementById("email").value;
  var _diaChi = document.getElementById("diaChi").value;
  var _loaiNguoiDung = document.getElementById("loaiNguoiDung").value;

  var _diemToan = document.getElementById("diemToan").value * 1;

  var _diemHoa = document.getElementById("diemHoa").value * 1;

  var _diemLy = document.getElementById("diemLy").value * 1;

  var nguoiDung = new user(_taiKhoan, _hoTen, _email, _diaChi, _loaiNguoiDung, _diemToan, _diemHoa, _diemLy);
  return nguoiDung;
}

function layInputNhanVien() {
  var _taiKhoan = document.getElementById("taiKhoan").value;
  var _hoTen = document.getElementById("hoTen").value;
  var _email = document.getElementById("email").value;
  var _diaChi = document.getElementById("diaChi").value;
  var _loaiNguoiDung = document.getElementById("loaiNguoiDung").value;

  var _soNgayLam = document.getElementById("soNgayLam").value * 1;

  var _luongNgay = document.getElementById("luongNgay").value * 1;

  var nguoiDung = new user(_taiKhoan, _hoTen, _email, _diaChi, _loaiNguoiDung, _soNgayLam, _luongNgay);
  return nguoiDung;
}

function layInputKhachHang() {
  var _taiKhoan = document.getElementById("taiKhoan").value;
  var _hoTen = document.getElementById("hoTen").value;
  var _email = document.getElementById("email").value;
  var _diaChi = document.getElementById("diaChi").value;
  var _loaiNguoiDung = document.getElementById("loaiNguoiDung").value;
  var _tenCongTy = document.getElementById("tenCongTy").value;
  var _triGiaHoaDon = document.getElementById("triGiaHoaDon").value;
  var _danhGia = document.getElementById("danhGia").value;
  var nguoiDung = new user(_taiKhoan, _hoTen, _email, _diaChi, _loaiNguoiDung, _tenCongTy, _triGiaHoaDon, _danhGia);
  return nguoiDung;
}

function saveStorage(arrNguoiDung) {
  localStorage.setItem("arrNguoiDung", JSON.stringify(arrNguoiDung));
}

function getStorage() {
  var arrNguoiDungLocal = JSON.parse(localStorage.getItem("arrNguoiDung"));

  if (arrNguoiDungLocal != null) {
    arrNguoiDung = arrNguoiDungLocal;
  }
}