/* Queues */

function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift(); 
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
      var n = collection.length;
      var result = [];
      var s=0;
      var p=0;
  this.SUM = function() {
  for (var i = 0; i < n; i++) {
    for (var j=0 ; j < n; j++){
      if (i!=j && arr[i]==arr[j]){
        result.push(arr[i])};
      }
    }
      while(p<result.length){
        s+=result[p]
        p++
      }
    console.log(s);
}

var q = new Queue(); 
q.enqueue(1); 
q.enqueue(3);
q.enqueue(5);
q.enqueue(7); 
q.enqueue(3);
q.enqueue(5);
q.enqueue(2); 

q.SUM()