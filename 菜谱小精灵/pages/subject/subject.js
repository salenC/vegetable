Page({
  data: {
    indicatorDots:true,
 imgUrls:[
  "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/45NBuzDIW489QBoVep5mcQQGYMjulTMZm0dLbGwKSIVXzXtTGkR.ApItX.O8meJZS9cFosx7O5UBGT3MP9FAogvkR22Xv0Mxhtr0H4*d.48!/b&bo=NwQ8BAAAAAABFzs!&rf=viewer_4",
  "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/ruAMsa53pVQWN7FLK88i5kXlTBYNgbBqiJ6JFTOQb917OSoHbwZJuHdqJe20vU*F6Ocj1v4UmrhVQelxMtGf0SArTGHB2avxq91uYHCCrc0!/b&bo=NwQ8BAAAAAABBys!&rf=viewer_4&t=5",
  "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/45NBuzDIW489QBoVep5mcQQGYMjulTMZm0dLbGwKSIUMISI3xMxVw8Ig92rxeD8FDQoEnan6kmyuil*iAm..BlWzY9VWkHgkkHt7YxhvXO4!/b&bo=LAQqBAAAAAABFzY!&rf=viewer_4&t=5",
  "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/45NBuzDIW489QBoVep5mcbOQgTUPMoyC7X*w82U0hpsR5LPhZ21802tfUbgIHvNXdH4vwXOMdOIXFn4zPC2OfA*0WnDBJON759Di53uZSDI!/b&bo=NwQtBAAAAAABFyo!&rf=viewer_4&t=5",
  "http://m.qpic.cn/psc?/V51u6aVx1s44E34bNCql1tLYmn1iY5I6/45NBuzDIW489QBoVep5mcaS26ph7czPYPgcXJbiEe4l6x4pojjhXbYIPhNbep78UkKKjWYd8GJoN6cUws1TOHdvTWapQW21sMKBv6QeQ59I!/b&bo=NwQxBAAAAAABFzY!&rf=viewer_4&t=5"
]
 },
seeDetail:function(e){
  wx.navigateTo({
   url: '../subjectDetail/subjectDetail?id='+e.currenTarget.id
 })  
} 
})
