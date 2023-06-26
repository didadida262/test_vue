class MyVue {
    constructor(vm) {
        this.vm = vm
        this.$data = vm.data
        this.$el = document.querySelector(vm.el)

        // 1.数据代理
        // this.proxyData()
        new Obsever(this)
        new Compile(this)
        // 2.数据劫持

        // 3.模板编译
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
                    new Compile(this)
                    this.$data[key] = newVal
                }
            })
        }
    }
}