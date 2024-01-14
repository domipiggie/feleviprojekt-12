const apiLink = "https://fortniteapi.io/v2/shop?lang=en"
const xhr = new XMLHttpRequest()

window.addEventListener("load", function(){
    let sections = []

    xhr.open("GET", apiLink)
    xhr.onload = function(){
        if (xhr.status != 200){
            return
        }

        const respJson = JSON.parse(xhr.response)

        respJson.shop.forEach(function(item, index){
            for (i in sections){
                if (sections[i].sectionName == item.section.name){
                    sections[i].addItem(new Item(item.displayName, item.displayDescription, item.granted[0].images.full_background, item.section.name))
                    return
                }
            }
            sections.push(new Section(item.section.name))
            sections[sections.length-1].addItem(new Item(item.displayName, item.displayDescription, item.granted[0].images.full_background, item.section.name))
        })

        console.log(sections)
    }
    xhr.setRequestHeader("Authorization", "d1853e9c-b4186298-76a2e520-146c9d4d")
    xhr.send()
})