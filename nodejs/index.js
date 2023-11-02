class minHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.sort(this.heap.length-1)
    }
    sort(index){
        let parentIndex = Math.floor((index-1)/2)
        if(index>0 && this.heap[index]<this.heap[parentIndex]){
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            this.sort(parentIndex)
        }
    }
}

let ob = new minHeap()
ob.insert(10)
ob.insert(3)
ob.insert(34)
ob.insert(23)
ob.insert(4)
console.log(ob.heap);
