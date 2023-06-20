var arrNguoiDung = [];

getStorage();



function renderGiaoDien(){
var content = "";
for (var i = 0; i < arrNguoiDung.length; i++) {
    var nguoiDung = new nguoiDung();
    var nguoiDungItem = arrNguoiDung[i];
    Object.assign(nguoiDung, nguoiDungItem);
    if (loaiNguoiDung === "Sinh Viên") {
        var tinhDiemTrungBinh = nguoiDung.tinhDiemTrungBinh();
        content += `
        <tr>
        <td>${nguoiDung.taiKhoan}</td>
        <td>${nguoiDung.hoTen}</td>
        <td>${nguoiDung.email}</td>
        <td>${nguoiDung.diaChi}</td>
        <td>${nguoiDung.diemToan}</td>
        <td>${nguoiDung.diemLy}</td>
        <td>${nguoiDung.diemHoa}</td>
        <td>${tinhdiemTrungBinh.toFixed(1)}</td>
        <td>
        <button onclick="xoaNguoiDung('${
            nguoiDung.taiKhoan
          }')" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button onclick="editNguoiDung('${
            nguoiDung.taiKhoan
          }')" class="btn btn-warning">
            <i class="fa-solid fa-pen"></i>
          </button>
        </td>
        </tr>
        `;
}
document.getElementById("tableDanhSachSinhVien").innerHTML = content;
if (loaiNguoiDung === "Nhân Viên") {
    var tinhTongLuong = nguoiDung.tinhTongLuong();
    content += `
    <tr>
    <td>${nguoiDung.taiKhoan}</td>
    <td>${nguoiDung.hoTen}</td>
    <td>${nguoiDung.email}</td>
    <td>${nguoiDung.diaChi}</td>
    <td>${nguoiDung.luongNgay}</td>
    <td>${nguoiDung.soNgayLam}</td>
    <td>${tinhTongLuong}</td>
    </td>
    <button onclick="xoaNguoiDung('${
        nguoiDung.taiKhoan
      }')" class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button onclick="editNguoiDung('${
        nguoiDung.taiKhoan
      }')" class="btn btn-warning">
        <i class="fa-solid fa-pen"></i>
      </button>
    </td>
    </tr>
    `;
}
document.getElementById("tableDanhSachNhanVien").innerHTML = content;
if (loaiNguoiDung === "Khách Hàng") {
    content += `
    <tr>
    <td>${nguoiDung.taiKhoan}</td>
    <td>${nguoiDung.hoTen}</td>
    <td>${nguoiDung.email}</td>
    <td>${nguoiDung.diaChi}</td>
    <td>${nguoiDung.tenCongTy}</td>
    <td>${nguoiDung.triGiaHoaDon}</td>
    <td>${nguoiDung.danhGia}</td>
    <td>
    <button onclick="xoaNguoiDung('${
        nguoiDung.taiKhoan
      }')" class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button onclick="editNguoiDung('${
        nguoiDung.taiKhoan
      }')" class="btn btn-warning">
        <i class="fa-solid fa-pen"></i>
      </button>
    </td>
    </tr>
    `;
};
document.getElementById("tableDanhSachKhachHang").innerHTML = content;
};
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