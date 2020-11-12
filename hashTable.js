class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size)
    }
    _hash(key){
        let total = 0 
        let PRIME_NUMBER = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let value = key.charCodeAt(i) - 96
            total = (total * PRIME_NUMBER + value) % this.keyMap.length
        }
        console.log(total);
        
        return total
    }

    set(key, value){
        const index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        } 
        this.keyMap[index].push([key, value])
        return index
    }

    get(key){
        const index = this._hash(key)
        const seperateChain = this.keyMap[index]
        if(seperateChain){
            for(let i = 0; i < seperateChain.length; i++){
                if(seperateChain[i][0] === key) return seperateChain[i][1]
            }
        }
        return undefined
    }

    values(){
    let valuesArr = []
    for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                valuesArr.push(this.keyMap[i][j][1])
            }
        }
    }
    return valuesArr
    }
    
    key s(){
    let valuesArr = []
    for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                valuesArr.push(this.keyMap[i][j][1])
            }
        }
    }
    return valuesArr
    }
}

const hashTable = new HashTable()
hashTable.set("cyan", "#EEEE")
hashTable.set("goodbye", "#FFFF00")
hashTable.set('hello', "#FFFF01")
hashTable.set('test', "#FFFF03")
hashTable.set("red", "#FFFF04")
console.log(hashTable.keyMap)