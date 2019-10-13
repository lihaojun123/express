var Http=require("./http.js")  

const index={
    getIndex(params){
        let url="http://localhost:3000/index.json"
        return Http.get(url,params)
    }
}

module.exports = index