    //Select a random slogen for stores without slogen inputted.

function SlogenRadomer(){

    const slogens = [
        "真っ向サービス",
        "味の作曲家",
        "すべては、お客様の「うまい！」のために。",
        "お口の恋人",
        "I’m lovin’ it",
        "NO FOOD NO LIFE",
        "うまい！もう一杯！",
        "Hungry?",
    ]

    return slogens[Math.floor(Math.random() * slogens.length)];
}

export default SlogenRadomer;