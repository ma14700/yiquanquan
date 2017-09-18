import {
    ADD_CART,
    REDUCE_CART,
    INIT_BUYCART,
    CLEAR_CART,
    SETTLE_ACCOUNTS,
    GIT_SETTLE_ACCOUNTS,
    CLEAR_SETTLE_ACCOUNTS,
    SETTLE_PACKAGE_ACCOUNTS,
    GIT_SETTLE_PACKAGE_ACCOUNTS,
    IS_PACKAGE_ADD_MORE,

    RECORD_USERINFO,
    GET_USERINFO

} from './mutation-types'
import { setStore, getStore, removeStore } from '../config/mUtils'
export default {

    //结算商品（详情页）
    [SETTLE_ACCOUNTS](state, {
        SkuInfoId,
        CartNum,
        CartGoodId,
        goodName,
        goodTotalPrice,
        goodImgUrl,
        OrderType
    }) {

        // let item = Accounts[SkuInfoId] = (Accounts[SkuInfoId] || {});
        // item[SkuInfoId] = {
        //     "SkuInfoId": SkuInfoId,
        //     "CartNum": CartNum,
        //     "CartGoodId": CartGoodId,
        //     "goodName": goodName,
        //     "goodTotalPrice": goodTotalPrice,
        //     "goodImgUrl": goodImgUrl,
        //     "OrderType": 2
        // }
        let Accountsjson = {};
        Accountsjson.SkuInfoId = SkuInfoId;
        Accountsjson.CartNum = CartNum;
        Accountsjson.CartGoodId = CartGoodId;
        Accountsjson.goodName = goodName;
        Accountsjson.goodTotalPrice = goodTotalPrice;
        Accountsjson.goodImgUrl = goodImgUrl;
        Accountsjson.OrderType = 2;
        state.settleAccounts.push(Accountsjson)
        setStore('settleAccounts', state.settleAccounts);
        console.log(state.settleAccounts);
        console.log("jiesuan")

    },
    //
    [GIT_SETTLE_ACCOUNTS](state) {
        let test = getStore('settleAccounts')
        if (test) {
            state.settleAccounts = JSON.parse(test);
        }

    },
    //清除商品结算
    [CLEAR_SETTLE_ACCOUNTS](state, index) {

        state.settleAccounts.splice(index, 1);
        console.log('qingchu');
        setStore('settleAccounts', state.settleAccounts);
        console.log(state.settleAccounts);


    },
    //结算套餐
    [SETTLE_PACKAGE_ACCOUNTS](state, {
        packageId,
        discountPrice,
        downPayment,
        imgUrl,
        name,
        summary,
        OrderType
    }) {
        let packageAccounts = state.settlePackageAccounts;
        let item = packageAccounts[packageId] = (packageAccounts[packageId] || {});
        item[packageId] = {
            'packageId': packageId,
            "discountPrice": discountPrice,
            "downPayment": downPayment,
            "imgUrl": imgUrl,
            "name": name,
            "summary": summary,
            "OrderType": 1
        }

        state.settlePackageAccounts = {...packageAccounts };
        setStore('settlePackageAccounts', state.settlePackageAccounts);
        console.log(state.settlePackageAccounts);
    },
    //
    [GIT_SETTLE_PACKAGE_ACCOUNTS](state) {
        let aaa = getStore('settlePackageAccounts');
        if (aaa) {
            state.settlePackageAccounts = JSON.parse(aaa);
        }

    },


    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        setStore('userInfo', state.userInfo)
    },
    //获取用户信息存入vuex
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        };
        if (!state.login) {
            return
        }
        if (!info.message) {
            state.userInfo = {...info };
        } else {
            state.userInfo = null;
        }
    },
    //套餐加选商品的状态
    [IS_PACKAGE_ADD_MORE](state, {
        moreGood,
        packageOrderId
    }) {
        let json = {}
        json.moreGood = moreGood;
        json.packageOrderId = packageOrderId;

        state.addMoreGood.push(json)
        setStore('addMoreGood', state.addMoreGood);



    }



}