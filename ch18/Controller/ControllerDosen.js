import Main, { rl } from "../challenge18Main.js";
import table from "cli-table";
import Dosen from "../Model/Dosen.js";
import ViewAwal from "../View/ViewUser.js";
import ViewDosen from "../View/ViewDosen.js";
export default class ControllerDosen {
  static menuDosen() {
    ViewDosen.menuDosen()
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
      if (input2 == 1) {
        ControllerDosen.daftarDosen()
      }
      else if (input2 == 2) {
        ControllerDosen.cariDosen()
      }
      else if (input2 == 3) {
        ControllerDosen.tambahDosen()
      }
      else if (input2 == 4) {
        ControllerDosen.hapusDosen()
      }
      else if (input2 == 5) {
        Main.menuUtama()
      }
      else {
        console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
        ControllerDosen.menuDosen()
      }
    })
  }

  //===============================================================================================

  static daftarDosen() {
    let tabledosen = new table({
      head: ['NIDN', 'NamaDosen'],
      colWidths: [20, 20]
    });
    ViewAwal.line()
    Dosen.listDosen(function (err, rows) {
      if (err) {
        console.log('data eror', err)
        process.exit(0)
      }
      else if (rows.length > 0) {
        rows.forEach((dosen => {
          tabledosen.push([dosen.NIDN, dosen.Namadosen])

        }))
        console.log(tabledosen.toString())

        ControllerDosen.menuDosen()
      }
    })
  }

  static cariDosen() {
    ViewAwal.line()
    rl.question('Masukan NIDN: ', (inputCari) => {
      Dosen.searchDosen(inputCari, (err, dosen) => {
        if (err) {
          return console.log('Data error', err)
        }

        else if (dosen) {
          ViewDosen.detailDosen(dosen)
          ControllerDosen.menuDosen()
        } else {
          console.log('NIDN tidak ditemukan')
          ControllerDosen.cariDosen()
        }
      })
    })
  }

  static tambahDosen() {
    ViewAwal.lengkapi()
    rl.question('NIDN: ', (inputTambah1) => {
      rl.question('Namadosen: ', (inputTambah2) => {
        Dosen.addDosen(inputTambah1, inputTambah2, (err) => {
          if (err) {
            console.log('Salah satu data sudah terisi', err)
            ControllerDosen.tambahDosen()
          } else {
            ControllerDosen.daftarDosen()

          }
        })
      })
    })
  }

  static hapusDosen() {
    ViewAwal.line()
    rl.question('Masukkan NIDN dosen yang akan dihapus: ', (inputdelete) => {
      Dosen.deleteDosen(inputdelete, (err) => {
        if (err) {
          console.log(`Gagal hapus Dosen`, err)


        } else {
          console.log(`Dosen dengan NIDN ${inputdelete} telah di hapus`)
          ControllerDosen.daftarDosen()
        }
      })
    })
  }
}
