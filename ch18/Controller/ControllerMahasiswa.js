import Main, { rl } from "../challenge18Main.js";
import table from "cli-table";
import Mahasiswa from "../Model/Mahasiswa.js";
import ViewAwal from "../View/ViewUser.js";
import ViewMahasiswa from "../View/ViewMahasiswa.js";
export default class ControllerMahasiswa {
  static menuMahasiswa() {
    ViewMahasiswa.menuMahasiswa()
    rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
      if (input2 == 1) {
        ControllerMahasiswa.daftarMahasiswa()
      }
      else if (input2 == 2) {
        ControllerMahasiswa.cariMahasiswa()
      }
      else if (input2 == 3) {
        ControllerMahasiswa.tambahMahasiswa()
      }
      else if (input2 == 4) {
        ControllerMahasiswa.hapusMahasiswa()
      }
      else if (input2 == 5) {
        Main.menuUtama()
      }
      else {
        console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
        ControllerMahasiswa.menuMahasiswa()
      }
    })
  }

  //===============================================================================================

  static daftarMahasiswa() {
    let tablemahasiswa = new table({
      head: ['NIM', 'NAMA', 'ALAMAT', 'JURUSAN'],
      colWidths: [20, 20, 20, 20]
    });
    ViewAwal.line()
    Mahasiswa.listMahasiswa(function (err, rows) {
      if (err) {
        console.log('data anda error', err)
        process.exit(0)
      }
      else if (rows.length > 0) {
        rows.forEach((mahasiswa => {
          tablemahasiswa.push([mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Alamat, mahasiswa.Jurusan])

        }))
        try {
          console.log(tablemahasiswa.toString())
        } catch (error) {
          console.log(error)
        }

        ControllerMahasiswa.menuMahasiswa()
      }
    })
  }

  static cariMahasiswa() {
    ViewAwal.line()
    rl.question('Masukan NIM: ', (inputCari) => {
      Mahasiswa.searchMahasiswa(inputCari, (err, mahasiswa) => {
        if (err) {
          return console.log('Data error', err)
        }

        else if (mahasiswa) {
          ViewMahasiswa.detailMahasiswa(mahasiswa)
          ControllerMahasiswa.menuMahasiswa()

        } else {
          console.log('NIM tidak ditemukan')
          ControllerMahasiswa.cariMahasiswa()
        }
      })
    })
  }

  static tambahMahasiswa() {
    ViewAwal.lengkapi()
    rl.question('NIM: ', (inputTambah1) => {
      rl.question('Nama: ', (inputTambah2) => {
        rl.question('Alamat: ', (inputTambah3) => {
          rl.question('Jurusan: ', (inputTambah4) => {
            Mahasiswa.addMahasiswa(inputTambah1, inputTambah2, inputTambah3, inputTambah4, (err) => {
              if (err) {
                console.log('Salah satu data sudah terisi', err)
                ControllerMahasiswa.tambahMahasiswa()
              } else {
                ControllerMahasiswa.daftarMahasiswa()

              }
            })
          })
        })
      })
    })
  }


  static hapusMahasiswa() {
    ViewAwal.line()
    rl.question('Masukkan NIM mahasiswa yang akan dihapus: ', (inputdelete) => {
      Mahasiswa.deleteMahasiswa(inputdelete, (err) => {
        if (err) {
          console.log(`Gagal hapus Mahasiswa`, err)


        } else {
          console.log(`Mahasiswa dengan nim ${inputdelete} telah di hapus`)
          ControllerMahasiswa.daftarMahasiswa()
        }
      })
    })
  }
}