
require("./env")
require("./bdms_new")

function get_a_bogus(p,d,u) {
    window.bdms.init({
        "aid": 6383,//动态
        "pageId": 11881, //动态
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
        12,//每个接口不一样, 动态
        p,//动态
        d,//动态
        u
    ]
    let r = window.dy._v;
    return (0, window.dy._u)(r[0], arguments, r[1], r[2], this)
}


// p = "is_h5=1&origin_type=638301&device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&update_version_code=170400&version_code=&version_name=&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=en-US&browser_platform=MacIntel&browser_name=Chrome&browser_version=127.0.0.0&browser_online=true&engine_name=Blink&engine_version=127.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=10&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7405423746868512295&msToken=lV8flwO8eKtMWcrABPYxeIRg3cC1pwpr1WwHDEE9sGr-E4ED5faTgfhDcaGEUMAEpH0nVcSTyF9s-C_v1gJRpZyEt3NJmegg-tqCKkD-GOpOBiuzlQw3"
// d = "bff_type=2&ec_promotion_id=3541709143809368902&is_h5=1&item_id=0&live_room_id=7407206742544714506&origin_type=638301&promotion_ids=3541709143809368902&room_id=7407206742544714506&sec_author_id=MS4wLjABAAAA1xAu5BcrjPFhvH9Flt8tbHyFovHN7sIiEZ-1uQzGFdZOKoy9JjPIlqqP82Dyt7z4&use_new_price=1"
// u = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"

// let pd =  new URLSearchParams({
//         'bff_type': '2',
//         'ec_promotion_id': '3693617674354556947',
//         'is_h5': '1',
//         'item_id': '0',
//         'live_room_id': '7410633264316336908',
//         'origin_type': '638301',
//         'promotion_ids': '3693617674354556947',
//         'room_id': '7410633264316336908',
//         'sec_author_id': 'MS4wLjABAAAAIX5WsdUbhlAbkhhi7pHR43QRw9fj1LZjz5QEDbzAlK8',
//         'use_new_price': '1'
//     })
//

let pp = {
    'device_platform': 'webapp',
    'aid': '6383',
    'channel': 'channel_pc_web',
    'publish_video_strategy_type': '2',
    'source': 'channel_pc_web',
    'sec_user_id': 'MS4wLjABAAAA2TV5dVyx4XiLKmZpaZqLhga9k5ua5x9VprORdtj6Z6w',
    'personal_center_strategy': '1',
    'update_version_code': '170400',
    'pc_client_type': '1',
    'version_code': '170400',
    'version_name': '17.4.0',
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
    'webid': '7413203101258303017',
    'msToken': 'ivrAldpPPh3tbu19X3R-dRhHo9hWYMxIkXIeDaqSwMFpjQVwwtOc38vOUZB-lPjfg2XT1YUIp36VRJJPpStAP8mcYFfjWcrklnoqcp9NNSvmuvKJlFopEI662nUgcdw=',
    'a_bogus': 'dymZMDz6mEVikfWD5XOLfY3q6Ir3Y29p0CPYMD2fDnf5fg39HMP29exLV5zvxdWjN4/kIeWjy4hSYreME5Iy0Hw39W4x/2Cpm640cMBp-dSi5ZknCEumE0DF-vTAtPBm-kBlrOXmqw1Hzbmp09cj5vIWPEqCYrtswyG7GvHPViE6oC0f-j==',
    'verifyFp': 'verify_m0x89irp_Y3QwstK0_VoIT_4wSy_9OKU_rmgvomwrvIBH',
    'fp': 'verify_m0x89irp_Y3QwstK0_VoIT_4wSy_9OKU_rmgvomwrvIBH'
}
// let pp = {
//     'device_platform': 'webapp',
//     'aid': '6383',
//     'channel': 'channel_pc_web',
//     'sec_user_id': 'MS4wLjABAAAAaxo80sIT3D1EGmbPx0BGtoPxBgFedWk3M5qNfqK-4jGKoqMpapdhyv_VRbWx-Woh',
//     'max_cursor': '0',
//     'locate_query': 'false',
//     'show_live_replay_strategy': '1',
//     'need_time_list': '0',
//     'time_list_query': '0',
//     'whale_cut_token': '',
//     'cut_version': '1',
//     'count': '18',
//     'publish_video_strategy_type': '2',
//     'update_version_code': '170400',
//     'pc_client_type': '1',
//     'version_code': '290100',
//     'version_name': '29.1.0',
//     'cookie_enabled': 'true',
//     'screen_width': '2560',
//     'screen_height': '1440',
//     'browser_language': 'en-US',
//     'browser_platform': 'MacIntel',
//     'browser_name': 'Chrome',
//     'browser_version': '127.0.0.0',
//     'browser_online': 'true',
//     'engine_name': 'Blink',
//     'engine_version': '127.0.0.0',
//     'os_name': 'Mac OS',
//     'os_version': '10.15.7',
//     'cpu_core_num': '10',
//     'device_memory': '8',
//     'platform': 'PC',
//     'downlink': '1.6',
//     'effective_type': '4g',
//     'round_trip_time': '50',
//     'webid': '7410627582167877146',
//     'msToken': 'nPRrzQCRcRBrdH7x7p2ciMFW9m__lznMLPwGqV-izgEv54q79qJdCwJMOmDbQ9-LKGRYz6FhgYyMoB3Qu_4y77KYjWMxctoQcOyal9SjoJTPZ6c6_lXzLA0KPxM4zUA=',
//     //'a_bogus': 'xyWMBmghdkIpXfW653KLfY3q6vl3YhMx0trEMD2fHdV/ZL39HMO19exoQ8Tv7i6jN4/kIefjy4hbYrxhrQAr0ryUHuXLUdQ2sgmgKl3Z5o4jUZXHeLsgrsJNmkJ5tlc25kpAiCiMow2aSYuhl9Fe-XOlOyZtapthwyG7GIQCXvj-N8tVveMVwD==',
//     'verifyFp': 'verify_m0ndw5wc_c3893ffb_9c91_d1cd_e0de_f5905621d27a',
//     'fp': 'verify_m0ndw5wc_c3893ffb_9c91_d1cd_e0de_f5905621d27a'
// }
// //
// let u = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
// // //
// let ab = get_a_bogus(new URLSearchParams(pp).toString(), "", u);
// //
// console.log(ab)
// process.exit(1)

process.on('message', (message) => {
    console.log('来自主进程的消息:', message);
    if(message.p){
        process.send({ ab: get_a_bogus(message.p,message.d,message.u)});
        process.exit(1)
    }
    if(message.xsmt){
        process.send({ xsmt: "4ViUXQFV3xFVtBdOVSxeQBz3pPP3kthbtZFxqcXw8rSHmAh2ZmETkrsxtl5HBQ6zexwj0-fqlIKddCrPp7CPGT_dBArmyfEYpCd132-nhFrkn0QYNNvo9m7uvXJPWIU="});
    }
    if(message.quit){
        process.exit(1)
    }
});


