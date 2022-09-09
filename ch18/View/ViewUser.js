export default class ViewAwal {
    static line() {
        console.log('=============================================')
    }


    static menuUtama() {
        ViewAwal.line()
        console.log('silahkan pilih opsi dibawah ini \n[1]Mahasiswa \n[2]Jurusan \n[3]Dosen \n[4]Matakuliah \n[5]Kontrak \n[6]Keluar')
        ViewAwal.line()
    }

    static welcome() {
        ViewAwal.line()
        console.log('Welcome to University of Oxford\nJl. SetiaBudi no. 255')
        ViewAwal.line()
        

    }
    static lengkapi() {
        ViewAwal.line()
        console.log('lengkapi data di bawah ini:')
    }
}