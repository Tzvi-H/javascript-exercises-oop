let Account = {
  init(email, userPassword, firstName, lastName) {
    this.displayName = this.createDisplayName();

    this.email = function(password) {
      return userPassword === password ? email : 'Invalid Password';
    };

    this.firstName = function(password) {
      return userPassword === password ? firstName : 'Invalid Password';
    };

    this.lastName = function(password) {
      return userPassword === password ? lastName : 'Invalid Password';
    };

    this.resetPassword = function(oldPassword, newPassword) {
      if (userPassword === oldPassword) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    };

    this.reanonymize = function(password) {
      if (userPassword === password) {
        this.displayName = this.createDisplayName();
        return true;
      } else {
        return 'Invalid Password';
      }
    };

    return this;
  },

  createDisplayName() {
    let displayName = '';
    for (let i = 1; i <= 16; i += 1) {
      let randomNumber = Math.floor(Math.random() * 26);
      displayName += String.fromCharCode(97 + randomNumber);
    }
    return displayName;
  }
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false