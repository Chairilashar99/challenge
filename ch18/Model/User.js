import { db } from "../challenge18Main.js";
export default class User {
    static cariUsername(username, callback) {
        db.all("SELECT * FROM User where username= ?", [username], (err, data) => {
            callback(err, data)
        });
    }
}
