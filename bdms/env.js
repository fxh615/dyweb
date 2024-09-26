window = global;
delete global;
delete Buffer;
document = {
    fonts: {},
    characterSet: "UTF-8",
    images: ["n.jpg"]
}
document.all = {}
navigator = {}
//navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
document.createElement = function (name) {
    if (name == 'span') {
        return [{}]
    }
}
document.documentElement = '<html></html>'
document.createEvent = function () {
    return 'createEvent() { [native code] }'
}
document.createElement = function () {
    return 'createElement() { [native code] }'
}
window.requestAnimationFrame = function () {
    return 'requestAnimationFrame() { [native code] }'
}
window.webkitRequestAnimationFrame = function () {
    return 'webkitRequestAnimationFrame() { [native code] }'
}

document.addEventListener = function (){
    return 'addEventListener() { [native code] }'
}
window.self = {}
window.top = {}
window.addEventListener = function (){
    return 'addEventListener() { [native code] }'
}
window.postMessage = function (){
    return 'postMessage() { [native code] }'
}
window.BluetoothUUID = function (){
    return 'BluetoothUUID() { [native code] }'
}
window.toolbar = {
    visible: true
}
window.locationbar = {
    visible: true
}
window.location = {
    href: "https://www.douyin.com/"
}
window.isSecureContext = true
window.chrome = {}

window.devicePixelRatio = 1
window.Image = function (){
    return 'Image() { [native code] }'
}
window.sessionStorage = {}
window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.51",
    "bdmsVersion": "1.0.1.5",
    "captchaVersion": "4.0.2"
}
XMLHttpRequest = function () {
    return 'XMLHttpRequest() { [native code] }'
}

window.fetch = function () {
    return `(input, init) {
	        var _this6 = this;
	        var url, method;
	        if (IS_REQUEST_API_SUPPORTED && input instanceof Request) {
	          url = input.url;
	          method = input.method…`
}

window.onwheelx = {
    "_Ax": "0X21"
}

navigator.vendorSubs = {
    "ink": Date.now()
}
navigator.platform = 'MacIntel'
document.body = {}

window.innerWidth = 535
window.innerHeight = 1342
window.outerWidth = 2560
window.outerHeight = 1415
window.screenX = -456
window.screenY = -1415
window.pageYOffset = 0
window.pageYOffset = 0
document.body.clientWidth = 535
document.body.clientHeight = 1342

window.screen = {
    availWidth: 1415,
    availHeight: 2560,
    width: 1512,
    height: 982,
    colorDepth: 24,
    pixelDepth: 24,
    orientation: {
        type: "landscape-primary",
        angle: 0
    },
};

(function (){
    let random_str = '';
    let base_str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789=';
    let arr = base_str.split("");
    let len = base_str.length - 1;
    let tmp = [116, 120]; //随机产生116位120位的 msToken
    let n = tmp[Math.ceil(Math.random()*2)-1];
    for(let i=0; i<n; i++){
        random_str += arr[Math.ceil(Math.random()*len)]
    }
    window.xsmt = random_str
})()


localStorage = {
    getItem(key) {
        console.log(key)
        return "PxUnm6pPmEaWhjrDyVf5AQ1teMswXDOIa_oVByPftoiwmiMT2bpi75FgqOPhm7Bq-p2Q47B-Sdg4fSAa237IJ7ZIFjA07ryuKzIJXrm7HPP08cywGK4PaIgHpBmy9U8LCmiMVycgCNI2yxB1u7eu0gZZQfJQAIAAoPjuaTj1bHlDD9jIAIf6wXk=" //window.xsmt
    },
    "Symbol.toStringTag": {
        value: "Symbol"
    }
}
function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            //'"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}
proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen', 'navigation', 'localStorage', 'aaa', 'target']
get_enviroment(proxy_array)


