const fs = require('fs');
const QXVM_GENERATE = require('../qxVm_sanbox/qxVm.sanbox');

function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

const js_code = ReadCode(`./dbms.js`);

const user_config = {
    isTest: false,
    runConfig: { proxy: false, logOpen: true},
    window_attribute: {},
    env: {
        canvas: "data:image/png;base64,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",
        navigator: {
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            "plugins": {
                "0": {
                    "length": 2,
                    "item": function (a, b, c, d, e, f, g) {
                    },
                    "name": "PDF Viewer",
                    "filename": "internal-pdf-viewer"
                },
                "1": {
                    "length": 2,
                    "item": function (a, b, c, d, e, f, g) {
                    },
                    "name": "Chrome PDF Viewer",
                    "filename": "internal-pdf-viewer"
                },
                "2": {
                    "length": 2,
                    "item": function (a, b, c, d, e, f, g) {
                    },
                    "name": "Chromium PDF Viewer",
                    "filename": "internal-pdf-viewer"
                }
            },
            "webdriver": false,
            platform: "MacIntel",
            "appCodeName": "Mozilla",
            "appName": "Netscape",
            "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0",  // 与你请求发送时相同的userAgent
            "language": "en-US",
            "product": "Gecko",
            "productSub": "20030107",
            "vendor": "Google Inc.",
            "vendorSub": "",
            "cookieEnabled": true,
            'hardwareConcurrency': 12,
            'connection': 'NetworkInformation',
            'downlink': 10
        },
        // localStorage: {
        //     getItem(key) {
        //         //console.log(key)
        //         return "4ViUXQFV3xFVtBdOVSxeQBz3pPP3kthbtZFxqcXw8rSHmAh2ZmETkrsxtl5HBQ6zexwj0-fqlIKddCrPp7CPGT_dBArmyfEYpCd132-nhFrkn0QYNNvo9m7uvXJPWIU=" //window.xsmt
        //     }
        // },
        // onwheelx: {
        //     "_Ax": "0X21"
        // },
        location: {
            "ancestorOrigins": {},
            "href": "https://www.douyin.com/search/%E6%B8%B8%E6%88%8F?aid=96d47049-4ef1-40c6-9f1b-d3233b9f0bc0&type=general",
            "origin": "https://www.douyin.com",
            "protocol": "https:",
            "host": "www.douyin.com",
            "hostname": "www.douyin.com",
            "port": "",
            "pathname": "/search/%E6%B8%B8%E6%88%8F?aid=96d47049-4ef1-40c6-9f1b-d3233b9f0bc0&type=general",
            "search": "",
            "hash": ""
        },
        document: {
            referrer: "https://www.douyin.com/search/%E6%B8%B8%E6%88%8F?aid=96d47049-4ef1-40c6-9f1b-d3233b9f0bc0&type=general",
            cookie: "__ac_nonce=066f0bd4900008a933438;",
            all: {}
        }
    }
}
// 帮助信息打印
QXVM_GENERATE.help()

let result = QXVM_GENERATE.sanbox(js_code, "get_a_bogus", user_config, false);
p = "is_h5=1&origin_type=638301&device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&update_version_code=170400&version_code=&version_name=&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=en-US&browser_platform=MacIntel&browser_name=Chrome&browser_version=127.0.0.0&browser_online=true&engine_name=Blink&engine_version=127.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=10&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7405423746868512295&msToken=lV8flwO8eKtMWcrABPYxeIRg3cC1pwpr1WwHDEE9sGr-E4ED5faTgfhDcaGEUMAEpH0nVcSTyF9s-C_v1gJRpZyEt3NJmegg-tqCKkD-GOpOBiuzlQw3"
d = "bff_type=2&ec_promotion_id=3541709143809368902&is_h5=1&item_id=0&live_room_id=7407206742544714506&origin_type=638301&promotion_ids=3541709143809368902&room_id=7407206742544714506&sec_author_id=MS4wLjABAAAA1xAu5BcrjPFhvH9Flt8tbHyFovHN7sIiEZ-1uQzGFdZOKoy9JjPIlqqP82Dyt7z4&use_new_price=1"
u = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
let ab = result.get_a_bogus(p,d,u)
console.log("ab:", ab)
//console.log(cookieInfo['FSSBBIl1UgzbN7N80T'], cookieInfo['FSSBBIl1UgzbN7N80T'].length)

//console.log(result.printLog())