
require("./env")
require("./bdms_new")

function get_a_bogus(p,d,u) {
    window.bdms.init({
        "aid": 6383,//动态
        "pageId": 7571, //动态
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
    let arguments = [
        0,
        1,
        8,//每个接口不一样, 动态
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
        process.send({ ab: get_a_bogus(message.p,message.d,message.u)});
        process.exit(1)
    }
    if(message.xsmt){
        process.send({ xsmt: "4ViUXQFV3xFVtBdOVSxeQBz3pPP3kthbtZFxqcXw8rSHmAh2ZmETkrsxtl5HBQ6zexwj0-fqlIKddCrPp7CPGT_dBArmyfEYpCd132-nhFrkn0QYNNvo9m7uvXJPWIU="});
    }

});
