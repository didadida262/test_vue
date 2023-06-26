class Dep{
    constructor() {
        this.subList = []
    }
    addSub(watcher) {
        console.log(watcher)
        this.subList.push(watcher)
    }
    notify() {
        console.log('当前的总wacther>>>', this.subList)
        this.subList.forEach((sub) => {
            sub.update()
        })
    }
}