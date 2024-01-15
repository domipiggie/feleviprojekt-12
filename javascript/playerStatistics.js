const xhr = new XMLHttpRequest()
const lookupUrl = "https://fortniteapi.io/v1/lookup?username="
const statisticUrl = "https://fortniteapi.io/v1/stats?account="
const plrname = document.getElementById("name")
const wincount = document.getElementById("win")
const killcount = document.getElementById("kill")
const matchcount = document.getElementById("match")
const winrate = document.getElementById("winrate")
let searchedPlayer;

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
            plrname.innerText = "User not found"
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
        searchedPlayer = new Player(respJson.name)

        try{
            let item = respJson.global_stats.solo
            searchedPlayer.increaseStats(item.placetop1,item.kills,(item.winrate*100),item.matchesplayed)
        } catch{}
        try{
            let item = respJson.global_stats.duo
            searchedPlayer.increaseStats(item.placetop1,item.kills,(item.winrate*100),item.matchesplayed)
        } catch{}
        try{
            let item = respJson.global_stats.trio
            searchedPlayer.increaseStats(item.placetop1,item.kills,(item.winrate*100),item.matchesplayed)
        } catch{}
        try{
            let item = respJson.global_stats.squad
            searchedPlayer.increaseStats(item.placetop1,item.kills,(item.winrate*100),item.matchesplayed)
        } catch{}

        plrname.innerText = searchedPlayer.name
        wincount.innerText = searchedPlayer.placeTop1
        killcount.innerText = searchedPlayer.kills
        matchcount.innerText = searchedPlayer.matchesplayed
        winrate.innerText = searchedPlayer.winrate
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
}

window.addEventListener('load', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    checkIfPlayerExists(searchParam)
})