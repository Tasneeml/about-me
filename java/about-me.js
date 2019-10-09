/*'use strict'
var name = prompt('what is your name?');
name = name.toLowerCase();
alert('welcome  ' + name + '  to my page');
console.log('name' + name);

var love = prompt('do you love me?');
name = name.toLowerCase();
if (love == 'yes') {
    alert('of course you do');

} else if (love == 'y') {
    alert('of course you do');

} else {
    alert('Thank you');
}
var dream = prompt('do you have a dream like me?');
dream = dream.toLowerCase();
if (dream == 'yes') {
    alert('of course you do');

} else if (love == 'y') {
    alert('of course you do');

} else {
    alert('You must have a dream');
}
var gender = prompt('are you a girl?');
gender = gender.toLowerCase();
if (gender == 'yes') {
    alert('you are like me');

} else if (gender == 'y') {
    alert('you are like me');

} else {
    alert('You must be boy');

}
var born = prompt('are you born in 1997?');
born = born.toLowerCase();
if (born == 'yes') {
    alert('You are at my age');

} else if (born == 'y') {
    alert('You are at my age');

} else {
    alert('You must be old or young than me');
}
var hoppy = prompt('are you playing giutar');
hoppy = hoppy.toLowerCase();
if (hoppy == 'yes') {
    alert('I also play guitar ');

} else if (hoppy == 'y') {
    alert('I also play guitar');

} else {
    alert('You must be try ,it is fantastic');
}
*/
'use strict';
var name = prompt('what is your name?');
alert('welcome  ' + name + '  to my page');
var counter=0;


var questions = [
    [
        'do you love me?',
        'of course you do',
        'Thank you',
    ],
    [
        'do you have a dream like me?',
        'of course you do',
        'You must have a dream',
    ],
    [
        'are you a girl? ',
        'you are like me',
        'You must be boy',
    ],
    [
        'are you born in 1997?',
        'You are at my age',
        'You must be old or young than me',
    ],
    [
        'are you playing giutar?' ,
        'I also play guitar',
        ' You must be try ,it is fantastic'
    ]


  ]
  function tasneem1() {

      
  
  for (var count=0;count<5; count++){
  var  exact= questions[count];
  var promptquestions = exact[0];
  var posetiveReply = exact[1];
  var negativeReply = exact[2];
  var defaultreply=exact[3];
  var name= prompt(promptquestions);
  name=name.toLowerCase();
  promptquestions = promptquestions.toLowerCase();


  switch (name) {
    case "yes":
    case "y":
        counter=counter+1;
        console.log(exact);
    alert(posetiveReply);

    break;
    case "no":
    case "n":
            console.log(exact);
    alert(negativeReply);

    break;
    default :
    alert (defaultreply) ;
    break;
    }
}
  }
  tasneem1();
  console.log(tasneem1);


  function tasneem2(){
for (var count=0;count<4; count++)
{
var pla=prompt ("how many places i hope visit ?")
if (pla==20){
alert("yes hhhh");
counter=counter+1;
console.log(pla);
break;

}

if(pla>20){
    alert("too high,try again");
    console.log(pla);
}
else if (pla<20){
    alert("too low,try again");
    console.log(pla);
}
else {
    alert("this's true");
    console.log(pla);
    
}

}
alert("20 places");}
tasneem2();
  console.log(tasneem2);

  function tasneem3() {

var pla=['Italy','Spain','France','amirica','iraq','Bulgaria']
  
  
      
  

 for(var count = 0; count < 5; count++) {

    var myplaces = prompt("guess one of my top ten places i hope visit?");
    switch (myplaces) {
        case pla[0]:
        case pla[1]:
        case pla[2]:
        case pla[3]:
        case pla[4]:
        case pla[5]:
            alert("  You are right, My favorite countrys are : iraq,Italy,Spain,France,United,Bulgaria");
            counter = counter + 1;
            console.log(myplaces);
            count = 5;
            break;
        default:
            alert("Unfortunately you are wrong ~_~! Try it again")
            console.log(myplaces);
            break;
    }
  }
  alert("your point are" + counter)
  alert("thanks you" + name);
  }
  tasneem3();
  console.log(tasneem3);
