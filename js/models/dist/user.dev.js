"use strict";

function user(_taiKhoan, _hoTen, _email, _diaChi, _loaiNguoiDung, _diemToan, _diemLy, _diemHoa, _luongNgay, _soNgaylam, _tenCongTy, _triGiaHoaDon, _danhGia) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.diaChi = _diaChi;
  this.loaiNguoiDung = _loaiNguoiDung;

  if (_loaiNguoiDung === "Sinh Viên") {
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
  }

  if (_loaiNguoiDung === "Nhân Viên") {
    this.soNgayLam = _soNgaylam;
    this.luongNgay = _luongNgay;
  }

  if (_loaiNguoiDung === "Khách Hàng") {
    this.tenCongTy = _tenCongTy;
    this.triGiaHoaDon = _triGiaHoaDon;
    this.danhGia = _danhGia;
  }
}

(void 0).diemTrungBinh = function () {
  var diemTrungBinh = (diemToan + diemHoa + diemLy) / 3;
  return diemTrungBinh;
};

(void 0).tongLuong = function () {
  var tongLuong = soNgayLam * luongNgay;
  return tongLuong;
};