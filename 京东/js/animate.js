function move(obj,target,callback){
    clearInterval(obj.timer);//清除以前的定时器
  obj.timer=setInterval(function(){
      if(obj.offsetLeft==target)
          {
              clearInterval(obj.timer);
              if(callback)
                { callback();}//等价于callback&&callback()
          }
       var step=(target-obj.offsetLeft)/10;
       step=step>0?Math.ceil(step):Math.floor(step);
       obj.style.left=obj.offsetLeft+step+'px';
  },15)
}