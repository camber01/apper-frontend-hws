class Stack {
    constructor() {
      this.stack = {}
      this.i = 0
    }
  
    push(name){
      if(typeof(name) !== 'string'){
        console.log('The value is not string.')
        return
      }
      this.i++
      this.stack[this.i] = name
    }
  
    pop(){
      if(!this.i == 0){
        delete this.stack[this.i]
        this.i--
        return
      }
      console.log('Stack is empty.')
    }
  
    check(){
      console.log(Object.values(this.stack))
    }
  
    peek(){
      const top = this.stack[this.i]
      return top
    }
  }
  
  const myStack = new Stack()
  myStack.push('Milk')
  myStack.check()
  myStack.push('Cookies')
  myStack.push(123)
  
  const topStack = myStack.peek()
  console.log(topStack)
  
  myStack.push('Eggs')  
  myStack.check() 
  myStack.pop()
  myStack.check() 
  myStack.pop()
  myStack.check() 
  myStack.pop() 
  myStack.check() 
  myStack.pop() 
  myStack.check() 