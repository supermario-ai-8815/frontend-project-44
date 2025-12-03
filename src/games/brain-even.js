
export const isEven = () => {
    const min = 1
    const max = 75
    let num = Math.floor(Math.random() * (max - min)) + min
    let result
        if (num % 2 === 0) {
            result = true
            console.log(num + ' Correct!')
            //запоминаем что сгенерированное число четное
           return {
            questionEven: num,
            correctResultEven: result
            };
        }
        else {
            result = false
            console.log(num + ' Wrong')
            //запоминаем что сгенерированное число нечетное
            return {
            questionEven: num,
            correctResultEven: result
            };
            }
        }

//isEven()