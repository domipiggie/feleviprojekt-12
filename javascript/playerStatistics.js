const xhr = new XMLHttpRequest()
const lookupUrl = "https://fortniteapi.io/v1/lookup?username="
const statisticUrl = "https://fortniteapi.io/v1/stats?account="
let searchedPlayer;

function checkIfPlayerExists(name) {
    xhr.open("GET", lookupUrl + name)
    xhr.onload = function () {
        console.log("h")
        if (xhr.status != 200){
            return
        }

        let respJson = JSON.parse(xhr.response)
        console.log(respJson)
        if(respJson.result==true){
            console.log("ok")
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
        searchedPlayer = new Player(respJson.name)

        respJson.accountLevelHistory.forEach(function(item){
            const level = new Level(item.season, item.level)
            searchedPlayer.addLevelHistory(level)
        })

        let item = respJson.global_stats.solo
        searchedPlayer.addStat(new PlayerStat("solo", item.placetop1, item.kd, item.kills, (item.winrate*100), item.matchesplayed, item.minutesplayed, item.playersoutlived))
        item = respJson.global_stats.duo
        searchedPlayer.addStat(new PlayerStat("duo", item.placetop1, item.kd, item.kills, (item.winrate*100), item.matchesplayed, item.minutesplayed, item.playersoutlived))
        item = respJson.global_stats.trio
        searchedPlayer.addStat(new PlayerStat("trio", item.placetop1, item.kd, item.kills, (item.winrate*100), item.matchesplayed, item.minutesplayed, item.playersoutlived))
        item = respJson.global_stats.squad
        searchedPlayer.addStat(new PlayerStat("squad", item.placetop1, item.kd, item.kills, (item.winrate*100), item.matchesplayed, item.minutesplayed, item.playersoutlived))

        console.log(searchedPlayer)
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
}

window.addEventListener('load', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    checkIfPlayerExists(searchParam)
})