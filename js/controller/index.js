var arrNguoiDung = [];

getStorage();

renderGiaoDien();

function renderGiaoDien(){
    var content ="";
    if (loaiNguoiDung === "Sinh Viên") {
        for (var i = 0; i < arrNguoiDung.length; i++){
            var nguoiDung = new user();
            var nguoidDungItem = arrNguoiDung[i];
            Object.assign(nguoiDung, nguoidDungItem);
            var diemTrungBinh = nguoiDung.diemTrungBinh();
                content += `
                <tr>
                    <td>${nguoiDung.taiKhoan}</td>
                    <td>${nguoiDung.hoTen}</td>
                    <td>${nguoiDung.email}</td>
                    <td>${nguoiDung.diaChi}</td>
                    <td>${nguoiDung.diemToan}</td>
                    <td>${nguoiDung.diemHoa}</td>
                    <td>${nguoiDung.diemLy}</td>
                    <td>${diemTrungBinh}</td>
                    <td>
                        <button onclick="xoaNguoiDung('${
                          nguoiDung.taiKhoan
                        }')" class="btn btn-danger mb-2">
                          Delete
                        </button>
                        <button onclick="editSinhVien('${
                            nguoiDung.taiKhoan
                          }')" class="btn btn-warning mb-2">
                            Edit
                          </button>
                    </td>
                </td>
                `;
            }
            document.getElementById("tableDanhSachSinhVien").innerHTML = content;
    }
    if (loaiNguoiDung === "Nhân Viên") {
        for (var i = 0; i < arrNguoiDung.length; i++){
            var nguoiDung = new user();
            var nguoidDungItem = arrNguoiDung[i];
            Object.assign(nguoiDung, nguoidDungItem);
            var diemTrungBinh = nguoiDung.diemTrungBinh();
                content += `
                <tr>
                    <td>${nguoiDung.taiKhoan}</td>
                    <td>${nguoiDung.hoTen}</td>
                    <td>${nguoiDung.email}</td>
                    <td>${nguoiDung.diaChi}</td>
                    <td>${nguoiDung.soNgayLam}</td>
                    <td>${tongLuong}</td>
                    <td>
                        <button onclick="xoaNguoiDung('${
                          nguoiDung.taiKhoan
                        }')" class="btn btn-danger mb-2">
                          Delete
                        </button>
                        <button onclick="editSinhVien('${
                            nguoiDung.taiKhoan
                          }')" class="btn btn-warning mb-2">
                            Edit
                          </button>
                    </td>
                </td>
                `;
            }
            document.getElementById("tableDanhSachNhanVien").innerHTML = content;
    }
    if (loaiNguoiDung === "Khách Hàng") {
        for (var i = 0; i < arrNguoiDung.length; i++){
            var nguoiDung = new user();
            var nguoidDungItem = arrNguoiDung[i];
            Object.assign(nguoiDung, nguoidDungItem);
            var diemTrungBinh = nguoiDung.diemTrungBinh();
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
                        }')" class="btn btn-danger mb-2">
                          Delete
                        </button>
                        <button onclick="editSinhVien('${
                            nguoiDung.taiKhoan
                          }')" class="btn btn-warning mb-2">
                            Edit
                          </button>
                    </td>
                </td>
                `;
            }
            document.getElementById("tableDanhSachKhachHang").innerHTML = content;
    }
}

function themNguoiDung(){
    var nguoiDung = layInputSinhVien();
    if(loaiNguoiDung === "Sinh Viên"){
        arrNguoiDung.push(nguoiDung);
        saveStorage(arrNguoiDung);
        renderGiaoDien();
        ganInputSinhVien("","","","","","","");
    }
    var nguoiDung = layInputNhanVien();
    if(loaiNguoiDung === "Nhân Viên"){
        arrNguoiDung.push(nguoiDung);
        saveStorage(arrNguoiDung);
        renderGiaoDien();
        ganInputNhanVien("","","","","","");
    }
    var nguoiDung = layInputKhachHang();
    if(loaiNguoiDung === "Khách Hàng"){
        arrNguoiDung.push(nguoiDung);
        saveStorage(arrNguoiDung);
        renderGiaoDien();
        ganInputKhachHang("","","","","","","");
    }
}
document.getElementById("btnThemNguoiDung").onclick = themNguoiDung;
