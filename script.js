function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map();
	let str = "abcdefab";
	for(let i=0;i<str.length;i++){
	    if(map.has(str.charAt(i))==true){
	        let num = map.get(str.charAt(i));
	        num++;
	        map.set(str.charAt(i),num);
	    }
	    else{
	        map.set(str.charAt(i),1);
	    }
	}
	for(let [char,num] of map.entries()){
	    if(num==1) return char;
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
