const apiLink = "https://fortniteapi.io/v2/shop?lang=en"
const xhr = new XMLHttpRequest()
const itemsDiv = document.getElementById("items")

function makeItem(item){
    let backgrounds = []
    item.displayAssets.forEach(function(item){
        backgrounds.push(item.full_background)
    })
    return new Item(item.displayName, item.displayDescription, backgrounds, item.section.name)
}

function drawItem(item){
    let mainDiv = document.createElement("div")
    mainDiv.classList = "col-md-6 item"

    let image = document.createElement("img")
    image.src = item.fullBackgrounds[0]

    let name = document.createElement("h3")
    name.innerText = item.displayName

    let desc = document.createElement("p")
    desc.innerText = item.displayDescription

    mainDiv.appendChild(image)
    mainDiv.appendChild(name)
    mainDiv.appendChild(desc)
    itemsDiv.appendChild(mainDiv)
}

window.addEventListener("load", function(){
    let sections = []
    let respJson;

    xhr.open("GET", apiLink)
    xhr.onload = function(){
        if (xhr.status != 200){
            return
        }

        respJson = JSON.parse(xhr.response)

        respJson.shop.forEach(function(item, index){
            for (i in sections){
                if (sections[i].sectionName == item.section.name){
                    sections[i].addItem(makeItem(item))
                    return
                }
            }
            sections.push(new Section(item.section.name))
            sections[sections.length-1].addItem(makeItem(item))
        })
    
        console.log(sections)
    
        sections.forEach(function(i){
            i.items.forEach(function(item){
                drawItem(item)
            })
        })
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
})