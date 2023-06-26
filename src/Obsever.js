class Obsever {
    constructor(vm) {
        this.vm = vm
        this.data = vm.$data
        this.obsever()
    }
    obsever() {
        const dep = new Dep()
        for (let key in this.data) {
            let val = this.data[key]
            Object.defineProperty(this.data, key, {
                enumerable: true,
                get() {
                    Dep.target && dep.addSub(Dep.target)
                    console.log('搜集以来')
                    return val
                },
                set(newVal) {
                    console.log('触发以来')
                    val = newVal
                    dep.notify()
                }
            })
        }
    }
}