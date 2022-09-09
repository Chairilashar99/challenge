import Main, { rl } from "../challenge18Main.js";
import table from "cli-table";
import Kontrak from "../Model/Kontrak.js";
import ViewAwal from "../View/ViewUser.js";
import ViewKontrak from "../View/ViewKontrak.js";
export default class ControllerKontrak {
  static menuKontrak() {
    ViewKontrak.menuKontrak()
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
      if (input2 == 1) {
        ControllerKontrak.daftarKontrak()
      }
      else if (input2 == 2) {
        ControllerKontrak.cariKontrak()
      }
      else if (input2 == 3) {
        ControllerKontrak.tambahKontrak()
      }
      else if (input2 == 4) {
        ControllerKontrak.hapusKontrak()
      }
      else if (input2 == 5) {
        Main.menuUtama()
      }
      else {
        console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
        ControllerKontrak.menuKontrak()
      }
    })
  }

  //===============================================================================================

  static daftarKontrak() {
    let tablekontrak = new table({
      head: ['id', 'NIM', 'NIDN', 'Kodematakuliah', 'Nilai'],
      colWidths: [20, 20, 20, 20, 20]
    });
    ViewAwal.line()
    Kontrak.listKontrak(function (err, rows) {
      if (err) {
        console.log('data eror', err)
        process.exit(1)
      }
      else if (rows.length > 0) {
        rows.forEach((kontrak => {
          tablekontrak.push([kontrak.id, kontrak.NIM, kontrak.NIDN, kontrak.Kodematakuliah, kontrak.Nilai])

        }))
        console.log(tablekontrak.toString())
        ControllerKontrak.menuKontrak()

      }
    })
  }

  static cariKontrak() {
    ViewAwal.line()
    rl.question('Masukan id: ', (inputCari) => {
      Kontrak.searchKontrak(inputCari, (err, kontrak) => {
        if (err) {
          return console.log('Data error', err)
        }

        else if (kontrak) {
          ViewKontrak.detailKontrak(kontrak)
          ControllerKontrak.menuKontrak()
        } else {
          console.log('id tidak ditemukan')
          ControllerKontrak.cariKontrak()
        }
      })
    })
  }

  static tambahKontrak() {
    ViewAwal.lengkapi()
    rl.question('id: ', (inputTambah1) => {
      rl.question('NIM: ', (inputTambah2) => {
        rl.question('NIDN: ', (inputTambah3) => {
          rl.question('Kodematakuliah: ', (inputTambah4) => {
            rl.question('Nilai: ', (inputTambah5) => {
              Kontrak.addKontrak(inputTambah1, inputTambah2, inputTambah3, inputTambah4, inputTambah5, (err) => {
                if (err) {
                  console.log('Salah satu data sudah terisi', err)
                  ControllerKontrak.tambahKontrak()
                } else {
                  ControllerKontrak.daftarKontrak()

                }
              })
            })
          })
        })
      })
    })
  }

  static hapusKontrak() {
    ViewAwal.line()
    rl.question('Masukkan id yang akan dihapus: ', (inputdelete) => {
      Kontrak.deleteKontrak(inputdelete, (err) => {
        if (err) {
          console.log(`Gagal hapus Kontrak`, err)


        } else {
          console.log(`Kontrak dengan id ${inputdelete} telah di hapus`)
          ControllerKontrak.daftarKontrak()
        }
      })
    })
  }
}