import { db } from "../challenge18Main.js";
export default class Dosen {
    static listDosen(callback) {
        db.all("SELECT * FROM Dosen", (err, rows) => {
            callback(err, rows)
        });
    }

    static searchDosen(inputCari, callback) {
        db.get("SELECT * FROM dosen WHERE nidn=?", [inputCari], (err, dosen) => {
            callback(err, dosen)
        })
    }
    static addDosen(inputTambah1, inputTambah2, callback) {
        db.run(`INSERT INTO dosen (nidn, namadosen) VALUES (?,?)`, [[inputTambah1], [inputTambah2]], (err) => {
            callback(err)
        })

    }

    static deleteDosen(inputdelete, callback) {
        db.run(`DELETE FROM dosen WHERE nidn=?`, [inputdelete], (err) => {
            callback(err)
        })
    }
}
