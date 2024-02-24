const nums=[3,7,9,4,6,1,2];
//store the square of each number in a new array
const arr1=[];
for(let i of nums){
    //console.log(i);
    arr1.push(i**2);
}
console.log(arr1);

const result=nums.map((n)=>{return n**2});
console.log(result);

const prices=['$567.23','$21874.989','$888.90','$7257.2482']
//[567,2184,888,7257]
console.log(parseInt('$567.23'.slice (1)));
const numprices =prices.map((p)=>{return parseInt(p.slice(1))})
console.log(numprices);
const result2=result.map((n)=>{return n-n*0.1} )
console.log(result2);