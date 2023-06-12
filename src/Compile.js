//  什么叫编译模板--->把template变成dom，如{{变量}}--->真实的数据

class Compile {
    constructor(vm) {
        this.vm = vm
        this.el = vm.$el
        const fragment = this.nodeToFragment()
        this.compile(fragment)
        this.vm.$el.appendChild(fragment)
        // console.log('f', fragment)
        // 编译文档片段，解析{{}}
    }
    // 解析出{{}},变量赋值
    compile(fragment) {
        const nList = fragment.childNodes
        nList.forEach((node) => {
            const nType = node.nodeType
            if (nType === 3) {
                this.compileText(node)
                // 解析文本
            } else if (nType === 1) {
                this.compileElement(node)
                // 元素节点
                
            }
            if (node.childNodes && node.childNodes !== 0) {
                this.compile(node)
            }
        })
    }
    compileElement(node) {
        const attrs = node.attributes
        if (!!attrs.length) {
            const attrsArr = Array.from(attrs)
            attrsArr.forEach((att) => {
                if(att.nodeName === 'v-model') {
                    const val = att.value
                    node.value = this.vm.$data[val]
                }
            })
        }
    }
    compileText(node) {
        const con = node.textContent
        const reg = /\{\{(.+?)\}\}/g
        if(reg.test(con)) {
            console.log(node)
            const newVal = con.replace(reg, (...arg) => {
                return this.vm.$data[arg[1]]
            })
            node.textContent = newVal
        }
    }
    nodeToFragment() {
        const f = document.createDocumentFragment()
        while(this.el.firstChild) {
            f.appendChild(this.el.firstChild)
        }
        return f
    }
}