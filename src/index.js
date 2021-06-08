const x = () => Math.random()

class Test {
  constructor() {
    console.log(x())
  }
}

window.test = new Test()
