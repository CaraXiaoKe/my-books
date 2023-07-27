---
layout: ../../../layouts/PostLayout.astro
title: 'Class类装饰器编译分析'
---

### 编译前

```typescript
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
```

tsconfig.json compilerOptions.target设置为"es5"，执行```npx tsc``` 

### 编译后

```javascript
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testOne(target) {
    target.prototype.getName = function () {
    };
    return target;
}
function testTwo(target) {
    target.prototype.getName = function () {
    };
    console.log(target);
}
var Animal = (function () {
    function Animal() {
    }
    Animal = __decorate([
        testOne,
        testTwo
    ], Animal);
    return Animal;
}());

```