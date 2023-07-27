---
layout: ../../../layouts/PostLayout.astro
title: 'Class编译结果分析'
---

### 编译前

```typescript
class Person {
  __name = 1
  constructor(parameters: any) {
    console.log(parameters)
  }
  get name(){
    return this.__name
  }
  set name(arg: number){
     this.__name = arg
  }
  getName(){

  }
}
```
tsconfig.json compilerOptions.target设置为"es5"，执行```npx tsc``` 

### 编译后

```javascript
"use strict";
var Person = (function () {
    function Person(parameters) {
        this.__name = 1;
        console.log(parameters);
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.__name;
        },
        set: function (arg) {
            this.__name = arg;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getName = function () {
    };
    return Person;
}());
```