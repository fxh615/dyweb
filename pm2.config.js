module.exports = {
    apps: [
        {
            script: "./z_working/demoServerVm.js",
            instances: "4",
            exec_mode: "cluster",
            name: "z_working",
        },
    ],
};