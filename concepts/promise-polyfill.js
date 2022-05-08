class myPromise {
  constructor(func) {
    this.value;
    this.state = "pending";

    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    func(this.resolve, this.reject);
  }

  resolve(data) {
    this.state = "resolved";
    this.thenCallback ? this.thenCallback(data) : "";
  }

  reject(error) {
    this.state = "rejected";
    this.catchCallback ? this.catchCallback(error) : "";
  }

  then(thenCB) {
    this.thenCallback = thenCB;
  }

  catch(catchDB) {
    this.catchCallback = catchDB;
  }
}

let s = new myPromise((resolve, rejected) => {
  setTimeout(() => {
    resolve("my promise");
  }, 3000);
});

s.then((data) => {
  console.log(data);
});
