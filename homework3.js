 
const f1= function(arg1,arg2,arg3) {

	return ((arg1*arg2)-arg3)/100;
};
const activate1 = f1(2,3,4);
console.log(activate1);
//another version console.log(f1(2,3,4))






const f2=function() {
   return 6;
}; 
console.log(f2());






const f3=function(a,b) {
	const c=a*b;
};
console.log(f3(8,9));







const f4=function(str1,str2,str3) {

	if((str1.length > str2.length) && (str1.length > str3.length)) {
		return str1; 
	}else if((str2.length > str1.length) && (str2.length > str3.length)) {
		return str2;
	}else {
		return str3;

	};	
}

console.log(f4('help','me','with my howework'));




const f5=function(numb1,numb2) {
const n1=numb1;
const n2=numb2;

if(n1===n2){

	return 0;

}else if(n1>n2){
	
	return 1;

 }else if (n1<n2) {
 	return -1;
  }; 
}; 
console.log(f5(99,101));






const f6=function(arg1,arg2){
	return (arg1*arg2);
};
console.log(f6(23,56));



const f7=function(val1,val2){
	return (val1/val2);
};
console.log(f7(50,2));






const triangleArea=function(base,height){
	return f7(f6(base,height),2);
};
console.log(triangleArea(8,10))





const numLength=function(number){
	const n=number+''; // or number.toString() and return number.length
	return n.length;
};
 const activateNumLength=numLength(1234567890098762678);
 console.log(activateNumLength);







 const f10=function(string1,string2,nmbr) {
 	const concate=string1+string2;
 	if (concate.length>nmbr){
 		return 1; 
 	}else {
 		return -1;
 	};
 };
 const activate10=f10('this','alswk',33);
 console.log(activate10);






 const runStuff=function(nmbr1,nmbr2,str){
 	if (str==='rectangle'){
 		return f6(nmbr1,nmbr2);
 	}else if(str==='triangle'){
 		return triangleArea(nmbr1,nmbr2);
 	}else  {
 		return -1;
 	};
 };

 const activate11=runStuff(23,55,'triangle');
 console.log(activate11);


































