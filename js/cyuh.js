//查找box元素
var box = document.getElementById('box')
console.log(box)
//innerHTML   innerText
//box.innerHTML = '<div>我是div</div>'
///box.innerText = '<div>我是div</div>'

// box.innerHTML = '<div>'+1+'</div><div>'+2+'</div>'

// 购物车中的商品数据
var list ={
    id:
}

//定义一个的空字符串
var s =''
//循环
for(let i = 0; i< 10;i ++){
    //字符串拼接
    s +='<div>'+i+'</div>'
    console.log(i,'aaa')
}
// 将拼接好的字符串加载到页面中
box.innerHTML = 5
 s +'<div class="goodsCard">'+
'<!-- 标题 -->'+
'<div class="gc-tit">'+
    '<label for="">'+
        '<input type="checkbox">'+
        'c#编程基础'+
   '</label>'+
'</div>'+
'<!-- 详情 -->'+
'<div class="gc-detail flx">'+
   '<div class="gc-img"></div>'+
    '<div class="gc-ctt">'+
        '<div class="gc-txt">名称；C#编程基础</div>'+
        '<div class="gc-txt">编组；色色是</div>'+
        '<div class="gc-txt">出版；扶斐斐</div>'+
       ' <div class="gc-txt">简介；杀杀杀哒哒哒我的娃顶顶顶</div>'+
    '</div>'+
'</div>'+
'<!-- 单价与删除 -->'+
'<div class="price flx">'+
    '<div class="pri">单价</div>'+
    '<div class="dele iconfont">&#xe60b;</div>'+
'</div>'+
'<!-- 小时与数量修改 -->'+
'<div class="total">'+
    '<div class="tot">总价</div>'+
    '<div class="tot-btn"></div>'+
'</div>'+
'</div>'+
'<div class="gc-tit">'+
    <label for="">+
       ' <input type="checkbox">'+
        'c#编程基础'+
    '</label>'+
'</div>'+
'</div>'+
'</div>'