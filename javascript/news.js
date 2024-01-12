const xhr = new XMLHttpRequest()
const newsApiLink = "https://fortniteapi.io/v1/news?lang=en&type=br"
const container = document.getElementById("news")

function createNewsDiv(title, text, image){
    let cardContainer = document.createElement("div")
    cardContainer.classList = "card mb-3"
    let cardImg = document.createElement("img")
    cardImg.src = image
    cardImg.classList = "card-img-top"
    let cardBody = document.createElement("div")
    cardBody.classList = "card-body"
    let cardTitle = document.createElement("h5")
    cardTitle.classList = "card-title"
    cardTitle.innerText = title
    let cardText = document.createElement("p")
    cardText.classList = "card-text"
    cardText.innerText = text

    cardContainer.appendChild(cardImg)
    cardContainer.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)

    let cardDecks = document.getElementsByClassName("card-deck")
    cardDecks[cardDecks.length-1].appendChild(cardContainer)
}

function createNewCardDeck(){
    let deck = document.createElement("div")
    deck.classList = "card-deck"
    container.appendChild(deck)
}

window.addEventListener("load", function(){
    xhr.open("GET", newsApiLink)
    xhr.onload = function(){
        if (xhr.status != 200){
            return
        }

        const respJson = JSON.parse(xhr.response)

        for (i = 0; i < respJson.news.length; i++){
            if (i%2==0){
                createNewCardDeck()
                createNewsDiv(respJson.news[i].title, respJson.news[i].body, respJson.news[i].image)
            } else {
                createNewsDiv(respJson.news[i].title, respJson.news[i].body, respJson.news[i].image)
            }
        }
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
})