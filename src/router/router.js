import App from '../App'
import Error from '@/components/Error'

const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const homelist = r => require.ensure([], () => r(require('../page/home/children/homelist')), 'homelist')
const party = r => require.ensure([], () => r(require('../page/party')), 'party')
const shopcart = r => require.ensure([], () => r(require('../page/shopcart')), 'shopcart')
const Qsearch = r => require.ensure([], () => r(require('../page/Qsearch')), 'Qsearch')
const shoplist = r => require.ensure([], () => r(require('../page/shoplist')), 'shoplist')
const shopdetail = r => require.ensure([], () => r(require('../page/shopdetail')), 'shopdetail')
const partydetail = r => require.ensure([], () => r(require('../page/partydetail')), 'partydetail')
const Hsearch = r => require.ensure([], () => r(require('../page/Hsearch')), 'Hsearch')
const center = r => require.ensure([], () => r(require('../page/center')), 'center')
const userinfo = r => require.ensure([], () => r(require('../page/center/children/userinfo')), 'userinfo')
    // const mycenter = r => require.ensure([], () => r(require('../page/center/children/mycenter')), 'mycenter')
const editprofile = r => require.ensure([], () => r(require('../page/center/children/editprofile')), 'editprofile ')
const myorder = r => require.ensure([], () => r(require('../page/center/children/myorder')), 'myorder ')
const mycollect = r => require.ensure([], () => r(require('../page/center/children/mycollect')), 'mycollect ');

const eticket = r => require.ensure([], () => r(require('../page/center/children/eticket')), 'eticket ')
const mycoupons = r => require.ensure([], () => r(require('../page/center/children/mycoupons')), 'mycoupons ')
const orderpay = r => require.ensure([], () => r(require('../page/center/children/orderpay')), 'orderpay ')
const comment = r => require.ensure([], () => r(require('../page/center/children/comment')), 'comment ') //评论
const orderdetail = r => require.ensure([], () => r(require('../page/center/children/orderdetail')), 'orderdetail ') //订单详情
const shopmeal = r => require.ensure([], () => r(require('../page/shopmeal')), 'shopmeal')
const mealdetail = r => require.ensure([], () => r(require('../page/mealdetail')), 'mealdetail')
const info = r => require.ensure([], () => r(require('../page/mealdetail/children/index')), 'info')
const partyangel = r => require.ensure([], () => r(require('../page/partyangel')), 'partyangel')
const partyangelList = r => require.ensure([], () => r(require('../page/partyangelList')), 'partyangelList') //派对使者列表

const grabsingle = r => require.ensure([], () => r(require('../page/grabsingle')), 'grabsingle')
const startindent = r => require.ensure([], () => r(require('../page/grabsingle/children/startindent')), 'startindent')
const indenting = r => require.ensure([], () => r(require('../page/grabsingle/children/indenting')), 'indenting')
const completeindent = r => require.ensure([], () => r(require('../page/grabsingle/children/completeindent')), 'completeindent')
const indentcenter = r => require.ensure([], () => r(require('../page/grabsingle/children/indentcenter')), 'indentcenter')
const grabtest = r => require.ensure([], () => r(require('../page/grabsingle/children/grabtest')), 'grabtest')
const shopstore = r => require.ensure([], () => r(require('../page/shopstore')), 'shopstore')
const mycenter = r => require.ensure([], () => r(require('../page/center/children/mycenter')), 'mycenter')
const cartpackage = r => require.ensure([], () => r(require('../page/cartpackage')), 'cartpackage')
const cartgoodorder = r => require.ensure([], () => r(require('../page/cartgoodorder')), 'cartgoodorder')
const author = r => require.ensure([], () => r(require('../page/author')), 'author')
const feedBack = r => require.ensure([], () => r(require('../page/center/children/feedback')), 'feedBack')
const aboutus = r => require.ensure([], () => r(require('../page/center/children/aboutus')), 'aboutus')
const orderStatus = r => require.ensure([], () => r(require('../page/grabsingle/children/orderStatus')), 'orderStatus')

export default [{
        path: '/author',
        component: author,
        meta: {
            title: '正在登陆'
        },
    },
    {
        path: '/',
        component: home,
        meta: {
            title: '壹圈圈'
        },
        children: [{
            path: '/home/homelist',
            component: homelist,
        }]
    },
    {
        path: '/party',
        component: party
    },
    {
        path: '/shopstore',
        component: shopstore,
        meta: {
            title: '商城首页'
        },
    },
    {
        path: '/cartgoodorder',
        component: cartgoodorder,
        meta: {
            title: '商品订单'
        },
    },
    {
        path: '/cartpackage',
        component: cartpackage,
        meta: {
            title: '套餐订单'
        },
    },
    {
        path: '/shopcart', //购物车
        component: shopcart,
        meta: {
            title: '购物车'
        },
    },
    {
        path: '/center',
        component: center,
        meta: {
            title: '个人中心'
        },
        redirect: '/center/mycenter',
        children: [
            { path: 'mycenter', component: mycenter, meta: { title: '个人中心' }, },
            { path: 'userinfo', component: userinfo },
            { path: 'editprofile', component: editprofile, meta: { title: '编辑资料' }, }, //编辑资料
            { path: 'myorder', component: myorder, meta: { title: '我的订单' }, }, //我的订单
            { path: 'mycollect', component: mycollect, meta: { title: '我的收藏' }, }, //我的收藏
            { path: 'eticket', component: eticket }, //我的电子票
            { path: 'mycoupons', component: mycoupons }, //我的优惠券
            { path: 'orderpay', component: orderpay, meta: { title: '订单支付' }, }, //我的订单支付尾款
            { path: 'comment', component: comment }, //评论
            { path: 'orderdetail', component: orderdetail, meta: { title: '订单详情' } }, //我的订单-购买n个单品或一个单品详情
            { path: 'feedBack', component: feedBack, meta: { title: '问题与反馈' }, },
            { path: 'aboutus', component: aboutus, meta: { title: '关于我们' }, },
        ]
    },
    {
        path: '/Qsearch',
        component: Qsearch,
        meta: {
            title: '商品搜索'
        },
    },
    {
        path: '/Hsearch',
        component: Hsearch,
        meta: {
            title: '搜索'
        },
    },
    {
        path: '/shoplist',
        component: shoplist,
        meta: {
            title: '商品列表'
        },
    },
    {
        path: '/shopdetail',
        component: shopdetail,
        meta: {
            title: '商品详情'
        },
    },
    {
        path: '/partydetail',
        component: partydetail,
        meta: {
            title: '派对详情'
        },
    },
    {
        path: '/shopmeal',
        component: shopmeal,
        meta: {
            title: '商品套餐'
        },
    },
    {
        path: '/mealdetail',
        component: mealdetail,
        meta: {
            title: '套餐详情'
        },
        children: [{
            path: 'info',
            component: info
        }]
    },
    {
        path: '/partyangel',
        component: partyangel,
        meta: {
            title: '派对师'
        },
    },
    {
        path: '/partyangelList',
        component: partyangelList,
        meta: {
            title: '派对使者'
        },
    },
    {
        path: '/grabsingle',
        component: grabsingle,
        redirect: '/grabsingle/startindent',
        children: [{
            path: 'startindent',
            component: startindent,
            meta: { title: '开始接单' },
        }, {
            path: 'indenting',
            component: indenting,
            meta: { title: '进行接单' },
        }, {
            path: 'completeindent',
            component: completeindent,
            meta: { title: '完成接单' },
        }, {
            path: 'indentcenter',
            component: indentcenter,
            meta: { title: '个人中心' },
        }, {
            path: 'grabtest',
            component: grabtest
        }, {
            path: 'orderStatus',
            component: orderStatus,
            meta: { title: '订单进行' },
        }]
    },
    {
        path: '*',
        component: Error,
        meta: {
            title: '错误啦'
        },
    }
]