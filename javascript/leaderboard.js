const apiLink = "https://api.griddy.hu"
const xhr = new XMLHttpRequest()
const leadertable = document.getElementById("leadertable")

function drawEntry(place, name, points){
    const row = document.createElement("tr")
    const placement = document.createElement("td")
    placement.innerText = place
    placement.classList = "number"
    const playername = document.createElement("td")
    playername.innerText = name
    playername.classList = "name"
    const playerpoints = document.createElement("td")
    playerpoints.innerText = points
    playerpoints.classList = "points"

    row.appendChild(placement)
    row.appendChild(playername)
    row.appendChild(playerpoints)
    leadertable.appendChild(row)
}

window.addEventListener('load', function(){
    xhr.open("GET", apiLink)
    xhr.onload = function(){
        const respJson = JSON.parse(xhr.response)
        for (i=0; i<6; i++){
            console.log(i)
            const item = respJson.pageProps.data.br.entries[i]
            drawEntry(item.rank, item.name, item.score)
        }
    }
    xhr.send()
})