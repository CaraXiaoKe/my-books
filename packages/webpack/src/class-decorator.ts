function readOnly(target: any, name: any){
  // let __value: any
  // let isInit = false
  // return {
  //   configurable: false,
  //   enumerable: true,
  //   get: function(){
  //     return __value
  //   },
  //   set: function(value: any){
  //     if(value !== void 0 && !isInit){
  //       __value = value
  //       isInit = true
  //     }
  //   }
  // }
}
class Animal {
  @readOnly
  name: any = 11
}