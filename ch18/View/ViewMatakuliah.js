import ViewAwal from "./ViewUser.js";
export default class ViewMatakuliah {
    static menuMatakuliah() {
        ViewAwal.line()
        console.log('silahkan pilih opsi dibawah ini \n[1]DaftarMatakuliah \n[2]CariMatakuliah \n[3]TambahMatakuliah \n[4]HapusMatakuliah \n[5]Kembali')
        ViewAwal.line()
    }

    static detailMatakuliah(matakuliah) {
        ViewAwal.line()
        console.log('course detail')
        ViewAwal.line()
        console.log(
            `
    Kodematakuliah :${matakuliah.Kodematakuliah}
    Nama           :${matakuliah.Nama}
    SKS            :${matakuliah.SKS}\n`)
    }
}