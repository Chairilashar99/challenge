import sqlite3 from 'sqlite3';
import readline from 'readline';
import  table from 'cli-table';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const db = new sqlite3.Database('./challenge18.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) { console.log('gagal terhubung', err) };
});


//===============================================================================================
//User

askUsername()


function askUsername() {
  console.log('=============================================')
  console.log('Welcome to University California\nJl. SetiaBudi no. 255')
  rl.question('Username: ', (username) => {
    db.all("SELECT * FROM User where username= ?", [username], (err, data) => {
      if (err) {
        console.log('username gagal', err)
        process.exit(1)
      } else if (data.length == 0) {
        console.log('username tidak ada')
        askUsername()

      } else {
        password(data[0])
      }
    })
  })
}

function password(param1) {
  rl.question('Password: ', (password) => {
    if (password === param1.password) {
      console.log(`\nWelcome ${param1.username}. Your access level is: ${param1.access}`)
      console.log('========================================================')
      menuUtama()

    } else {
      console.log('Password Salah')
      password()
    }
  })
}

//===============================================================================================
//Menu

function menuUtama() {
  console.log('silahkan pilih opsi dibawah ini \n[1]Mahasiswa \n[2]Jurusan \n[3]Dosen \n[4]Matakuliah \n[5]Kontrak \n[6]Keluar')
  rl.question('masukkan salah satu no.dari opsi diatas:', (input1) => {
    if (input1 == 1) {
      menuMahasiswa()
    }
    else if (input1 == 2) {
      menuJurusan()
    }
    else if (input1 == 3) {
      menuDosen()
    }
    else if (input1 == 4) {
      menuMatakuliah()
    }
    else if (input1 == 5) {
      menuKontrak()
    }
    else if (input1 == 6) {
      process.exit(0)
    }
    else {
      console.log('\n data tidak ada \n')
      menuUtama()
    }
  });
}

function menuMahasiswa() {
  console.log('silahkan pilih opsi dibawah ini \n[1]DaftarMahasiswa \n[2]CariMahasiswa \n[3]TambahMahasiswa \n[4]HapusMahasiswa \n[5]Kembali')
  rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
    if (input2 == 1) {
      daftarMahasiswa()
    }
    else if (input2 == 2) {
      cariMahasiswa()
    }
    else if (input2 == 3) {
      tambahMahasiswa()
    }
    else if (input2 == 4) {
      hapusMahasiswa()
    }
    else if (input2 == 5) {
      menuUtama()
    }
    else {
      console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
      menuMahasiswa()
    }
  })
}

function menuJurusan() {
  console.log('silahkan pilih opsi dibawah ini \n[1]DaftarJurusan \n[2]CariJurusan \n[3]TambahJurusan \n[4]HapusJurusan \n[5]Kembali')
  rl.question('Masukkan salah satu nomor dari opsi diatas:', (input2) => {
    if (input2 == 1) {
      daftarJurusan()
    }
    else if (input2 == 2) {
      cariJurusan()
    }
    else if (input2 == 3) {
      tambahJurusan()
    }
    else if (input2 == 4) {
      hapusJurusan()
    }
    else if (input2 == 5) {
      menuUtama()
    }
    else {
      console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
      menuJurusan()
    }
  })
}

function menuDosen() {
  console.log('silahkan pilih opsi dibawah ini \n[1]DaftarDosen \n[2]CariDosen \n[3]TambahDosen \n[4]HapusDosen \n[5]Kembali')
  rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
    if (input2 == 1) {
      daftarDosen()
    }
    else if (input2 == 2) {
      cariDosen()
    }
    else if (input2 == 3) {
      tambahDosen()
    }
    else if (input2 == 4) {
      hapusDosen()
    }
    else if (input2 == 5) {
      menuUtama()
    }
    else {
      console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
      menuDosen()
    }
  })
}

function menuMatakuliah() {
  console.log('silahkan pilih opsi dibawah ini \n[1]DaftarMatakuliah \n[2]CariMatakuliah \n[3]TambahMatakuliah \n[4]HapusMatakuliah \n[5]Kembali')
  rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
    if (input2 == 1) {
      daftarMatakuliah()
    }
    else if (input2 == 2) {
      cariMatakuliah()
    }
    else if (input2 == 3) {
      tambahMatakuliah()
    }
    else if (input2 == 4) {
      hapusMatakuliah()
    }
    else if (input2 == 5) {
      menuUtama()
    }
    else {
      console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
      menuMatakuliah()
    }
  })
}

function menuKontrak() {
  console.log('silahkan pilih opsi dibawah ini \n[1]DaftarKontrak \n[2]CariKontrak \n[3]TambahKontrak \n[4]HapusKontrak \n[5]Kembali')
  rl.question('Masukkan salah satu nomor dari opsi diatas: ', (input2) => {
    if (input2 == 1) {
      daftarKontrak()
    }
    else if (input2 == 2) {
      cariKontrak()
    }
    else if (input2 == 3) {
      tambahKontrak()
    }
    else if (input2 == 4) {
      hapusKontrak()
    }
    else if (input2 == 5) {
      menuUtama()
    }
    else {
      console.log(`\n${input2} tidak terdaftar dalam pilihan\n`)
      menuKontrak()
    }
  })
}

//===============================================================================================
//Mahasiswa

function daftarMahasiswa() {
  let tablemahasiswa = new table({
    head: ['NIM', 'NAMA', 'ALAMAT', 'JURUSAN'],
    colWidths: [20, 20, 20, 20]
  });
  console.log('===========================================')
  db.all("SELECT * FROM Mahasiswa", (err, rows) => {
    if(err) {
      console.log('data anda error', err)
      process.exit(0)
    }
      else if(rows.length > 0) {
    rows.forEach((mahasiswa => {
      tablemahasiswa.push([mahasiswa.NIM, mahasiswa.Nama, mahasiswa.Alamat, mahasiswa.Jurusan])

    }))
    try {
      console.log(tablemahasiswa.toString())
    } catch (error) {
      console.log(error)
    }
    
    menuMahasiswa()
  }
})
}

function cariMahasiswa() {
  console.log('===========================================')
  rl.question('Masukan NIM: ', (inputCari) => {
    db.get("SELECT * FROM mahasiswa WHERE nim=?", [inputCari], (err, mahasiswa) => {
      if (err) {
        return console.log('Data error', err)
      }

      else if (mahasiswa) {
        console.log('===========================================')
        console.log('student detail')
        console.log('===========================================')
        console.log(
          `
      NIM         :${mahasiswa.NIM}
      Nama        :${mahasiswa.Nama}
      Alamat      :${mahasiswa.Alamat}
      Jurusan     :${mahasiswa.Jurusan}\n`)

      menuMahasiswa()

      } else {
        console.log('NIM tidak ditemukan')
        cariMahasiswa()
      }
    })
  })
}

function tambahMahasiswa() {
  console.log('lengkapi data di bawah ini:')
  rl.question('NIM: ', (inputTambah1) => {
    rl.question('Nama: ', (inputTambah2) => {
      rl.question('Alamat: ', (inputTambah3) => {
        rl.question('Jurusan: ', (inputTambah4) => {
          db.run(`INSERT INTO mahasiswa (nim, nama, alamat, jurusan) VALUES (?,?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4]], (err) => {
            if (err) {
              console.log('Salah satu data sudah terisi', err)
              tambahMahasiswa()
            } else {
              daftarMahasiswa()

            }
          })
        })
      })
    })
  })
}


function hapusMahasiswa() {
  console.log('===========================================')
  rl.question('Masukkan NIM mahasiswa yang akan dihapus: ', (inputdelete) => {
    db.run(`DELETE FROM mahasiswa WHERE nim=?`, [inputdelete], (err) => {
      if (err) {
        console.log(`Gagal hapus Mahasiswa`, err)


      } else {
        console.log(`Mahasiswa dengan nim ${inputdelete} telah di hapus`)
        daftarMahasiswa()
      }
    })
  })
}

//===============================================================================================
//Jurusan

function daftarJurusan() {
  let tablejurusan = new table({
    head: ['Kodejurusan', 'Namajurusan'],
    colWidths: [20, 20]
  });
  console.log('===========================================')
  db.all("SELECT * FROM Jurusan", (err, rows) => {
    if(err) {
      console.log('data eror', err)
      process.exit(1)
    }
  else if(rows.length > 0) {
    rows.forEach((jurusan => {
      tablejurusan.push([jurusan.Kodejurusan, jurusan.Namajurusan])

    }))
    console.log(tablejurusan.toString())
    menuJurusan()

  }
})
}

function cariJurusan() {
  console.log('===========================================')
  rl.question('Masukan Kodejurusan: ', (inputCari) => {
    db.get("SELECT * FROM jurusan WHERE kodejurusan=?", [inputCari], (err, jurusan) => {
      if (err) {
        return console.log('Data error', err)
      }

      else if (jurusan) {
        console.log('===========================================')
        console.log('major detail')
        console.log('===========================================')
        console.log(
          `
      Kodejurusan :${jurusan.Kodejurusan}
      Namajurusan   :${jurusan.Namajurusan}\n`)

      menuJurusan()
      } else {
        console.log('Kodejurusan tidak ditemukan')
        cariJurusan()
      }
    })
  })
}


function tambahJurusan() {
  console.log('lengkapi data di bawah ini:')
  rl.question('Kodejurusan: ', (inputTambah1) => {
    rl.question('Namajurusan: ', (inputTambah2) => {
      db.run(`INSERT INTO jurusan (kodejurusan, namajurusan) VALUES (?,?)`, [[inputTambah1], [inputTambah2]], (err) => {
        if (err) {
          console.log('Salah satu data sudah terisi', err)
          tambahJurusan()
        } else {
          daftarJurusan()

        }
      })
    })
  })
}

function hapusJurusan() {
  console.log('===========================================')
  rl.question('Masukkan Kodejurusan yang akan dihapus: ', (inputdelete) => {
    db.run(`DELETE FROM jurusan WHERE kodejurusan=?`, [inputdelete], (err) => {
      if (err) {
        console.log(`Gagal hapus Jurusan`, err)


      } else {
        console.log(`Jurusan dengan Kodejurusan ${inputdelete} telah di hapus`)
        daftarJurusan()
      }
    })
  })
}

//===============================================================================================
//Dosen

function daftarDosen() {
  let tabledosen = new table({
    head: ['NIDN', 'NamaDosen'],
    colWidths: [20, 20]
  });
  console.log('===========================================')
  db.all("SELECT * FROM Dosen", (err, rows) => {
    if(err) {
      console.log('data eror', err)
      process.exit(0)
    }
  else if(rows.length > 0) {
    rows.forEach((dosen => {
      tabledosen.push([dosen.NIDN, dosen.Namadosen])

    }))
    console.log(tabledosen.toString())

    menuDosen()
  }
})
}

function cariDosen() {
  console.log('===========================================')
  rl.question('Masukan NIDN: ', (inputCari) => {
    db.get("SELECT * FROM dosen WHERE nidn=?", [inputCari], (err, dosen) => {
      if (err) {
        return console.log('Data error', err)
      }

      else if (dosen) {
        console.log('===========================================')
        console.log('lecture detail')
        console.log('===========================================')
        console.log(
          `
      NIDN        :${dosen.NIDN}
      NamaDosen   :${dosen.Namadosen}\n`)

      menuDosen()
      } else {
        console.log('NIDN tidak ditemukan')
        cariDosen()
      }
    })
  })
}

function tambahDosen() {
  console.log('lengkapi data di bawah ini:')
  rl.question('NIDN: ', (inputTambah1) => {
    rl.question('Namadosen: ', (inputTambah2) => {
      db.run(`INSERT INTO dosen (nidn, namadosen) VALUES (?,?)`, [[inputTambah1], [inputTambah2]], (err) => {
        if (err) {
          console.log('Salah satu data sudah terisi', err)
          tambahDosen()
        } else {
          daftarDosen()

        }
      })
    })
  })
}

function hapusDosen() {
  console.log('===========================================')
  rl.question('Masukkan NIDN dosen yang akan dihapus: ', (inputdelete) => {
    db.run(`DELETE FROM dosen WHERE nidn=?`, [inputdelete], (err) => {
      if (err) {
        console.log(`Gagal hapus Dosen`, err)


      } else {
        console.log(`Dosen dengan NIDN ${inputdelete} telah di hapus`)
        daftarDosen()
      }
    })
  })
}


//===============================================================================================
//Matakuliah

function daftarMatakuliah() {
  let tablematakuliah = new table({
    head: ['Kodematakuliah', 'Nama', 'SKS'],
    colWidths: [20, 20, 20]
  });
  console.log('===========================================')
  db.all("SELECT * FROM Matakuliah", (err, rows) => {
    if(err) {
      console.log('data anda error', err)
      process.exit(1)
    }
      else if(rows.length > 0) {
    rows.forEach((matakuliah => {
      tablematakuliah.push([matakuliah.Kodematakuliah, matakuliah.Nama, matakuliah.SKS])

    }))
    console.log(tablematakuliah.toString())
    menuMatakuliah()

  }
})
}

function cariMatakuliah() {
  console.log('===========================================')
  rl.question('Masukan Kodematakuliah: ', (inputCari) => {
    db.get("SELECT * FROM matakuliah WHERE kodematakuliah=?", [inputCari], (err, matakuliah) => {
      if (err) {
        return console.log('Data error', err)
      }

      else if (matakuliah) {
        console.log('===========================================')
        console.log('course detail')
        console.log('===========================================')
        console.log(
          `
      Kodematakuliah :${matakuliah.Kodematakuliah}
      Nama           :${matakuliah.Nama}
      SKS            :${matakuliah.SKS}\n`)

      menuMatakuliah()
      } else {
        console.log('Kodematakuliah tidak ditemukan')
        cariMatakuliah()
      }
    })
  })
}

function tambahMatakuliah() {
  console.log('lengkapi data di bawah ini:')
  rl.question('Kodematakuliah: ', (inputTambah1) => {
    rl.question('Nama: ', (inputTambah2) => {
      rl.question('SKS: ', (inputTambah3) => {
        db.run(`INSERT INTO matakuliah (kodematakuliah, nama, SKS) VALUES (?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3]], (err) => {
          if (err) {
            console.log('Salah satu data sudah terisi', err)
            tambahMatakuliah()
          } else {
            daftarMatakuliah()

          }
        })
      })
    })
  })
}

function hapusMatakuliah() {
  console.log('===========================================')
  rl.question('Masukkan Kodematakuliah yang akan dihapus: ', (inputdelete) => {
    db.run(`DELETE FROM matakuliah WHERE Kodematakuliah=?`, [inputdelete], (err) => {
      if (err) {
        console.log(`Gagal hapus Matakuliah`, err)


      } else {
        console.log(`Matakuliah dengan Kodematakuliah ${inputdelete} telah di hapus`)
        daftarMatakuliah()
      }
    })
  })
}

//===============================================================================================
//Kontrak

function daftarKontrak() {
  let tablekontrak = new table({
    head: ['id', 'NIM', 'NIDN', 'Kodematakuliah', 'Nilai'],
    colWidths: [20, 20, 20, 20, 20]
  });
  console.log('===========================================')
  db.all("SELECT * FROM Kontrak", (err, rows) => {
    if(err) {
      console.log('data eror', err)
      process.exit(1)
    }
  else if(rows.length > 0) {
    rows.forEach((kontrak => {
      tablekontrak.push([kontrak.id, kontrak.NIM, kontrak.NIDN, kontrak.Kodematakuliah, kontrak.Nilai])

    }))
    console.log(tablekontrak.toString())
    menuKontrak()

  }
})
}

function cariKontrak() {
  console.log('===========================================')
  rl.question('Masukan id: ', (inputCari) => {
    db.get("SELECT * FROM kontrak WHERE id=?", [inputCari], (err, kontrak) => {
      if (err) {
        return console.log('Data error', err)
      }

      else if (kontrak) {
        console.log('===========================================')
        console.log('kontrak detail')
        console.log('===========================================')
        console.log(
          `
      id             :${kontrak.id}
      NIM            :${kontrak.NIM}
      NIDN           :${kontrak.NIDN}
      Kodematakuliah :${kontrak.Kodematakuliah}
      Nilai          :${kontrak.Nilai}\n`)

      menuKontrak()
      } else {
        console.log('id tidak ditemukan')
        cariKontrak()
      }
    })
  })
}

function tambahKontrak() {
  console.log('lengkapi data di bawah ini:')
  rl.question('id: ', (inputTambah1) => {
    rl.question('NIM: ', (inputTambah2) => {
      rl.question('NIDN: ', (inputTambah3) => {
        rl.question('Kodematakuliah: ', (inputTambah4) => {
          rl.question('Nilai: ', (inputTambah5) => {
            db.run(`INSERT INTO kontrak (id, nim, nidn, kodematakuliah, nilai) VALUES (?,?,?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4], [inputTambah5]], (err) => {
              if (err) {
                console.log('Salah satu data sudah terisi', err)
                tambahKontrak()
              } else {
                daftarKontrak()

              }
            })
          })
        })
      })
    })
  })
}

function hapusKontrak() {
  console.log('===========================================')
  rl.question('Masukkan id yang akan dihapus: ', (inputdelete) => {
    db.run(`DELETE FROM kontrak WHERE id=?`, [inputdelete], (err) => {
      if (err) {
        console.log(`Gagal hapus Kontrak`, err)


      } else {
        console.log(`Kontrak dengan id ${inputdelete} telah di hapus`)
        daftarKontrak()
      }
    })
  })
}
