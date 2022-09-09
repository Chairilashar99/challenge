import ViewAwal from "./ViewUser.js";
export default class ViewKontrak {
    static menuKontrak() {
        ViewAwal.line()
        console.log('silahkan pilih opsi dibawah ini \n[1]DaftarKontrak \n[2]CariKontrak \n[3]TambahKontrak \n[4]HapusKontrak \n[5]Kembali')
        ViewAwal.line()
    }

    static detailKontrak(kontrak) {
        ViewAwal.line()
        console.log('kontrak detail')
        ViewAwal.line()
        console.log(
            `
    id             :${kontrak.id}
    NIM            :${kontrak.NIM}
    NIDN           :${kontrak.NIDN}
    Kodematakuliah :${kontrak.Kodematakuliah}
    Nilai          :${kontrak.Nilai}\n`)
    }
}