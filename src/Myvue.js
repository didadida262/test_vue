class MyVue {
    constructor(vm) {
        this.vm = vm
        this.$data = vm.data
        this.$el = vm.el
        this.proxyData()
    }
    proxyData() {
        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                configurable: false, 
                enumerable: true,
                get() {
                    return this.$data[key]
                },
                set(newVal) {
                    this.$data[key] = newVal
                }
            })
        }
    }
}