class Item{
    displayName; displayDescription; fullBackgrounds; sectionName;

    constructor(displayName, displayDescription, fullBackgrounds, sectionName){
        this.displayName = displayName
        this.displayDescription = displayDescription
        this.fullBackgrounds = fullBackgrounds
        this.sectionName = sectionName
    }
}

class Section{
    sectionName;
    items = []

    addItem(item) {
        this.items.push(item)
    }

    constructor(sectionName){
        this.sectionName = sectionName
    }
}