import ViewAwal from "./ViewUser.js";
export default class ViewDosen {
    static menuDosen() {
        ViewAwal.line()
        console.log('silahkan pilih opsi dibawah ini \n[1]DaftarDosen \n[2]CariDosen \n[3]TambahDosen \n[4]HapusDosen \n[5]Kembali')
        ViewAwal.line()
    }

    static detailDosen(dosen) {
        ViewAwal.line()
        console.log('lecture detail')
        ViewAwal.line()
        console.log(
            `
    NIDN        :${dosen.NIDN}
    NamaDosen   :${dosen.Namadosen}\n`)
    }
}