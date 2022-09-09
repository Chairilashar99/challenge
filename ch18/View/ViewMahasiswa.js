import ViewAwal from "./ViewUser.js";
export default class ViewMahasiswa {
    static menuMahasiswa() {
        ViewAwal.line()
        console.log('silahkan pilih opsi dibawah ini \n[1]DaftarMahasiswa \n[2]CariMahasiswa \n[3]TambahMahasiswa \n[4]HapusMahasiswa \n[5]Kembali')
        ViewAwal.line()
    }

    static detailMahasiswa(mahasiswa) {
        ViewAwal.line()
        console.log('student detail')
        ViewAwal.line()
        console.log(
            `
NIM         :${mahasiswa.NIM}
Nama        :${mahasiswa.Nama}
Alamat      :${mahasiswa.Alamat}
Jurusan     :${mahasiswa.Jurusan}\n`)
    }
}