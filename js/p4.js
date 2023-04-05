

/*

*/
function initP4(images){
    
    //标题
    const titleImg = emptyCAC.size(width*0.8, topHeight*0.8).drawImage(images[0]).shear(),
    title = _car.add(new CanvasAnimate(titleImg)).pos((width-titleImg.width) / 2, -titleImg.height);
    tween.start(new Tween.Value({y: title.top}, {y: topHeight+middleHeight*0.1-titleImg.height}, 500, v => title.pos(title.left, v.y)));

    //小金币
    const coinImg = emptyCAC.size(width*0.8/3, width*0.8/3).drawImage(images[1]).shear(),
    coin = _car.add(new CanvasAnimate(coinImg)).pos(width*0.2, topHeight+middleHeight*0.25),
    coinBox = coin.box.clone();
    coin.box.y = height; //coin.opacity = 0;
    const coinScaleTV = new Tween.Value({w:coin.width}, {w: 1}, 500, v => {
        coin.box.w = v.w;
        coin.box.x = (coinBox.w - v.w) / 2 + coinBox.x;
            
    }, t => {
        if(t.origin.w === 1){
            t.reverse();
            return true;
        }

        else{
            if(t._number < 2){
                t.reverse();
                new Timer(()=>tween.start(t), 1000);
            }
            
            if(UTILS.isNumber(t._number) !== true) t._number = 1;
            t._number += 1;
        }
        
    });


    //拿上你心爱的小金币 \n 去尝试一下吧!
    emptyCAC.size(width * 0.7, middleHeight);
    const conA = '拿上你心爱的小金币',
    conB = '去尝试一下吧!', fontSize = 24,
    textImages = [];
    for(let k = 0, len = conA.length, value = '', y = coinBox.maxY()-topHeight*1.1; k < len; k++){
        value += conA[k];
        textImages.push(emptyCAC.clear().text(value, 'red', fontSize, 0, y).shear());
    }
    for(let k = 0, len = conB.length, value = '', _img = textImages[textImages.length - 1], y = coinBox.maxY()-topHeight*1.1; k < len; k++){
        value += conB[k];
        emptyCAC.clear().context.drawImage(_img, 0, 0);
        textImages.push(emptyCAC.text(value, 'red', fontSize, 0, fontSize+10+y).shear());
    }
    
    const text = _car.add(new CanvasAnimateCustom()).size(width*0.8, middleHeight).pos(width*0.15, topHeight);
    text.rotate(-Math.PI/4+0.2, text.width/2, text.height/2);
    

    //按钮
    const button = _car.add(new CanvasAnimate(emptyCAC.size(120, 50).drawImage(images[2]).shear()));
    button.pos(-button.width, topHeight + middleHeight);
    const buttonTV = new Tween.Value({x: button.left}, {x: (width - button.width)/2}, 500, v => button.pos(v.x, button.top));
    _cae.add(button, 'click', () => buttonAnimateScale(button, 10, ()=>location.href = './p3.html'));


    //start animate
    tween.start(new Tween.Value({x:coin.top}, {x: coinBox.y}, 500, v => coin.box.y = v.x, ()=>{
        tween.start(buttonTV);
        tween.start(coinScaleTV);
        new Timer(t => {
            text.clear().context.drawImage(textImages[t.number-1], 0, 0);
        }, 300, textImages.length);
        
    }));
    
}


//下载图片
new CanvasAnimateImages().loads([
    
    './img/p4/wwj.png',
    './img/p4/coin.png',
    './img/p4/start.png',

], images => {
    const _script = document.createElement('script');
    _script.type = 'text/javascript';
    _script.onload = function (){

        initBG({
            isAnimate: true,        //是否启用动画
            defaultContent: true,   //是否创建白色透明背景
            contentBottom: false,
            light: true,            //是否创建灯笼
            bgm: true,  			//是否创建背景音乐

        }, ()=>initP4(images));

    }
    
    _script.src = './js/bg.js';
    document.body.appendChild(_script);
    
});





