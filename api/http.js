var axios=require("axios") 

const api = {
    get(url, params) {
        return new Promise(function (resolve, reject) {
            axios.get(url, {
                    params: params
                }).then(function (res) {
                    resolve(res)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    }
}
module.exports = api