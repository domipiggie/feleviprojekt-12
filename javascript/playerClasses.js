class PlayerStat{
    type; placeTop1; kd; kills; winrate; matchesplayed; minutesplayed; playersoutlived;
    constructor(type, placeTop1, kd, kills, winrate, matchesplayed, minutesplayed, playersoutlived){
        this.type = type
        this.placeTop1 = placeTop1
        this.kd = kd
        this.kills = kills
        this.winrate = winrate
        this.matchesplayed = matchesplayed
        this.minutesplayed = minutesplayed
        this.playersoutlived = playersoutlived
    }
}

class Level{
    season; level;
    constructor(season, level){
        this.season = season
        this.level = level
    }
}

class Player{
    name; levelHistory = []; stats = [];
    constructor(name){
        this.name = name
    }
    addLevelHistory(level){
        this.levelHistory.push(level)
    }
    addStat(stat){
        this.stats.push(stat)
    }
}