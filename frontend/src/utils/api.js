import {randomstring} from 'randomstring-js'

const url = 'http://localhost:8080/factorial'

const request = (number) => {
    return ({
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            number: number,
            id: randomstring(7)
        })
    })
}

var api = {
    requestFactorial: async (number) => {
        const result = await fetch(url,request(number))
        
        return result.json()
    }
}

export {api}