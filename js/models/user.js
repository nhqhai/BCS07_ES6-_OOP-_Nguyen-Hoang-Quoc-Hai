// function NguoiDung(
//     _taiKhoan,
//     _hoTen,
//     _email,
//     _diaChi

// ){
//     this.taiKhoan = _taiKhoan;
//     this.hoTen = _hoTen;
//     this.email = _email;
//     this.diaChi = _diaChi;
// }

function SinhVien(
    _taiKhoan,
    _hoTen,
    _email,
    _diaChi,
    _diemToan,
    _diemLy,
    _diemHoa)
{
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.diaChi = _diaChi;
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
  }

// Tính điểm Trung Bình
this.tinhDiemTrungBinh = function () {
    return (this.diemHoa + this.diemLy + this.diemToan) / 3;
  };

  function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _diaChi,
    _luongNgay,
    _soNgaylam,
    )
{
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.diaChi = _diaChi;
    this.luongNgay = _luongNgay;
    this.soNgaylam = _soNgaylam;
}

// Tính Tổng Lương

this.tinhTongLuong = function(){
    return (this.luongNgay * this.soNgaylam);
};

function KhachHang(
    _taiKhoan,
    _hoTen,
    _email,
    _diaChi,
    _tenCongTy,
    _triGiaHoaDon,
    _danhGia
)
{
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.diaChi = _diaChi;
    this.tenCongTy = _tenCongTy;
    this.triGiaHoaDon = _triGiaHoaDon;
    this.danhGia = _danhGia;
}