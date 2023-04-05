

/*

*/

function initP2(images){

    //按钮 连连看
    const buttonLLK = new CanvasAnimate(images[0]);
    buttonLLK.box.w *= 0.354;
    buttonLLK.box.h *= 0.354;
    buttonLLK.pos((width - buttonLLK.box.w) / 2, height);
    
    //按钮 娃娃机
    const buttonWWJ = new CanvasAnimate(images[1]);
    buttonWWJ.box.size(buttonLLK.width, buttonLLK.height);
    buttonWWJ.pos(buttonLLK.left, height);
    
    _cae.add(buttonLLK, 'click', () => buttonAnimateScale(buttonLLK, 10, ()=>location.href = './p3.html'));
    _cae.add(buttonWWJ, 'click', buttonAnimateScale);
    _car.add(buttonLLK); //buttonLLK.drawImage().render(box);
    _car.add(buttonWWJ); //buttonWWJ.drawImage().render(box);
    
    const y = (height - buttonLLK.height) / 2 - buttonLLK.height / 2;
    tween.start(new Tween.Value({y: height}, {y: y}, 500, v => buttonLLK.pos(buttonLLK.left, v.y)));
    tween.start(new Tween.Value({y: height}, {y: buttonLLK.height+y + buttonLLK.box.h / 2}, 500, v => buttonWWJ.pos(buttonWWJ.left, v.y)));
    
}


//下载图片
new CanvasAnimateImages().loads([
    './img/p2/llk.png',
	'./img/p2/wwj.png',

], images => {
    const _script = document.createElement('script');
    _script.type = 'text/javascript';
    _script.onload = function (){

        initBG({
            isAnimate: true,        //是否启用动画
            defaultContent: true,   //是否创建白色透明背景
            contentBottom: true,
            light: true,            //是否创建灯笼
            bgm: true,  			//是否创建背景音乐

        }, ()=>initP2(images));

    }
    
    _script.src = './js/bg.js';
    document.body.appendChild(_script);
});





