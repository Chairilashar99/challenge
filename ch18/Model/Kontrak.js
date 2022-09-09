import { db } from "../challenge18Main.js";
export default class Kontrak {
    static listKontrak(callback) {
        db.all("SELECT * FROM Kontrak", (err, rows) => {
            callback(err, rows)
        });
    }

    static searchKontrak(inputCari, callback) {
        db.get("SELECT * FROM kontrak WHERE id=?", [inputCari], (err, kontrak) => {
            callback(err, kontrak)
        })
    }
    static addKontrak(inputTambah1, inputTambah2, inputTambah3, inputTambah4, inputTambah5, callback) {
        db.run(`INSERT INTO kontrak (id, nim, nidn, kodematakuliah, nilai) VALUES (?,?,?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3], [inputTambah4], [inputTambah5]], (err) => {
            callback(err)
        })

    }

    static deleteKontrak(inputdelete, callback) {
        db.run(`DELETE FROM kontrak WHERE id=?`, [inputdelete], (err) => {
            callback(err)
        })
    }
}