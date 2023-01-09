var a=document.getElementById("ind");
document.addEventListener('scroll',function(){
  var b=document.body.getBoundingClientRect();
  var tot=b.height-innerHeight;
  var ans=((b.top/tot)*100);
  if(ans<0){
    ans*=-1;
  }
  ans=Math.ceil(ans);
  var chng=document.getElementById("per");
  chng.innerHTML=ans;
});
