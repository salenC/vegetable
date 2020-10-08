const App = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 自定义顶部导航
    navHeight: App.globalData.navHeight,
    navTop: App.globalData.navTop,
    // 图标
    searchIcon: "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/45NBuzDIW489QBoVep5mcTx68k0zHnPbiss7VcQ3*ahzYEq1qAByU3NYPcUPav2wjtYZMb7OgW24qSHdMCaFv2DtMfaugjmjutv1R.EK0zY!/b&bo=yADIAAAAAAADFzI!&rf=viewer_4&t=5",
    eyeIconOne: "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/ruAMsa53pVQWN7FLK88i5jwnbCTYc1ZMmcEnPEayuvO5iV8KJPv6oWqeOYvnWDmfNVyv8sFcBHjdqphqV*tiFF6.vvb.QW6k9.6DRTeUoU8!/b&bo=WQHIAAAAAAADB7I!&rf=viewer_4&t=5",
    eyeIcon: "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/45NBuzDIW489QBoVep5mcTx68k0zHnPbiss7VcQ3*agyqKO21m0MlQPKigOf3A5Y*m7zKtn06goSGN2xYOx1c44uL646UoeZc1mpoiGfLgw!/b&bo=yADIAAAAAAADFzI!&rf=viewer_4&t=5",
    upperLeftArrow: "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/ruAMsa53pVQWN7FLK88i5jwnbCTYc1ZMmcEnPEayuvN2.Kv2l*jXElJX.TLrtkarx4FXKJb5ZAiKRVT*KFA4thHk9.ssGDxtMOVFY4rNhYg!/b&bo=yADIAAAAAAADByI!&rf=viewer_4&t=5",
    recommend: [ //热门推荐
      {
        title: "早餐"
      },
      {
        title: "晚餐"
      },
      {
        title: "奶茶"
      },
      {
        title: "小吃"
      },
      {
        title: "面食"
      },
      {
        title: "烧烤"
      },
      {
        title: "炖汤"
      },
      {
        title: "请客"
      },
      {
        title: "美食"
      },
      {
        title: "网红食品"
      }
    ],
    historyStorage: [],        //历史搜索
    historyStorageShow: false,
    falg: true,         //换一批
    hotsearch1: [{ title: "早餐" }, { title: "面食" }, { title: "晚餐" }, { title: "网红食品" }, { title: "美食" }, { title: "炖汤" }, { title: "小吃" }, { title: "请客" }, { title: "奶茶" }, { title: "烧烤" }, { title: "简易晚餐" }, { title: "单人美食" }],
    hotsearch2: [{ title: "美食" }, { title: "网红美食" }, { title: "小吃" }, { title: "在家自制美食" }, { title: "晚餐" }, { title: "美味炖汤" }, { title: "秋天第一杯奶茶" }, { title: "烘焙" }, { title: "烤箱美食" }, { title: "简单美食" }, { title: "地方美食" }, { title: "烤冷面" }],
    // searchresult: false,
    inputValue: "",        //输入框输入的值
    replaceValue: "",     //替换输入框的值
    eye: true,        //显示隐藏
    searchresult: false,
    searchResult: [{ result: "美食" }, { result: "早餐" }, { result: "小吃" }, { result: "烤箱美食" }, { result: "美味炖汤" }, { result: "烘焙" }, { result: "奶茶" }, { result: "面食" }, { result: "网红小吃" }]//虚拟的查询结果
  },
  // 点击返回上一级
  goBack: function() {
    let pages = getCurrentPages();      //获取小程序页面栈
    let beforePage = pages[pages.length - 2];       //获取上个页面的实例对象
    beforePage.setData({
      txt: "修改数据了"
    })
    beforePage.goUpdate();           //触发上个页面自定义的go_update()方法
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 获取顶部固定高度
   */
  attached: function() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
    })
  },
  /**
   * 换一批操作
   */
  changeother: function () {
    this.setData({
      falg: !this.data.falg
    })
  },
 
  /**
   * 热门搜索显示隐藏
   */
  reye: function () {
    this.setData({
      eye: !this.data.eye
    })
  },
 
  /**
   * 清除
   */
  remove: function () {
    var _this = this
    wx: wx.showModal({
      content: '确认清除所有历史记录?',
      success: function (res) {
        if (res.confirm) {
          wx: wx.removeStorage({
            key: 'historyStorage',
            success: function (res) {
              _this.setData({
                historyStorage: []
              })
              wx.setStorageSync("historyStorage", [])
            },
          })
        } else {
          console.log("点击取消")
        }
      },
    })
  },
 
 
  /**
   * 获取input的值
   */
  getInputValue(e) {
    // console.log("获取value值",e.detail)   // {value: "ff", cursor: 2}
    this.setData({
      inputValue: e.detail.value
    })
    this.setData({
      searchresult: true,
    })
  },
 
  /**
   * 点击搜索提交跳转并存储历史记录
   */
  searchbegin: function (e) {
    let _this = this
    var data = e.currentTarget.dataset;
    _this.data.replaceValue = e.currentTarget.dataset.postname
    // _this.data.replaceValue = 
    wx: wx.setStorage({
      key: 'historyStorage',
      data: _this.data.historyStorage.concat(_this.data.inputValue),
      data: _this.data.historyStorage.concat(_this.data.replaceValue)
    })
    // console.log(_this.data.inputValue)
    // console.log(_this.data.historyStorage)
    wx.navigateTo({
      url: '../../commodity/commodity-search-list/index?postName=' + data['postname']
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 历史搜索
    let that = this
    wx.getStorage({
      key: 'historyStorage',
      success: function (res) {
        console.log(res.data)
        that.setData({
          historyStorageShow: true,
          historyStorage: res.data
        })
      }
    })
  },
  //点击进入详情页
  goToList: function (e) {
    
  },
  goUpdate: function() {
    this.onLoad()
    console.log("我更新啦")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
 
  }
})