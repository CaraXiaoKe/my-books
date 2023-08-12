---
layout: ../../../layouts/PostLayout.astro
title: 'TypeScript5.0 Class类装饰器编译分析'
---


## TypeScript5 新旧版装饰器差异
TypeScript5默认装饰器是按照新版编译，设置experimentalDecorators为true则按照旧版编译
- 新版装饰器，装饰器函数接受两个参数value和context，旧版为target、key、descriptor对象
## compilerOptions.experimentalDecorators配置为true
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
### 编译结果

```javascript
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, 
        r = c < 3 ? target : (
          desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc
        ), 
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") { 
      r = Reflect.decorate(decorators, target, key, desc)
    } else {
      for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]){
          r = (
            c < 3 ? d(r) : (c > 3 ? d(target, key, r) : d(target, key))
          ) || r
        }
      }
    };
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

## compilerOptions.experimentalDecorators未配置或配置为false

### 编译前

```typescript
function testTwo(target: any, context: any){
  console.log(target, context)
}

// @testOne
@testTwo
class Animal {
  
}
```

tsconfig.json compilerOptions.target设置为"es5"，执行```npx tsc``` 
### 编译结果

```javascript
"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
function testTwo(target, context) {
    console.log(target, context);
}
var Animal = function () {
    var _classDecorators = [testTwo];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Animal = _classThis = (function () {
        function Animal_1() {
        }
        return Animal_1;
    }());
    __setFunctionName(_classThis, "Animal");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Animal = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Animal = _classThis;
}();

```
