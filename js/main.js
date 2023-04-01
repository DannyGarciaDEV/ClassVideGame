class dragonBallXenoverse {
    constructor(gender, specialMove, race, ki) {
        this.gender = gender,
            this.specialMove = specialMove,
            this.race = race,
            this.ki = ki

    }
    linePlayer() {
        console.log(`I will made you pay with my ${this.specialMove}`)
    }
        playerRace(){
            console.log(`I am the strongest ${this.race} in the world!`)
        }
playerki(){
    console.log(`don't make me laugh, my ki is ${this.ki} nothing compare to yours!`)
}

    }


let goku = new dragonBallXenoverse('male', 'KAMEHAMEHAA!', 'Saijan', '1000')
let danny = new dragonBallXenoverse('male', '10x KAMEHAMEHA', 'human', '800')
let Piccolo = new dragonBallXenoverse('male', 'MAKANKOSAPPO!', 'Namekian', '900')