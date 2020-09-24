// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }
    push(input) {
        let newNode = new Node(input)
        if (this.length >= 1) {
            newNode.next = this.top
        }
        this.top = newNode
        this.length ++
        return this.length

    }


    pop() {
        if(this.length === 0) {
            return null
        }
        // if(this.length === 1) {
            // this.top = null
        // }
        // if (this.length >= 2) {
            let oldTop = this.top
            this.top = oldTop.next
            this.length --
            return oldTop.value
        // }
        // return this.value
    }

    size() {
        return this.length
    }

}

exports.Node = Node;
exports.Stack = Stack;
