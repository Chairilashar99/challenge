import Main, { rl } from "../challenge18Main.js";
import table from "cli-table";
import Matakuliah from "../Model/Matakuliah.js";
import ViewAwal from "../View/ViewUser.js";
import ViewMatakuliah from "../View/ViewMatakuliah.js";
export default class ControllerMatakuliah {
    static menuMatakuliah() {
        ViewMatakuliah.menuMatakuliah()
        rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
            if (input2 == 1) {
                ControllerMatakuliah.daftarMatakuliah()
            }
            else if (input2 == 2) {
                ControllerMatakuliah.cariMatakuliah()
            }
            else if (input2 == 3) {
                ControllerMatakuliah.tambahMatakuliah()
            }
            else if (input2 == 4) {
                ControllerMatakuliah.hapusMatakuliah()
            }
            else if (input2 == 5) {
                Main.menuUtama()
            }
            else {
                console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
                ControllerMatakuliah.menuMatakuliah()
            }
        })
    }

    //===============================================================================================

    static daftarMatakuliah() {
        let tablematakuliah = new table({
            head: ['Kodematakuliah', 'Nama', 'SKS'],
            colWidths: [20, 20, 20]
        });
        ViewAwal.line()
        Matakuliah.listMatakuliah(function (err, rows) {
            if (err) {
                console.log('data anda error', err)
                process.exit(1)
            }
            else if (rows.length > 0) {
                rows.forEach((matakuliah => {
                    tablematakuliah.push([matakuliah.Kodematakuliah, matakuliah.Nama, matakuliah.SKS])

                }))
                console.log(tablematakuliah.toString())
                ControllerMatakuliah.menuMatakuliah()

            }
        })
    }

    static cariMatakuliah() {
        ViewAwal.line()
        rl.question('Masukan Kodematakuliah: ', (inputCari) => {
            Matakuliah.searchMatakuliah(inputCari, (err, matakuliah) => {
                if (err) {
                    return console.log('Data error', err)
                }

                else if (matakuliah) {
                    ViewMatakuliah.detailMatakuliah(matakuliah)
                    ControllerMatakuliah.menuMatakuliah()
                } else {
                    console.log('Kodematakuliah tidak ditemukan')
                    ControllerMatakuliah.cariMatakuliah()
                }
            })
        })
    }

    static tambahMatakuliah() {
        ViewAwal.lengkapi()
        rl.question('Kodematakuliah: ', (inputTambah1) => {
            rl.question('Nama: ', (inputTambah2) => {
                rl.question('SKS: ', (inputTambah3) => {
                    Matakuliah.addMatakuliah(inputTambah1, inputTambah2, inputTambah3, (err) => {
                        if (err) {
                            console.log('Salah satu data sudah terisi', err)
                            ControllerMatakuliah.tambahMatakuliah()
                        } else {
                            ControllerMatakuliah.daftarMatakuliah()

                        }
                    })
                })
            })
        })
    }

    static hapusMatakuliah() {
        ViewAwal.line()
        rl.question('Masukkan Kodematakuliah yang akan dihapus: ', (inputdelete) => {
            Matakuliah.deleteMatakuliah(inputdelete, (err) => {
                if (err) {
                    console.log(`Gagal hapus Matakuliah`, err)


                } else {
                    console.log(`Matakuliah dengan Kodematakuliah ${inputdelete} telah di hapus`)
                    ControllerMatakuliah.daftarMatakuliah()
                }
            })
        })
    }
}
