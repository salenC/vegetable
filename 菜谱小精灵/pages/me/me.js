//获取应用实例
var App=getApp()
Page({
  data:{
    motto:'欢迎',
    userInfo:{}
  },
  onLoad:function(options){
    console.log('onLoad')
    var that=this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
})