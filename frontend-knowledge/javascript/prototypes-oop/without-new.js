function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.incrementScore = function () {
  this.score++;
};

let user1 = new userCreator("anil", 89);

console.log(user1);

function userCreator2(name, score) {
  let newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

let functionStore = {
  incrementScore: () => {
    this.score++;
  }
};

let user2 = userCreator2("me", 9999);

console.log(user2);
