import Main, { rl } from "../challenge18Main.js";
import table from "cli-table";
import Jurusan from "../Model/Jurusan.js";
import ViewAwal from "../View/ViewUser.js";
import ViewJurusan from "../View/ViewJurusan.js";
export default class ControllerJurusan {
  static menuJurusan() {
    ViewJurusan.menuJurusan()
    rl.question('Masukkan salah satu nomor dari opsi diatas:', (input2) => {
      if (input2 == 1) {
        ControllerJurusan.daftarJurusan()
      }
      else if (input2 == 2) {
        ControllerJurusan.cariJurusan()
      }
      else if (input2 == 3) {
        ControllerJurusan.tambahJurusan()
      }
      else if (input2 == 4) {
        ControllerJurusan.hapusJurusan()
      }
      else if (input2 == 5) {
        Main.menuUtama()
      }
      else {
        console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
        ControllerJurusan.menuJurusan()
      }
    })
  }

  //===============================================================================================

  static daftarJurusan() {
    let tablejurusan = new table({
      head: ['Kodejurusan', 'Namajurusan'],
      colWidths: [20, 20]
    });
    ViewAwal.line()
    Jurusan.listJurusan(function (err, rows) {
      if (err) {
        console.log('data eror', err)
        process.exit(1)
      }
      else if (rows.length > 0) {
        rows.forEach((jurusan => {
          tablejurusan.push([jurusan.Kodejurusan, jurusan.Namajurusan])

        }))
        console.log(tablejurusan.toString())
        ControllerJurusan.menuJurusan()

      }
    })
  }

  static cariJurusan() {
    ViewAwal.line()
    rl.question('Masukan Kodejurusan: ', (inputCari) => {
      Jurusan.searchJurusan(inputCari, (err, jurusan) => {
        if (err) {
          return console.log('Data error', err)
        }

        else if (jurusan) {
          ViewJurusan.detailJurusan(jurusan)
          ControllerJurusan.menuJurusan()
        } else {
          console.log('Kodejurusan tidak ditemukan')
          ControllerJurusan.cariJurusan()
        }
      })
    })
  }


  static tambahJurusan() {
    ViewAwal.lengkapi()
    rl.question('Kodejurusan: ', (inputTambah1) => {
      rl.question('Namajurusan: ', (inputTambah2) => {
        Jurusan.addJurusan(inputTambah1, inputTambah2, (err) => {
          if (err) {
            console.log('Salah satu data sudah terisi', err)
            ControllerJurusan.tambahJurusan()
          } else {
            ControllerJurusan.daftarJurusan()

          }
        })
      })
    })
  }

  static hapusJurusan() {
    ViewAwal.line()
    rl.question('Masukkan Kodejurusan yang akan dihapus: ', (inputdelete) => {
      Jurusan.deleteJurusan(inputdelete, (err) => {
        if (err) {
          console.log(`Gagal hapus Jurusan`, err)


        } else {
          console.log(`Jurusan dengan Kodejurusan ${inputdelete} telah di hapus`)
          ControllerJurusan.daftarJurusan()
        }
      })
    })
  }
}