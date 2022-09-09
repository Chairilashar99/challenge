import ViewAwal from "./ViewUser.js";
export default class ViewJurusan {
    static menuJurusan() {
        ViewAwal.line()
        console.log('silahkan pilih opsi dibawah ini \n[1]DaftarJurusan \n[2]CariJurusan \n[3]TambahJurusan \n[4]HapusJurusan \n[5]Kembali')
        ViewAwal.line()
    }

    static detailJurusan(jurusan) {
        ViewAwal.line()
        console.log('major detail')
        ViewAwal.line()
        console.log(
            `
    Kodejurusan :${jurusan.Kodejurusan}
    Namajurusan :${jurusan.Namajurusan}\n`)
    }
}