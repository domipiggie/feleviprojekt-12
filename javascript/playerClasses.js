class Player{
    name; placeTop1=0; kills=0; winrate=0; matchesplayed=0;
    constructor(name){
        this.name = name
    }
    increaseStats(top1,kill,winr,matches){
        this.placeTop1+=top1
        this.kills+=kill
        this.winrate=(this.winrate+winr)/2
        this.matchesplayed+=matches
    }
}