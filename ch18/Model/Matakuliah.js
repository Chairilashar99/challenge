import { db } from "../challenge18Main.js";
export default class Matakuliah {
    static listMatakuliah(callback) {
        db.all("SELECT * FROM Matakuliah", (err, rows) => {
            callback(err, rows)
        });
    }

    static searchMatakuliah(inputCari, callback) {
        db.get("SELECT * FROM matakuliah WHERE kodematakuliah=?", [inputCari], (err, matakuliah) => {
            callback(err, matakuliah)
        })
    }
    static addMatakuliah(inputTambah1, inputTambah2, inputTambah3, callback) {
        db.run(`INSERT INTO matakuliah (kodematakuliah, nama, SKS) VALUES (?,?,?)`, [[inputTambah1], [inputTambah2], [inputTambah3]], (err) => {
            callback(err)
        })

    }

    static deleteMatakuliah(inputdelete, callback) {
        db.run(`DELETE FROM matakuliah WHERE Kodematakuliah=?`, [inputdelete], (err) => {
            callback(err)
        })
    }
}