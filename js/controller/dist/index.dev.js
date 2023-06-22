"use strict";

var arrNguoiDung = [];
getStorage();
renderGiaoDien();

function renderGiaoDien() {
  var content = "";

  if (loaiNguoiDung === "Sinh Viên") {
    for (var i = 0; i < arrNguoiDung.length; i++) {
      var nguoiDung = new user();
      var nguoidDungItem = arrNguoiDung[i];
      Object.assign(nguoiDung, nguoidDungItem);
      var diemTrungBinh = nguoiDung.diemTrungBinh();
      content += "\n                <tr>\n                    <td>".concat(nguoiDung.taiKhoan, "</td>\n                    <td>").concat(nguoiDung.hoTen, "</td>\n                    <td>").concat(nguoiDung.email, "</td>\n                    <td>").concat(nguoiDung.diaChi, "</td>\n                    <td>").concat(nguoiDung.diemToan, "</td>\n                    <td>").concat(nguoiDung.diemHoa, "</td>\n                    <td>").concat(nguoiDung.diemLy, "</td>\n                    <td>").concat(diemTrungBinh, "</td>\n                    <td>\n                        <button onclick=\"xoaNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-danger mb-2\">\n                          Delete\n                        </button>\n                        <button onclick=\"editSinhVien('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-warning mb-2\">\n                            Edit\n                          </button>\n                    </td>\n                </td>\n                ");
    }

    document.getElementById("tableDanhSachSinhVien").innerHTML = content;
  }

  if (loaiNguoiDung === "Nhân Viên") {
    for (var i = 0; i < arrNguoiDung.length; i++) {
      var nguoiDung = new user();
      var nguoidDungItem = arrNguoiDung[i];
      Object.assign(nguoiDung, nguoidDungItem);
      var diemTrungBinh = nguoiDung.diemTrungBinh();
      content += "\n                <tr>\n                    <td>".concat(nguoiDung.taiKhoan, "</td>\n                    <td>").concat(nguoiDung.hoTen, "</td>\n                    <td>").concat(nguoiDung.email, "</td>\n                    <td>").concat(nguoiDung.diaChi, "</td>\n                    <td>").concat(nguoiDung.soNgayLam, "</td>\n                    <td>").concat(tongLuong, "</td>\n                    <td>\n                        <button onclick=\"xoaNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-danger mb-2\">\n                          Delete\n                        </button>\n                        <button onclick=\"editSinhVien('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-warning mb-2\">\n                            Edit\n                          </button>\n                    </td>\n                </td>\n                ");
    }

    document.getElementById("tableDanhSachNhanVien").innerHTML = content;
  }

  if (loaiNguoiDung === "Khách Hàng") {
    for (var i = 0; i < arrNguoiDung.length; i++) {
      var nguoiDung = new user();
      var nguoidDungItem = arrNguoiDung[i];
      Object.assign(nguoiDung, nguoidDungItem);
      var diemTrungBinh = nguoiDung.diemTrungBinh();
      content += "\n                <tr>\n                    <td>".concat(nguoiDung.taiKhoan, "</td>\n                    <td>").concat(nguoiDung.hoTen, "</td>\n                    <td>").concat(nguoiDung.email, "</td>\n                    <td>").concat(nguoiDung.diaChi, "</td>\n                    <td>").concat(nguoiDung.tenCongTy, "</td>\n                    <td>").concat(nguoiDung.triGiaHoaDon, "</td>\n                    <td>").concat(nguoiDung.danhGia, "</td>\n                    <td>\n                        <button onclick=\"xoaNguoiDung('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-danger mb-2\">\n                          Delete\n                        </button>\n                        <button onclick=\"editSinhVien('").concat(nguoiDung.taiKhoan, "')\" class=\"btn btn-warning mb-2\">\n                            Edit\n                          </button>\n                    </td>\n                </td>\n                ");
    }

    document.getElementById("tableDanhSachKhachHang").innerHTML = content;
  }
}

function themNguoiDung() {
  var nguoiDung = layInputSinhVien();

  if (loaiNguoiDung === "Sinh Viên") {
    arrNguoiDung.push(nguoiDung);
    saveStorage(arrNguoiDung);
    renderGiaoDien();
    ganInputSinhVien("", "", "", "", "", "", "");
  }

  var nguoiDung = layInputNhanVien();

  if (loaiNguoiDung === "Nhân Viên") {
    arrNguoiDung.push(nguoiDung);
    saveStorage(arrNguoiDung);
    renderGiaoDien();
    ganInputNhanVien("", "", "", "", "", "");
  }

  var nguoiDung = layInputKhachHang();

  if (loaiNguoiDung === "Khách Hàng") {
    arrNguoiDung.push(nguoiDung);
    saveStorage(arrNguoiDung);
    renderGiaoDien();
    ganInputKhachHang("", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNguoiDung").onclick = themNguoiDung;