class Person {
  __name = 1
  constructor(parameters: any) {
    console.log(parameters)
  }
  get name(){
    return this.__name
  }
  set name(arg){
     this.__name = arg
  }
  getName(){

  }
}