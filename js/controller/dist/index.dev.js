"use strict";

var arrNguoiDung = [];
getStorage();

function renderGiaoDien() {
  var content = "";

  for (var i = 0; i < arrNguoiDung.length; i++) {
    var nguoiDung = new nguoiDung();
    var nguoiDungItem = arrNguoiDung[i];
    Object.assign(nguoiDung, nguoiDungItem);

    if (loaiNguoiDung === "Sinh Viên") {
      var tinhDiemTrungBinh = nguoiDung.tinhDiemTrungBinh();
      content += "\n        <tr>\n        <td>".concat(nguoiDung.taiKhoan, "</td>\n        <td>").concat(nguoiDung.hoTen, "</td>\n        <td>").concat(nguoiDung.email, "</td>\n        <td>").concat(nguoiDung.diaChi, "</td>\n        <td>").concat(nguoiDung.diemToan, "</td>\n        <td>").concat(nguoiDung.diemLy, "</td>\n        <td>").concat(nguoiDung.diemHoa, "</td>\n        <td>").concat(tinhdiemTrungBinh.toFixed(1), "</td>\n        <td>\n        <button onclick=\"xoaNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-danger\">\n            <i class=\"fa-solid fa-trash\"></i>\n          </button>\n          <button onclick=\"editNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-warning\">\n            <i class=\"fa-solid fa-pen\"></i>\n          </button>\n        </td>\n        </tr>\n        ");
    }

    document.getElementById("tableDanhSachSinhVien").innerHTML = content;

    if (loaiNguoiDung === "Nhân Viên") {
      var tinhTongLuong = nguoiDung.tinhTongLuong();
      content += "\n    <tr>\n    <td>".concat(nguoiDung.taiKhoan, "</td>\n    <td>").concat(nguoiDung.hoTen, "</td>\n    <td>").concat(nguoiDung.email, "</td>\n    <td>").concat(nguoiDung.diaChi, "</td>\n    <td>").concat(nguoiDung.luongNgay, "</td>\n    <td>").concat(nguoiDung.soNgayLam, "</td>\n    <td>").concat(tinhTongLuong, "</td>\n    </td>\n    <button onclick=\"xoaNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-danger\">\n        <i class=\"fa-solid fa-trash\"></i>\n      </button>\n      <button onclick=\"editNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-warning\">\n        <i class=\"fa-solid fa-pen\"></i>\n      </button>\n    </td>\n    </tr>\n    ");
    }

    document.getElementById("tableDanhSachNhanVien").innerHTML = content;

    if (loaiNguoiDung === "Khách Hàng") {
      content += "\n    <tr>\n    <td>".concat(nguoiDung.taiKhoan, "</td>\n    <td>").concat(nguoiDung.hoTen, "</td>\n    <td>").concat(nguoiDung.email, "</td>\n    <td>").concat(nguoiDung.diaChi, "</td>\n    <td>").concat(nguoiDung.tenCongTy, "</td>\n    <td>").concat(nguoiDung.triGiaHoaDon, "</td>\n    <td>").concat(nguoiDung.danhGia, "</td>\n    <td>\n    <button onclick=\"xoaNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-danger\">\n        <i class=\"fa-solid fa-trash\"></i>\n      </button>\n      <button onclick=\"editNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-warning\">\n        <i class=\"fa-solid fa-pen\"></i>\n      </button>\n    </td>\n    </tr>\n    ");
    }

    ;
    document.getElementById("tableDanhSachKhachHang").innerHTML = content;
  }

  ;
}

renderGiaoDien();

function themNguoiDung() {
  var nguoiDung = layGiaTriInput();

  if (loaiNguoiDung === "Sinh Viên") {
    arrNguoiDung.push(nguoiDung);
    saveStorage(arrNguoiDung);
    renderGiaoDien();
    ganGiaTriChoInput("", "", "", "", "", "", "", "");
  }

  if (loaiNguoiDung === "Nhân Viên") {
    arrNguoiDung.push(nguoiDung);
    saveStorage(arrNguoiDung);
    renderGiaoDien();
    ganGiaTriChoInput("", "", "", "", "", "", "");
  }

  if (loaiNguoiDung === "Khách Hàng") {
    arrNguoiDung.push(nguoiDung);
    saveStorage(arrNguoiDung);
    renderGiaoDien();
    ganGiaTriChoInput("", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNguoiDung").onclick = themNguoiDung;