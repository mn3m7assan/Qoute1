var qoute =[

{
    'qoute':'Do not take life too seriously. You will not get out alive.',
    'Auther':'Elbert Hubbard',
},
 {
    'qoute': "It's not what happens to you, but how you react to it that matters.",
    'Auther':'--Epictetus',
 },

 {
    'qoute':'The best revenge is massive success.',
    'Auther':'--Frank Sinatra',


 },

 {
    'qoute':"Resentment is like drinking poison and waiting for your enemies to die.",
    'Auther':"--Nelson Mandela",


 },

 {
    'qoute':"You miss 100% of the shots you don't take.",
    'Auther':"--Wayne Gretzy"


 }



]


function getQoutes(){

    var num= Math.floor(Math.random()*qoute.length)
    console.log(num)

 document.getElementById("Qoute").innerHTML=qoute[num].qoute;
 document.getElementById("Author").innerHTML=qoute[num].Auther;


}