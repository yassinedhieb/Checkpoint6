class Stack extends Array{
	Constructor(… elems){
        //super(…elems)
    }
    pop(){
        if(this.length ===0) throw new Error ('Nothing to pop!')
        super.pop()
    }
    peek(){
        if(this.length ===0) throw new Error('Stack is empty')
        return this[this.length - 1]
    }
}
const s = new Stack(1,2,3)
s.push(100) //  [1,2,3,100]
console.log(s.peek) // 100
s.pop() // 100 out
console.log(s.peek) // 3 
