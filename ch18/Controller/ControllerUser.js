import User from "../Model/User.js";
import Main, { rl } from "../challenge18Main.js";
export default class UserController {
  static askUsername() {
    rl.question('Username: ', (username) => {
      User.cariUsername(username, (err, data) => {
        if (err) {
          console.log('username gagal', err)
          process.exit(1)
        } else if (data.length == 0) {
          console.log('username tidak ada')
          UserController.askUsername()

        } else {
          UserController.password(data[0])
        }
      })
    })
  }

  static password(param1) {
    rl.question('Password: ', (password) => {
      if (password === param1.password) {
        console.log(`\nWelcome ${param1.username}. Your access level is: ${param1.access}`)
        console.log('========================================================')
        Main.menuUtama()

      } else {
        console.log('Password Salah')
        UserController.password(param1)
      }
    })
  }
}
