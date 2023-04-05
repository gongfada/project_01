
/*

*/
function initP3(images){
    var ybA = null, successNum = 0, isEnd = true, slLen = 1;

    const car = new CanvasAnimateRender({
        width: width*0.9,
        height: middleHeight*0.8,
    }).pos(width*0.05, topHeight+middleHeight*0.1),
    cae = new CanvasAnimateEvent(car);

    const carTop = new CanvasAnimateRender({
        width: width,
        height: topHeight/2,
    }).pos(0, topHeight - width/8),
    caeTop = new CanvasAnimateEvent(carTop);

    const carBottom = new CanvasAnimateRender({
        width: width,
        height: topHeight,
    }).pos(0, topHeight + middleHeight),
    caeBottom = new CanvasAnimateEvent(carBottom);


    //middle 白色透明背景
    const conMiddle = new CanvasAnimateCustom()
    .size(car.box.w, car.box.h)
    .drawImage(images[0]);
    conMiddle.opacity = 0;
    car.list.push(conMiddle);


    //时间沙漏
    const slLogo = carTop.add(new CanvasAnimateCustom()).size(width/8, width/8).pos(width *0.05, 0),
    slLogoImg = emptyCAC.size(slLogo.width/2, slLogo.width/2).drawImage(images[8]).shear(),
    slTV = new Tween.Value({x:0}, {x:Math.PI}, 1000, v=>{
        slLogo.unRotate(true).clear().rotate(v.x, slLogo.width/2, slLogo.height/2)
        .context.drawImage(slLogoImg, (slLogo.width - slLogoImg.width)/2, (slLogo.height - slLogoImg.height)/2, slLogoImg.width, slLogoImg.height);
    }, () => {
        slLen++;
        slTV.end.x = slLen % 3 === 0 ? -Math.PI : Math.PI;
        slTV.origin.x = 0;
        slTimer.start();
    }),
    slTimer = new Timer(()=>tween.start(slTV), 1000, 1);

    //时间沙漏旁边的数字
    const slText = carTop.add(new CanvasAnimateCustom()).size(slLogo.width, slLogo.height).pos(slLogo.left*3, slLogo.top),
    updateSLText = ()=>slText.clear().text(String(successNum), '#fff', slLogo.height*0.5, 'center', 'center');

    //重置按钮
    const resetBut = carTop.add(new CanvasAnimate(emptyCAC.size(110, 40).drawImage(images[9]).shear()));
    resetBut.pos(width - resetBut.width - width*0.1, carTop.box.h*0.1);
    caeTop.add(resetBut, 'click', () => {
        if(ybA !== null || successNum !== 0) buttonAnimateScale(resetBut, 10, reset);
    });

    //退出按钮
    const exitBut = carBottom.add(new CanvasAnimate(emptyCAC.size(110, 40).drawImage(images[10]).shear()));
    exitBut.pos((width - exitBut.width)/2, carBottom.box.h*0.4);
    caeBottom.add(exitBut, 'click', () => buttonAnimateScale(exitBut, 10, ()=>location.href = './p4.html', carBottom));




    //连连看游戏主要功能程序
    const mar = 4, _lenX = 4, size = conMiddle.width/_lenX-_lenX*mar, _lenY = Math.floor(conMiddle.height / (size + mar)), 
    cx = (conMiddle.width - (size*_lenX+_lenX*mar)) / 2, cy = (conMiddle.height - _lenY * (size + mar)) / 2, 
    count = _lenY * _lenX,

    //月饼的种类
    yueBings = [
        emptyCAC.size(size, size).drawImage(images[2]).shear(),
        emptyCAC.size(size, size).drawImage(images[3]).shear(),
        emptyCAC.size(size, size).drawImage(images[4]).shear(),
        emptyCAC.size(size, size).drawImage(images[5]).shear(),
        emptyCAC.size(size, size).drawImage(images[6]).shear(),
        emptyCAC.size(size, size).drawImage(images[7]).shear(),
    ],

    //闯关成功页
    success = function (){
        //cancelAnimationFrame(animateID);
        exitBut.visible = false;
        carBottom.redraw();

        slTimer.stop();

        tween._delList = tween._list;
        tween._list = [];
        
        const carSuc = new CanvasAnimateRender({
            width: width,
            height: height,
        }).pos(0, 0),
        caeSuc = new CanvasAnimateEvent(carSuc);
        carSuc.domElement.style.zIndex = 2;

        //透明黑色背景
        carSuc.add(new CanvasAnimate(emptyCAC.size(width, height).rect().fill('rgba(0,0,0,0.4)').shear()));

        //
        const sucLogo = carSuc.add(new CanvasAnimate(emptyCAC.size(width*0.8, middleHeight).drawImage(images[11]).shear())).pos(width*0.1, topHeight/2),
        sucLogoBox = sucLogo.box.clone();

        //返回首页按钮
        const backBut = carSuc.add(new CanvasAnimate(emptyCAC.size(110, 40).drawImage(images[12]).shear()));
        backBut.pos((width - backBut.width)/2 - 10 - backBut.width/2, sucLogo.box.maxY()+40);
        caeSuc.add(backBut, 'click', () => buttonAnimateScale(backBut, 10, ()=>location.href = './p2.html'));

        //下一个按钮
        const nextBut = carSuc.add(new CanvasAnimate(emptyCAC.size(110, 40).drawImage(images[13]).shear()));
        nextBut.pos((width - nextBut.width)/2 + 10 + nextBut.width/2, sucLogo.box.maxY()+40);
        caeSuc.add(nextBut, 'click', () => buttonAnimateScale(nextBut, 10, ()=>location.href = './p4.html'));

        //render
        initBGM(carSuc, caeSuc);
        carSuc.render(box);
        runningList.push(()=>carSuc.redraw());
        
        //动画
        sucLogo.box.size(1, 1);
        backBut.opacity = 0;
        nextBut.opacity = 0;

        const nextButTV = new Tween.Value({x: 0}, {x: 1}, 500, v => nextBut.opacity = v.x),
        backButTV = new Tween.Value({x: 0}, {x: 1}, 500, v => backBut.opacity = v.x, ()=>tween.start(nextButTV));
        tween.start(new Tween.Value({w:sucLogo.width, h:sucLogo.height}, {w: sucLogoBox.w, h: sucLogoBox.h}, 1000, v=>{
            sucLogo.box.size(v.w, v.h);
            sucLogo.pos((sucLogoBox.w - v.w) / 2 + sucLogoBox.x, (sucLogoBox.h - v.h) / 2 + sucLogoBox.y);
        }, ()=>tween.start(backButTV)));

    },

    //动画结束时计算月饼种类是否相同
    compute = function (cac){
        if(ybA !== null){
            if(ybA === cac) return;
            
            if(ybA._type === cac._type){
                successNum++;
                ybA._success = cac._success = true;
                scaleSuccess(ybA);
                scaleSuccess(cac);
                if(successNum === count/2) success();
            }

            else{
                scale(ybA, 'close');
                scale(cac, 'close');
            }

            ybA = null;
        }

        else ybA = cac;

    },

    //月饼相同动画
    scaleSuccess = function (cac){
        isEnd = false;

        const tv = new Tween.Value({x:size}, {x:size*1.2}, 500), ox = cac.left, oy = cac.top;
        
        tv.onUpdate = function (v){
            cac.box.w = v.x;
            let cx = (size - v.x) / 2;
            cac.box.set(cx + ox, cx + oy, v.x, v.x);
        }

        tv.onEnd = function (){
            if(tv.origin.x === size*1.2){
                tv.end.x = size;
                isEnd = false;
                return true;
            }
            else{
                cac.fill('rgba(0,0,0,0.6)');
                isEnd = true;
                updateSLText();
            }

        }

        isEnd = false;
        tween.start(tv);
    },

    //月饼打开和关闭动画 //type = 'open'|'close'
    scaleDraw = function (cac, type){
        if(type === 'open') cac.clear(0, 0, size, size).fill('rgba(255,255,255,0.2)').context.drawImage(cac._imgYB, 0,0,size,size);

        else if(type === 'close') cac.fill('#2d2938');

    },

    scale = function (cac, type = 'open'){
        const tv = new Tween.Value({x:size}, {x:1}, 300), ox = cac.left;
        
        tv.onUpdate = function (v){
            cac.box.w = v.x;
            cac.box.x = (size - v.x) / 2 + ox;
        }

        tv.onEnd = function (){
            if(tv.origin.x === 1){
                scaleDraw(cac, type);
                isEnd = false;
                tv.end.x = size;
                return true;
            }

            else{
                scaleDraw(cac, type);
                if(type === 'open') compute(cac);
                isEnd = true;
            }
            
        }

        isEnd = false;
        tween.start(tv);
    },

    //创建点击事件
    createEvent = function (cac){
        cae.add(cac, 'click', ()=>{

            if(cac._success === false && isEnd === true) scale(cac, 'open');
            
        });
    },

    //重置所以的月饼
    reset = function (){
        if(isEnd !== true) return console.warn('重置失败! 请稍后重试');

        ybA = null;
        successNum = 0;
        updateSLText();

        const arr = [];
        for(let k = 0; k < count; k++) arr.push(k+1);
        
        for(let k = 0, t, i, ca; k < count; k+=2){
            t = Math.floor(UTILS.random(0, yueBings.length));

            i = Math.floor(UTILS.random(0, arr.length));
            ca = car.list[arr[i]];
            ca._type = t;
            ca._imgYB = yueBings[t];
            ca.clear().fill('#2d2938');
            ca._success = false;
            arr.splice(i, 1);
            
            i = Math.floor(UTILS.random(0, arr.length));
            ca = car.list[arr[i]];
            ca._type = t;
            ca._imgYB = yueBings[t];
            ca.clear().fill('#2d2938');
            ca._success = false;
            arr.splice(i, 1);
            
        }
        
    }
    
    //render
    for(let x = 0, y, cac; x < _lenX; x++){
        for(y = 0; y < _lenY; y++){
            cac = new CanvasAnimateCustom().size(size, size).rect(4).pos(x * size + mar*x + cx, y * size + mar*y + cy);
            car.list.push(cac);
            createEvent(cac);
        }
    }

    car.domElement.style.zIndex = 
    carTop.domElement.style.zIndex = 
    carBottom.domElement.style.zIndex = 2;
    car.initList().render(box);
    carTop.render(box);
    carBottom.render(box);
    runningList.push(()=>car.redraw(), ()=>carTop.redraw());
    tween.start(new Tween.Value({x: conMiddle.opacity}, {x: 1}, 1000, v => conMiddle.opacity = v.x, reset));

}

//下载图片
new CanvasAnimateImages().loads([
    
    './img/p3/minibg.png',
    './img/p3/black.png',
    
    './img/p3/bp.png',
    './img/p3/ds.png',
    './img/p3/mc.png',
    './img/p3/sg.png',
    './img/p3/wr.png',
    './img/p3/zm.png',

    './img/p3/sl.png',
    './img/p3/reset.png',
    './img/p3/quit.png',

    './img/p3/over.png',
    './img/p3/back.png',
    './img/p3/next.png',

], images => {
    const _script = document.createElement('script');
    _script.type = 'text/javascript';
    _script.onload = function (){

        initBG({
            isAnimate: true,        //是否启用动画
            defaultContent: false,   //是否创建白色透明背景
            light: false,            //是否创建灯笼
            bgm: true,  			//是否创建背景音乐

        }, ()=>initP3(images));

    }
    
    _script.src = './js/bg.js';
    document.body.appendChild(_script);

});





