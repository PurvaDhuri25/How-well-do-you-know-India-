var chalk=require('chalk');
console.log(chalk.bgBlue.cyanBright("EXPLORE INDIA QUIZ\n Lets See how much do you Know about INDIA!!!!\n Go Ahead!!\n"));
var readline=require('readline-sync');
var name=readline.question(chalk.bold.magenta("What is your name? "));
console.log(chalk.bold.underline.green("Welcome "+name+"!!!"));
var know=readline.keyInYN("Do you want to start???");
var score=0;
function quiz(question,ans)
{
  var uans=readline.question(chalk.italic.cyanBright(question));
  if(uans==ans)
  {
    score=score+1;
    console.log(chalk.bold.green("YEAH YOU ARE RIGHT!!! YOUR SCORE is: ",score,"\n"));
  }
  else
  {if(score==0)
  {
    score=0;
    console.log(chalk.bold.red("AHH YOU ARE WRONG!!! YOUR SCORE is: ",score,"\n"));
  }
  else
  {
     score=score-1;
    console.log("AHH YOU ARE WRONG!!! YOUR SCORE is: ",score,"\n");
  }
  }
}
var lead=[{
  name:"Purva",
  score:10
},
{
  name:"Gargi",
  score:9
}]
var que=[{
  que:"What Indian city is the capital of two states?\na)Chennai\nb)Mumbai\nc)Kolkata\nd)Chandigarh\n",
  ans:"d"
},
{
  que:"How many countries border India?\na)6\nb)12\nc)9\nd)10\n",
  ans:"a"
},
{
  que:"Who was the president of India in 2009?\na)Pratibha Patil\nb)Indira Gandhi\nc)Govind Singh\nd)Jawaharlal Nehru\n",
  ans:"a"
},
{
  que:"What is India’s smallest state by area?\na)Goa \nb)Kerala\nc)Pondicherry\nd)Uttar Pradesh\n",
  ans:"a"
},
{
  que:"Which state in India do we find the wettest regions?\na)Meghalaya\nb)Kerala\nc)West Bengal\nd)Assam\n",
  ans:"a"
},
{
  que:"Which of these bodies of water does not border India?\na)Bay of Bengal\nb)Indian Ocean \nc)Red Sea\nd)Arabian Sea\n",
  ans:"c"
},
{
  que:"When is India’s Independence Day?\na)August 15\nb)October 31\nc)July 14\nd)January 1\n",
  ans:"a"
},
{
  que:"In what state is Bengaluru located?\na)Kerala\nb)Karnataka\nc)Bihar\nd)Chhattisgarh\n",
  ans:"b"
},
{
  que:"Delhi is located along what river?\na)The Nile\nb)The Ganga\nc)The Yamuna\nd)The Bramhaputra\n",
  ans:"c"
},
{
  que:"Where did chess first originate?\na)China\nb)Iraq\nc)Spain\nd)India\n",
  ans:"d"
}
]
 
for(var i=0;i<que.length;i++)
{
  quiz(que[i].que,que[i].ans);
}
console.log("Your Final score is: ",score,"\nYOU ARE AWESOME!!!!!!!\n");
if(score>=lead[0].score && score>=lead[1].score)
{
  console.log("YOU are on LEADERBOARD\n CONGRATULATIONS");
}
else
{
  console.log("YOU are not on LEADERBOARD")

}