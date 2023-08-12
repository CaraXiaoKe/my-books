---
layout: ../../../layouts/PostLayout.astro
title: 'TypeScript5.0 装饰器实现readOnly'
---


实现@readOnly装饰器，特性：只在未定义时赋值生效
## compilerOptions.experimentalDecorators配置为true

```typescript
function readOnly(target: any, name: any){
  let __value: any
  let isInit = false
  return {
    configurable: false,
    enumerable: true,
    get: function(){
      return __value
    },
    set: function(value: any){
      if(value !== void 0 && !isInit){
        __value = value
        isInit = true
      }
    }
  }
}
class Animal {
  @readOnly
  name: any = 11
}
```

## compilerOptions.experimentalDecorators未配置或false

```typescript
function readOnly(_: any, context: any){
  if(context.kind === 'field'){
    return function(this: Animal, value: any){
      let __value: any
      let isInit = false
      Object.defineProperty(this, context.name, {
        configurable: false,
        enumerable: true,
        get: function(){
          return __value
        },
        set: function(value: any){
          if(value !== void 0 && !isInit){
            __value = value
            isInit = true
          }
        }
      })
      return value
    }
  }
}
class Animal {
  @readOnly
  name: any
}
```