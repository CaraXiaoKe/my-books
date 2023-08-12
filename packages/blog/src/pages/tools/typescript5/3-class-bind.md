---
layout: ../../../layouts/PostLayout.astro
title: 'TypeScript5.0 装饰器bindThis实现'
---

## compilerOptions.experimentalDecorators配置为true

```typescript
/**
 * target: 类原型 name: 函数名称 descriptor: 函数描述符对象
 */
function bindThis(target: any, name: any, descriptor: any){
  const fn = descriptor.value
  return {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    get(){
      const boundFn = fn.bind(this)
      Object.defineProperty(this, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: boundFn
      })
      return boundFn
    }
  }
}
class Animal {
  @bindThis
  getName(){
    console.log(this)
  }
}
```

## compilerOptions.experimentalDecorators未配置或false

```typescript
function bindThis(fn: any, context: any){
  if(context.kind === 'method'){
    context.addInitializer(() => {
      this[context.name] = fn.bind(this)
    })
  }
}
class Animal {
  @bindThis
  getName(){
    console.log(this)
  }
}
```