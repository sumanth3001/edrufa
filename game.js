var a=prompt("enter player one name");
var p1='rgb(86, 151, 255)';
var p2='rgb(237, 45, 73)';
var b=prompt("enter player teo name");
var game_on=true;

var table=$('table tr');
function repwin(rownum,conum)
{
console.log(" you won starting at this row col");
console.log(rownum);
console.log(conum);
}

function changec(rowi,coli,color){
  return table.eq(rowi).find('td').eq(coli).find('button').css('background-color',color);
}
function rcolor(rowi,coli){
  return table.eq(rowi).find('td').eq(coli).find('button').css('background-color');
}
function checkbottom(coli){
var colorreport= rcolor(5,coli);
for (var row=5;row>-1;row--)
{
 colorreport= rcolor(row,coli)
 if(colorreport=='rgb(128, 128, 128)'){
     return row;
}
}
}
function colormatch(one,two,three,four)
{
return(one === two && one===three && one===four && one!=='rgb(128, 128, 128)' && one!==undefined);
}
function hcheck()
{
for(var row=0;row<6;row++){
for(var col=0;col<4;col++){
if (colormatch(rcolor(row,col),rcolor(row,col+1),rcolor(row,col+2),rcolor(row,col+3)))
{
   console.log("horiz");
   repwin(row,col);
   return true;}
else{
    continue;
  }
}
}}
function vcheck()
{
for(var col=0;col<7;col++){
for(var row=0;row<3;row++){
if (colormatch(rcolor(row,col),rcolor(row+1,col),rcolor(row+2,col),rcolor(row+3,col)))
{
   console.log("vrtcl");
   repwin(row,col);
   return true;}
else{
    continue;
  }
}
}}
function diagcheck()
{
for(var col=0;col<5;col++){
for(var row=0;row<7;row++){
if(colormatch(rcolor(row,col),rcolor(row+1,col+1),rcolor(row+2,col+2),rcolor(row+3,col+3)))
{
   console.log("dgnl");
   repwin(row,col);
   return true;}
else if (colormatch(rcolor(row,col),rcolor(row-1,col+1),rcolor(row-2,col+2),rcolor(row-3,col+3)))
{
   console.log("dgnl");
   repwin(row,col);
   return true;}

else{
    continue;
  }
}
}}
var cplayer=1;
var cname=a;
var ccolor= p1;

$("h3").text(a+" its your turn pick a column");

$(".one button").on('click',function(){
var co=$(this).closest('td').index();

var botmav=checkbottom(co);
changec(botmav,co,ccolor);
if (hcheck()||vcheck()||diagcheck()){
$('h1').text(cname+' you have won'); 
$('h3').hide(); 
$('h2').hide(); 

}
cplayer=cplayer*-1;
if(cplayer===1)
{
   cname=a;
    $("h3").text(cname+" its your turn pick a column");
    ccolor=p1;}
else{
       cname=b;
    $("h3").text(cname+" its your turn pick a column");
    ccolor=p2;}
})

