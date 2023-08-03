// user class contains all the user information
// and methods to manipulate the user
// all the attributes are public
// the user has id, name, email, age, gender, medFile, and phoneNum
class User {
  constructor(id, name, email, age, gender, password, phoneNum, medFile) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.password = password;
    this.phoneNum = phoneNum;
    this.medFile = medFile;
  }
}

// create a static user that will be exported
// this user will be used to store the data of the user
// that is currently logged in
const user = new User();

// export the user
export default user;
