import './index.less'
class Index{
    constructor(){
     this.bindEvent()
    }
    bindEvent(){
        console.log("2222222")
        $(".wrap").html("我是jquery")
    }
}
new Index()