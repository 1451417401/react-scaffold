//process.env.NODE_ENV 用于在业务代码中区别开发和生产环境
//这里的场景是不同的环境对应不同的接口

var host='https://devapi.com';
if(process.env.NODE_ENV=='prd'){
    host='https://prdapi.com';
}

export default {
    doLogin: host+'/server/accountLogin',
    checkLogin: host+'/server/checklogin',
} 