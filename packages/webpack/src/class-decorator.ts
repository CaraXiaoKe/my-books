function testOne(target: any){
  target.prototype.getName = function(){

  }
  return target
}
function testTwo(target: any){
  target.prototype.getName = function(){

  }
  console.log(target)
}

@testOne
@testTwo
class Animal {
  
}