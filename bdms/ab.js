
require("./env")
require("./bdms_new")

function get_a_bogus(aid,pageId,signNum,p,d,u,ish5) {
    if(!ish5){
        window.bdms.init({
            "aid": aid,//动态
            "pageId": pageId, //动态
            "paths": [
                "^/webcast/",
                "^/aweme/v1/",
                "^/aweme/v2/",
                "/v1/message/send",
                "^/live/",
                "^/captcha/",
                "^/ecom/"
            ],
            "boe": false,
            "ddrt": 7
        })
    }

    let arguments = [
        0,
        1,
        signNum,//每个接口不一样, 动态
        p,//动态
        d,//动态
        u
    ]
    let r = window.dy._v;
    return (0, window.dy._u)(r[0], arguments, r[1], r[2], this)
}

process.on('message', (message) => {
    console.log('来自主进程的消息:', message);
    if(message.p){
        process.send({ ab: get_a_bogus(message.aid,message.pageId,message.signNum,message.p,message.d,message.u, message.ish5)});
        process.exit(1)
    }
    if(message.xsmt){
        process.send({ xsmt: "PxUnm6pPmEaWhjrDyVf5AQ1teMswXDOIa_oVByPftoiwmiMT2bpi75FgqOPhm7Bq-p2Q47B-Sdg4fSAa237IJ7ZIFjA07ryuKzIJXrm7HPP08cywGK4PaIgHpBmy9U8LCmiMVycgCNI2yxB1u7eu0gZZQfJQAIAAoPjuaTj1bHlDD9jIAIf6wXk="});
    }
    if(message.quit){
        process.exit(1)
    }
});


