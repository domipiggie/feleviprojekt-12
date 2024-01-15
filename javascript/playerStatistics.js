const xhr = new XMLHttpRequest()
const lookupUrl = "https://fortniteapi.io/v1/lookup?username="
const statisticUrl = "https://fortniteapi.io/v1/stats?account="

function checkIfPlayerExists(name) {
    xhr.open("GET", lookupUrl + name)
    xhr.onload = function () {
        if (xhr.status != 200){
            return
        }

        let respJson = JSON.parse(xhr.response)
        console.log(respJson)
        if(respJson.result==true){
            lookupUser(respJson.account_id)
        }else{
            return false
        }
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
}

function lookupUser(userid){
    xhr.open("GET", statisticUrl+userid)
    xhr.onload = function(){
        const respJson = JSON.parse(xhr.response)
        console.log(respJson)
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
}

window.addEventListener('load', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    checkIfPlayerExists(searchParam)
})