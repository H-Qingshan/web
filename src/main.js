let String = `.skin *{box-sizing: border-box;}
.skin *::after,*::before{box-sizing: border-box;}
body{
        padding: 0;
        margin: 0;    
}
.skin{
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}

/*画鼻子*/
.nose{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left:50%;
    top: 145px;
    margin-left:-10px;
    z-index: 10;
}
@keyframes wave{
    0%{     transform: rotate(0deg);}
    33%{transform: rotate(10deg);}
    66%{    transform: rotate(-10deg);}
    100%{   transform: rotate(0deg);}
}
.nose:hover{
    transform-origin:50% 100% ;
    animation: wave 400ms infinite linear;
}
.circle{
    position: absolute;
    width: 20px;
    height: 10px;
    top: -20px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}


/*画眼睛*/
.eye{
    border: 3px solid #000000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye.left{transform: translateX(-100px);}
.eye.right{transform: translateX(100px);}
.eye::before{
    content: '';
    display:  block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}

/*画嘴巴*/
.mouth{
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top:170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 5px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position:absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg)  translateX(-53px);}
.mouth .up .lip.right{
    border-radius: 0 0  50px 0;
    transform: rotate(15deg)  translateX(53px); }
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{right: -6px;}
.mouth .up .lip.right::before{ left: -6px;}
.mouth .down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .circle-1{
    border: 1px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow:hidden;
}
.mouth .down .circle-1 .circle-2{
    width: 200px;
    height: 300px;
    background: #Ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

/*画脸*/
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
/* 完成啦！*/
`
// let n = 1

// demo.innerText = String.substr(0, n)
// demo2.innerHTML = String.substr(0, n)
// let id = setInterval(() => {
//     n += 1
//     if (n > String.length) {
//         window.clearInterval(id)
//         return
//     }
//     console.log(n + ":" + String.substr(0, n))
//     demo.innerText = String.substr(0, n)
//     demo2.innerHTML = String.substr(0, n)
//     demo.scrollTop = demo.scrollHeight;
// }, setTimeout(10000))


const player = {
    id: undefined,
    time: 100,
    ui: {
        // demo: demo.innerText,
        // demo2: demo2.innerHTML
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    n: 1,
    init: () => {
        player.ui.demo.innerHTML = String.substr(0, player.n),
            player.ui.demo2.innerText = String.substr(0, player.n),
            player.play(),
            player.bindEvents()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            const value = player.events[key];
            document.querySelector(key).onclick = player[value];
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > String.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerHTML = String.substr(0, player.n),
            player.ui.demo2.innerText = String.substr(0, player.n),
            player.ui.demo2.scrollTop = demo2.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause();
        player.time = 300;
        player.play()
    },
    normal: () => {
        player.pause();
        player.time = 100;
        player.play()
    },
    fast: () => {
        player.pause();
        player.time = 0;
        player.play()
    }
}

player.init()