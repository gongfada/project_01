"use strict";

var _car, _cae,
animateID = -1;  //用于停止动画

const width = 361, height = 602, 

topHeight = height * 0.2, middleHeight = height * 0.6, 

emptyCAC = new CanvasAnimateCustom(), 

runningList = new RunningList(''),

tween = new Tween(),

animate = function (){
    animateID = requestAnimationFrame(animate);
    tween.update();
    runningList.update();

},

box = document.getElementById('box'),

audio = new Audio("./media/xiaoYuXieLiKeBai.mp3");
audio.loop = true;
audio.autoplay = true; //谷歌浏览器禁用自动播放;
box.style = `
    width: ${width}px;
    height: ${height}px;
    background-image: url(./img/bk.png);
    background-size: 100% 100%;
    position: absolute;
    left: ${(window.innerWidth - width) / 2}px;
    top: ${(window.innerHeight - height) / 2}px;
`;

var _musicLogoCAR = null, _musicLogoCAE = null, 
_musicLogo = null, _musicTV = null, isAudioPlay = audio.autoplay;
function updateAudio(){
    if(isAudioPlay === true){
        audio.play();
        tween.start(_musicTV);
    }

    else{
        audio.pause();
        tween.stop(_musicTV);
    }

}

function _initBGM(cae, image){
    
    _musicLogo = new CanvasAnimateCustom().size(width*0.1, width*0.1).pos(width*0.05, topHeight*0.15);

    const musicLogoImg = emptyCAC.size(_musicLogo.width, _musicLogo.height).drawImage(image, 0,0,0,0, width*0.01, width*0.01, width*0.08, width*0.08).shear();
    _musicTV = new Tween.Value({x:0}, {x:1}, 3000, ()=>{
        _musicLogo.clear().rotate(0.05, _musicLogo.width/2, _musicLogo.height/2)
        .context.drawImage(musicLogoImg, 0, 0, _musicLogo.width, _musicLogo.height);
    }, t => {
        t.reverse();
        return true;
    });

    _musicLogo.img(musicLogoImg);
    
    cae.add(_musicLogo, 'click', function (){
        isAudioPlay = !isAudioPlay;
        updateAudio();
    });

    updateAudio();
}

function initBGM(car, cae, onload = null){
    if(_musicLogoCAR === null){
        const image = new Image();
        image.onload = ()=>{
            _initBGM(cae, image);
            car.add(_musicLogo);
            _musicLogoCAR = car;
            _musicLogoCAE = cae;
            if(onload !== null) onload();
            
        };
        image.src = './img/p2/yinle.png';
    }

    else{
        _musicLogoCAE.clear(_musicLogo, 'click');
        _musicLogoCAR.remove(_musicLogo);
        car.add(_musicLogo);
        cae.add(_musicLogo, 'click', function (){
            isAudioPlay = !isAudioPlay;
            updateAudio();
        });
        
        _musicLogoCAR = car;
        _musicLogoCAE = cae;

        tween.stop(_musicTV);
        updateAudio();
    }
    
    
}

var _buttonAnimateScale_isEnd = true;
function buttonAnimateScale(ca, scale, callback, car = null){
    if(_buttonAnimateScale_isEnd !== true) return;
    _buttonAnimateScale_isEnd = false;
    if(UTILS.isObject(scale) === true){
        ca = scale;
        scale = 10;
    }

    const box = ca.box.clone(), _w = box.w+scale,
    tv = new Tween.Value({w: box.w, h: box.h}, {w: _w, h: box.h+scale}, 300);

    tv.onUpdate = function (v){
        ca.box.size(v.w, v.h);
        ca.pos((box.w - v.w) / 2 + box.x, (box.h - v.h) / 2 + box.y);
        if(car !== null) car.redraw();
    }

    tv.onEnd = function (){
        if(tv.origin.w === _w){
            tv.end.w = box.w;
            tv.end.h = box.h;
            return true;
        }

        else{
            if(typeof callback === 'function') callback();
            _buttonAnimateScale_isEnd = true;
        }
        
    }

    tween.start(tv);
    
}



function _initBG(images, option = {}, onload = null){
    const left = 0, top = 0,

    car = new CanvasAnimateRender({
        width: width,
        height: height,
    }).pos(left, top),

    cae = new CanvasAnimateEvent(car),
    bg = new CanvasAnimate(emptyCAC.size(width, height).drawImage(images[0]).shear());
    _car = car;
    _cae = cae;
    
    //top 云
    const yunTopA = new CanvasAnimate(emptyCAC.size(width, topHeight).drawImage(images[3]).shear()).pos(0, -topHeight),
    yunTopB = new CanvasAnimate(emptyCAC.size(width, topHeight*0.8).drawImage(images[2]).shear()).pos(0, -topHeight),
    yunTopC = new CanvasAnimate(emptyCAC.size(width, topHeight).drawImage(images[1]).shear()).pos(0, -topHeight);

    //bottom 云
    const yunBottomA = new CanvasAnimate(emptyCAC.size(width, topHeight).drawImage(images[4]).shear()).pos(0, height),
    yunBottomB = new CanvasAnimate(emptyCAC.size(width, topHeight).drawImage(images[5]).shear()).pos(0, height),
    yunBottomC = new CanvasAnimate(emptyCAC.size(width, topHeight).drawImage(images[6]).shear()).pos(0, height);
    
    //animate
    const yunTopATV = new Tween.Value({x:yunTopA.top}, {x:0}, 500, v => yunTopA.pos(0, v.x), () => tween.start(yunBottomCTV)),
    yunTopBTV = new Tween.Value({x:yunTopB.top}, {x:0}, 500, v => yunTopB.pos(0, v.x), () => tween.start(yunTopATV)),
    yunTopCTV = new Tween.Value({x:yunTopC.top}, {x:0}, 500, v => yunTopC.pos(0, v.x), () => tween.start(yunTopBTV)),

    yunBottomCTV = new Tween.Value({x:yunBottomC.top}, {x:height-topHeight}, 500, v => yunBottomC.pos(0, v.x), () => tween.start(yunBottomBTV)),
    yunBottomBTV = new Tween.Value({x:yunBottomB.top}, {x:height-topHeight}, 500, v => yunBottomB.pos(0, v.x), () => tween.start(yunBottomATV)),
    yunBottomATV = new Tween.Value({x:yunBottomA.top}, {x:height-topHeight}, 500, v => yunBottomA.pos(0, v.x), ()=>{
        if(conMiddleTV !== null) tween.start(conMiddleTV);
        if(onload !== null) onload();
    });
    tween.start(yunTopCTV);
    car.list.push(bg, yunTopA, yunTopB, yunTopC, yunBottomA, yunBottomB, yunBottomC);
    

    //middle 白色透明背景
    var conMiddleTV = null;
    if(option.defaultContent === true){
        const conMiddle = new CanvasAnimateCustom().size(width*0.8, middleHeight*0.8).pos(width*0.1, height),

        //middle 花絮
        conMiddleTopA = new CanvasAnimateCustom().size(conMiddle.width, conMiddle.height*0.1).pos(conMiddle.left, conMiddle.top),
        conMiddleTopB = new CanvasAnimateCustom().size(conMiddleTopA.width, conMiddleTopA.height).pos(conMiddle.left, conMiddle.top),
        conMiddleTopImg = emptyCAC.size(conMiddleTopA.width, conMiddleTopA.height).drawImage(images[9]).shear();
        car.list.push(conMiddle, conMiddleTopA, conMiddleTopB);

        var conMiddleBottomA = null;
        if(option.contentBottom === true){
            conMiddleBottomA = new CanvasAnimateCustom().size(conMiddleTopA.width, conMiddleTopA.height).pos(conMiddle.left, conMiddle.box.maxY()-conMiddleTopA.height);
            var conMiddleBottomB = new CanvasAnimateCustom().size(conMiddleTopA.width, conMiddleTopA.height).pos(conMiddle.left, conMiddleBottomA.top),
            conMiddleBottomImg = emptyCAC.clear().drawImage(images[10]).shear();
            car.list.push(conMiddleBottomA, conMiddleBottomB);
        }

        /* const loop = function (){
            tween.start(new Tween.Value({x:0}, {x: conMiddleTopA.width}, 3000, v => {
                conMiddleTopA.clear().context.drawImage(conMiddleTopImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                conMiddleTopA.context.drawImage(conMiddleTopImg, v.x - conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);

                if(conMiddleBottomA !== null){
                    conMiddleBottomB.clear().context.drawImage(conMiddleBottomImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                    conMiddleBottomB.context.drawImage(conMiddleBottomImg, v.x - conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);
                }
            }, t => {
                t.origin.x = 0;
                return true;
            }));

            tween.start(new Tween.Value({x:conMiddleTopA.width}, {x: 0}, 3000, v => {
                conMiddleTopB.clear().context.drawImage(conMiddleTopImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                conMiddleTopB.context.drawImage(conMiddleTopImg, v.x - conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);
                if(conMiddleBottomA !== null){
                    conMiddleBottomA.clear().context.drawImage(conMiddleBottomImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                    conMiddleBottomA.context.drawImage(conMiddleBottomImg, v.x - conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);

                }
                
            }, t => {
                t.origin.x = conMiddleTopA.width;
                return true;
            }));
        } */

        conMiddle.drawImage(images[8]);
        conMiddleTopA.clear().context.drawImage(conMiddleTopImg, 0, 0, conMiddleTopA.width, conMiddleTopA.height);
        conMiddleTopB.clear().context.drawImage(conMiddleTopImg, 0, 0, conMiddleTopA.width, conMiddleTopA.height);

        if(conMiddleBottomA !== null){
            conMiddleBottomA.clear().context.drawImage(conMiddleBottomImg, 0, 0, conMiddleTopA.width, conMiddleTopA.height);
            conMiddleBottomB.clear().context.drawImage(conMiddleBottomImg, 0, 0, conMiddleTopA.width, conMiddleTopA.height);
        }

        conMiddleTV = new Tween.Value({x:conMiddle.top}, {x:topHeight + middleHeight*0.1}, 500, v => {
            //透明背景动画
            conMiddle.pos(conMiddle.left, v.x);
            conMiddleTopA.pos(conMiddle.left, v.x);
            conMiddleTopB.pos(conMiddle.left, v.x);
            if(conMiddleBottomA !== null){
                conMiddleBottomA.pos(conMiddle.left, v.x+conMiddle.height - conMiddleBottomA.height);
                conMiddleBottomB.pos(conMiddle.left, conMiddleBottomA.top);
            }
            
        }, ()=>{
            //花絮动画
            const _w = conMiddleTopA.width * 2, time = 3000, _time = time * 2;
            
            tween.start(new Tween.Value({x:conMiddleTopA.left}, {x: _w}, time, v => {
                conMiddleTopA.clear().context.drawImage(conMiddleTopImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                conMiddleTopA.context.drawImage(conMiddleTopImg, v.x - conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);
                if(conMiddleBottomA !== null){
                    conMiddleBottomB.clear().context.drawImage(conMiddleBottomImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                    conMiddleBottomB.context.drawImage(conMiddleBottomImg, v.x - conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);
                }
                
            }, t => {
                t.time = _time;
                t.origin.x = -_w;
                new Timer(()=>tween.start(t), 1000);
            }));

            tween.start(new Tween.Value({x:conMiddleTopA.left}, {x: -_w}, time, v => {
                conMiddleTopB.clear().context.drawImage(conMiddleTopImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                conMiddleTopB.context.drawImage(conMiddleTopImg, v.x + conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);
                if(conMiddleBottomA !== null){
                    conMiddleBottomA.clear().context.drawImage(conMiddleBottomImg, v.x, 0, conMiddleTopA.width, conMiddleTopA.height);
                    conMiddleBottomA.context.drawImage(conMiddleBottomImg, v.x + conMiddleTopA.width, 0, conMiddleTopA.width, conMiddleTopA.height);
                }
                
            }, t => {
                t.time = _time;
                t.origin.x = _w;
                new Timer(()=>tween.start(t), 1000);
            }));

        });

    }


    //灯笼 left
    if(option.light === true){
        const image = images[7],
        lightLeftImg = emptyCAC.size(width*0.15, width*0.2*2).drawImage(image, 0,0,image.width*0.45).shear();
        const lightLeft = new CanvasAnimateCustom().size(width, lightLeftImg.height);//.size(width*0.15, width*0.2*2);
        lightLeft.pos(width*0.15, topHeight*0.05);
        const lightLeftX = width * 0.4, lightLeftCenterX = lightLeftX + lightLeftImg.width/2;
        lightLeft.context.drawImage(lightLeftImg, lightLeftX, 0, lightLeftImg.width, lightLeft.height);

        const lightLeftTV = new Tween.Value({x:0}, {x:UTILS.random(0, 0.5)}, 1000, v => {
            lightLeft.unRotate(true).clear().rotate(v.x, lightLeftCenterX, 0)
            .context.drawImage(lightLeftImg, lightLeftX, 0, lightLeftImg.width, lightLeft.height);
        }, () => {
            lightLeftTV.end.x = lightLeftTV.origin.x > 0 ? -UTILS.random(0, 0.5) : UTILS.random(0, 0.5);
            return true;
        });
        tween.start(lightLeftTV);

        //灯笼 right
        const lightrightImg = emptyCAC.size(width*0.15, width*0.2*2).drawImage(image, image.width*0.45,0,image.width-image.width*0.45).shear();
        const lightright = new CanvasAnimateCustom().size(width, lightrightImg.height);
        lightright.pos(0, lightLeft.top);
        const lightrightX = width * 0.7, lightrightCenterX = lightrightX + lightrightImg.width/2;
        lightright.context.drawImage(lightrightImg, lightrightX, 0, lightrightImg.width, lightright.height);

        const lightrightTV = new Tween.Value({x:0}, {x:UTILS.random(0, 1)}, 1000, v => {
            lightright.unRotate(true).clear().rotate(v.x, lightrightCenterX, 0)
            .context.drawImage(lightrightImg, lightrightX, 0, lightrightImg.width, lightright.height);
        }, () => {
            lightrightTV.end.x = lightrightTV.origin.x > 0 ? -UTILS.random(0, 1) : UTILS.random(0, 1);
            return true;
        });
        tween.start(lightrightTV);

        car.list.push(lightLeft, lightright);
    }
    
    if(option.bgm === true) initBGM(car, cae);

    //render
    car.initList().render(box);
    runningList.push(()=>car.redraw());
    
    if(option.isAnimate === true) animate();

}

/* 初始化背景
    option: Object{
        isAnimate: Bool,        //是否启用动画
        defaultContent: Bool,   //是否创建白色透明背景
        contentBottom: Bool,    //defaultContent 和 contentBottom 都为true才有效
        light: Bool,            //是否创建灯笼
        bgm: Bool,              //是否创建默认的背景音乐
    }

*/
function initBG(option, onload){

    new CanvasAnimateImages().loads([
        './img/p2/bg.png',
    
        //top 云
        './img/p2/yun1.png',
        './img/p2/yun2.png',
        './img/p2/yun3.png',
    
        //bottom 云
        './img/p2/_yun4.png',
        './img/p2/_yun5.png',
        './img/p2/_yun6.png',
    
        //middle 白色透明背景
        
        //音乐符号
    
        //灯笼
        './img/p2/dl.png',
    
        //按钮
    
        //middle 白色透明背景
        './img/p2/white.png',
        './img/p2/top.png',
        './img/p2/bottom.png',
    
    ], images => {
        _initBG(images, option, onload);
        
    });

}






