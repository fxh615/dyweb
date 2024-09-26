const { fork } = require('child_process');



let msToken = "";
let a_bogus = "";

let pp = {
    'device_platform': 'webapp',
    'aid': '6383',
    'channel': 'channel_pc_web',
    'search_channel': 'aweme_general',
    'enable_history': '1',
    'keyword': '游戏',
    'search_source': 'normal_search',
    'query_correct_type': '1',
    'is_filter_search': '0',
    'from_group_id': '7409968023836151067',
    'offset': 0,
    'count': 10,
    'need_filter_settings': '0',
    'list_type': 'multi',
    'update_version_code': '170400',
    'pc_client_type': '1',
    'version_code': '190600',
    'version_name': '19.6.0',
    'cookie_enabled': 'true',
    'screen_width': '2560',
    'screen_height': '1440',
    'browser_language': 'en-US',
    'browser_platform': 'MacIntel',
    'browser_name': 'Chrome',
    'browser_version': '128.0.0.0',
    'browser_online': 'true',
    'engine_name': 'Blink',
    'engine_version': '128.0.0.0',
    'os_name': 'Mac OS',
    'os_version': '10.15.7',
    'cpu_core_num': '10',
    'device_memory': '8',
    'platform': 'PC',
    'downlink': '10',
    'effective_type': '4g',
    'round_trip_time': '50',
}

function proHandler(message){
    console.log('========', message);
    if(message.ab){
        let ab = message.ab;
        a_bogus = ab;
    }
    if(message.xsmt){
        msToken = message.xsmt;
        //child.send({aid:"6383",pageId:"11881",signNum:12, p: new URLSearchParams(pp).toString(), d: "", u: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36", ish5: false });
    }
}


function sendMsg(data){
    let child = fork("../qxVm/bdms/ab.js");
    child.on('message', proHandler);
    child.send(data)
}

function getData(){
    return {
        msToken,
        a_bogus,
    }
}

function resetab(){
    a_bogus = "";
}

module.exports = {
    sendMsg,
    getData,
    resetab
}