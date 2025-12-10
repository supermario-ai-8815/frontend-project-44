
export function progression () {
    const num1 = Math.floor(Math.random() * 10) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const length = 10
    const progression = []
    for (let i = 0; i < length; i += 1) {
        progression.push(num1 + i * step)
    }
    //console.log(`${progression}`)
    let point = ".."
    let currentPoint = Math.floor(Math.random() * 8) + 1
    let result = progression[currentPoint]
    progression[currentPoint] = currentPoint
    progression[currentPoint] = `${point}`
    //console.log(`${progression}`)
    //console.log(`${result}`)
    return {
        question: progression,
        correctResult: `${result}`
    }
    
}

//progression()