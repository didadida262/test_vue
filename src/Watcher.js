class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        this.cb = cb
        this.oldVaL = this.getOldVal(key, vm)
    }
    getOldVal(key, vm) {
        Dep.target = this
        const oldVal = compileUtil.getValue(key, vm)
        Dep.target = null
        return oldVal
    }
    update() {
        this.cb()
    }
}