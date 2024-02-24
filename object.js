const user ={ name:'raju',email:'raju@mail.com',password:'raju'};
console.log(user.name);
console.log(user.email);
console.log(user['password']);
console.log(Object.keys(user));
console.log(Object.values(user));
user.password='khuljassimsim';
console.log(user);
user.address='lucknow';
console.log(user[2]);
const smartphone={
    brand:'samsung',
    model:'s24 ultra ',
    price:13600,
    color:['black','blue','silver']
};
console.log(smartphone.color[1]);
//replace the 3rd color 'white'
smartphone.color[2]='white';
console.log(smartphone.color[2]);
console.log(smartphone.color);
//smratphone.color.push('red');


const phoneList=[
    {brand:'samsung',model:'s24 ultra ',price:136000, color:['black','blue','silver']},
    {brand:'oneplus',model:'norde ce2 ',price:24000, color:['black','grey']},
    {brand:'vivo',model:'v7 ',price:34000, color:['black','blue','silver']},
    {brand:'xiaomi',model:'note12 ',price:56000, color:['black','blue','silver']}

    
];
console.log(phoneList.length);
console.log(phoneList[0].price);
console.log(phoneList[1].color[1]);