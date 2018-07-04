import _ from 'underscore'

function existy (target) {
  return target != null
}

function truthy (x) {
  return (x !== false) && existy(x)
}

function doWhen(condition, action) {
  if (truthy(condition)) return action
  else return undefined
}

function uniqueString (len) {
  return Math.random.toString(36).substr(2, len)
}

function isa (type, action) {
  return function (obj) {
    if (type === obj.type) return action(obj)
  }
}

function invoker (name, method) {
  return function (target /* args */) {
    if (!existy(target)) console.error('must provide a target')
    let targetMethod = target[name]
    let args = _.rest(arguments)

    return doWhen((existy(targetMethod) && method === targetMethod), () => {
      return targetMethod.apply(target, args)
    })
  }
}

function dispatch(/* funcs */) {
  let funcs = _.toArray(arguments)
  let size = func.length

  return function (target /*, args */) {
    let ret = undefined
    let args = _.rest(arguments)

    for (var funcIndex = 0; funcIndex < size; funcIndex++) {
      let func = funcs[funcIndex]
      ret = func.apply(func, construct(target, args))

      if (existy(ret)) return ret
    }

    return ret
  }
}
