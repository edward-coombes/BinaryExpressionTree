class Tree {
	constructor(d, l, r){
		this.data = d;
		this.left = l;
		this.right = r;
	}

	isLeaf(){
		return this.left == undefined && this.right == undefined;
	}

	performOperation(v1,v2,op){
		let value;
		switch(op){
			case "+":
				value = v1 + v2;
				break;
			
			case "-":
				value = v1 - v2;
				break;
				
			case "*":
				value = v1 * v2;
				break;
			
			case "/":
				value = v1 / v2;
				break;	
		}
		return value;
	}

	postorderTraverse(){
		if(this.isLeaf())
			return this.data;
		else{
			let v1,v2;
			v1 = this.left.postorderTraverse();
			v2 = this.right.postorderTraverse();
			return performOperation(v1,v2,this.data);
		}
	}

	preorderTraverse(){
		if(this.isLeaf()
			return this.data;
		else {
			
		}
	}
}

var t0 = new Tree(1);
var t1 = new Tree(2);
var r = new Tree("+",t0,t1);
console.log(r.isLeaf());
console.log(t0.isLeaf());
console.log(r.postorderTraverse());
//TODO: implement the other fix expressions
// make the printing stuff happen
