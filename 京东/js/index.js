window.addEventListener('load',function(){
    //-----功能1   鼠标放上左右按钮出现，移开则隐藏
     var lbt=document.querySelector('.l');
     var rbt=document.querySelector('.r');
     var middle=document.querySelector('.middle');
     middle.addEventListener('mouseover',function(){
        lbt.style.display='block';
        rbt.style.display='block';
     })
    middle.addEventListener('mouseout',function(){
        lbt.style.display='none';
        rbt.style.display='none';
    })
    //------功能2 小圆圈部分
           //动态生成小圆圈
    var ul1=document.querySelector('.ima');
    var imgs=ul1.querySelectorAll('li');
    var ul2=document.querySelector('.ul2');
    var middle=document.querySelector('.middle');
    for(var i=0;i<imgs.length;i++)
      {
          var li=document.createElement('li');
          li.setAttribute('index',i);//给每个小圆圈索引号
          ul2.appendChild(li);
          li.addEventListener('mouseover',function(){
            for(var j=0;j<imgs.length;j++)
           {
               ul2.children[j].className='';
           }
            this.className='current';
      //点击小圆圈变色 点击则将小圈圈的classname设为current，其他为‘’
     // 鼠标放在小圆圈实现图片滑动,是ul1在动，移动距离是小圆圈索引号*图片的宽度
        var index=this.getAttribute('index');   
        move(ul1,-index*middle.offsetWidth);
        count=index;
        circle=index;
})
}
       ul2.children[0].className='current';   //把第一个小圈圈默认选上
//----------点击右侧按钮 图片移动一张,点击一次则计数num加一，让num*图片宽度就可以了
    //克隆第一张图片
     var kl=ul1.children[0].cloneNode(true);
     ul1.appendChild(kl);
     var count=0;
     var circle=0; //控制小圆圈的
     var flag=true;
    rbt.addEventListener('click',fn1);
     function fn1(){
        if(flag)
        {
            flag=false;
             //走到最后一张图即复制的图，则判断
        if(count==ul1.children.length-1)
        {ul1.style.left=0;
          count=0;
         }   
        count++;
        move(ul1,-count*middle.offsetWidth,function(){
               flag=true;
        })
        //----------点击右侧按钮 小圆圈跟着变化定义一个变量
        circle++;
       if(circle==ul1.children.length-1)
         {
             circle=0;
         }
         for(var i=0;i<ul2.children.length;i++)
           {
               ul2.children[i].className="";
           }
           ul2.children[circle].className='current';
        }
    }
   //-------左侧按钮功能
    lbt.addEventListener('click',fn2);
     function fn2(){
         //走到最左边一张图 即复制的图，则判断
        if(flag)
        {
        flag=false;
        if(count==0)
            {ul1.style.left=-middle.offsetWidth*3+'px';
              count=3;
        }   
            count--;
             move(ul1,-count*middle.offsetWidth,function(){
                 flag=true;
             }); 
            //----------点击左侧按钮 小圆圈跟着变化定义一个变量   
            circle--;     
           if(circle<0)
             {
                 circle=2;
             }
             for(var i=0;i<ul2.children.length;i++)
               {
                   ul2.children[i].className="";
               }
               ul2.children[circle].className='current';
        }
}
//-----自动播放功能
var timer=setInterval(function(){
    //手动调用右侧按钮点击事件
      rbt.click();
},2000)
middle.addEventListener('mouseout',function()
{
    // clearInterval(timer);
   timer=setInterval(function(){
        //手动调用右侧按钮点击事件
          rbt.click();
    },2000)
})
middle.addEventListener('mouseover',function(){
   clearInterval(timer);
})
})
