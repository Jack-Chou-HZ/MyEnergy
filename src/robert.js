define([], function () {
  const robert = {
    name: 'Android',
    sayHello: function (guest) {
      console.log(`Hi ${guest}, I'm ${this.name}, welcome to the robert world!`)
    }
  }
  return robert
}
)
