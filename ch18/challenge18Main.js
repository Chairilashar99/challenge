import sqlite3 from 'sqlite3';
import readline from 'readline';
import table from 'cli-table';
import ControllerDosen from "./Controller/ControllerDosen.js";
import ControllerJurusan from "./Controller/ControllerJurusan.js";
import ControllerKontrak from "./Controller/ControllerKontrak.js";
import ControllerMahasiswa from "./Controller/ControllerMahasiswa.js";
import ControllerMatakuliah from "./Controller/ControllerMatakuliah.js";
import ControllerUser from "./Controller/ControllerUser.js";
import ViewAwal from './View/ViewUser.js';
import UserController from './Controller/ControllerUser.js';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


export const db = new sqlite3.Database('./challenge18.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) { console.log('gagal terhubung', err) };
});



export default class Main {
static menuUtama() {
    ViewAwal.menuUtama()
    rl.question('masukkan salah satu no.dari opsi diatas:', (input1) => {
      if (input1 == 1) {
        ControllerMahasiswa.menuMahasiswa()
      }
      else if (input1 == 2) {
        ControllerJurusan.menuJurusan()
      }
      else if (input1 == 3) {
        ControllerDosen.menuDosen()
      }
      else if (input1 == 4) {
        ControllerMatakuliah.menuMatakuliah()
      }
      else if (input1 == 5) {
        ControllerKontrak.menuKontrak()
      }
      else if (input1 == 6) {
        process.exit(0)
      }
      else {
        console.log('\n data tidak ada \n')
        Main.menuUtama()
      }
    });
  }

  static login() {
    ViewAwal.welcome()
    UserController.askUsername()
  }
}

Main.login()