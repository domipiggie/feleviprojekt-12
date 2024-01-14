class Item{
    displayName; displayDescription; fullBackground; sectionName;

    constructor(displayName, displayDescription, fullBackground, sectionName){
        this.displayName = displayName
        this.displayDescription = displayDescription
        this.fullBackground = fullBackground
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