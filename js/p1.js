"use strict";

var animateID = -1;

const width = 361, height = 602,

emptyCAC = new CanvasAnimateCustom(), 

tween = new Tween(),

animate = function (){
    animateID = requestAnimationFrame(animate);
    tween.update();
}

//中秋佳节
function createZQJJ(top, parentElem){
    
    const elem = document.createElement('div'),

    size = width*0.8/8, fontSize = size * 0.8,

    createImageViewer = function (text, bgColor){
        const image = emptyCAC.clear()
        .rect(size/2)
        .fill(bgColor)
        .text(text, 'gold', fontSize, 'center', 'center')
        .shear();

        return new ImageViewer({
            width: size*2, 
            height: size*2, 
            defaultEvent: false,
        })

        .setImage(image)
        .setScaleAt(1, size, size)//.setViewportScale()
        .center().drawImage().render(elem);
        
    },

    createTweenValue = function (x, x1, ca){
        const tv = new Tween.Value({x: x}, {x: x1}, 500, v => ca.setScaleAt(v.x, size, size).drawImage().redraw(), v => {
            tv.reverse();
            return true;
        });

        tween.start(tv);

        return tv;
    }

    emptyCAC.size(size, size);

    const imageViewerA = createImageViewer('中', 'rgba(255,200,200,0.6)'); //创建视图
    createTweenValue(1, 1.5, imageViewerA); //创建动画(起始值, 结束值, 目标)

    const imageViewerB = createImageViewer('秋', 'rgba(200,200,100,0.6)');
    createTweenValue(1.5, 1, imageViewerB);

    const imageViewerC = createImageViewer('佳', 'rgba(200,255,200,0.6)'); //创建视图
    createTweenValue(1, 1.5, imageViewerC); //创建动画(起始值, 结束值, 目标)

    const imageViewerD = createImageViewer('节', 'rgba(100,200,200,0.6)');
    createTweenValue(1.5, 1, imageViewerD);

    elem.style = `
        position: absolute;
        height: ${size*2}px;
        left: ${(width - size * 2 * 4) / 2}px;
        top: ${top}px;
    `;

    parentElem.appendChild(elem);
    return elem;
}


//loading...
function createLOAD(top){
    const fontSize = 25,
    car = new CanvasAnimateRender({
        width: width,
        height: fontSize * 0.8,
    });
    emptyCAC.box.w = 0;
    emptyCAC.text('loading...', '#000', car.box.h);
    emptyCAC.size(emptyCAC.box.w, car.box.h);
    const images = [
        emptyCAC.clear().text('loading...', '#000', car.box.h, '', 'center').shear(),
        emptyCAC.clear().text('loading..', '#000', car.box.h, '', 'center').shear(),
        emptyCAC.clear().text('loading.', '#000', car.box.h, '', 'center').shear(),
        emptyCAC.clear().text('loading', '#000', car.box.h, '', 'center').shear(),
    ],
    cais = car.add(new CanvasAnimateImages(images));
   
    tween.start(new Tween.Value({x: 0}, {x: 3}, 1000, v => {
        cais.set(Math.round(v.x));
        car.redraw();
    }, v => {
        v.reverse();
        return true;
    }));

    cais.set(0);
    cais.pos((width - cais.width)/2, 0);
    car.pos(0, top);
    return car;
}


//进度条
function createProgress(top){
    const size = 14, fontSize = 10, borderSize = 4,

    progressView = new ProgressView({
        className: 'progress shadow-convex',
        width: width*0.7,
        height: size,

        bgColor: '#fff', //背景色
        scrollColor: '#aaffaa', //游标色

        textColor: '#000', //文字色
        textSize: fontSize, //文字大小
        textBar: true, //显示进度条进度

        borderSize: borderSize,
        borderRadius: size / 2,
        borderColor: '#000',
    })

    progressView.domElement.style = `
        border-radius: ${size}px;
        border: ${borderSize}px solid #ffba00;
        box-shadow: 0px 0px 0px 2px #020202;
    `;

    progressView.pos((width - progressView.box.w) / 2, top);

    return progressView;
}


function init(){
    const box = document.createElement('div');
    box.style = `
        width: ${width}px;
        height: ${height}px;
        background-image: url(./img/bk.png);
        background-size: 100% 100%;
        position: absolute;
        left: ${(window.innerWidth - width) / 2}px;
        top: ${(window.innerHeight - height) / 2}px;
    `;

    createZQJJ(height * 0.3, box);
    createLOAD(height * 0.5).render(box);
    const progressView = createProgress(height * 0.55).render(box);

    animate(); //开始动画循环

    //模拟某个项目的进度 Timer
    new Timer(t => {
        progressView.set(t.number / t.step, true); //更新进度条

        if(t.readyState === 'done'){
            cancelAnimationFrame(animateID); //结束动画循环

            //在这里写跳转页面
            location.href = './p2.html';
        }
        
    }, 500, 15);

    document.body.appendChild(box); //box添加到body
    
}

init();





