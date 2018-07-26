import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from '../HomePage';
import PersonalCenterPage from '../center/user/PersonalCenterPage';
import FindPage from '../center/find/FindPage';
import LiquorCulturePage from '../center/culture/LiquorCulturePage';
import ShoppingCarPage from '../trader/ShoppingCarPage';
import LoginPage from '../center/user/LoginPage';
import RegistPage from '../center/user/RegistPage';
import ForgetPwdPage from '../center/user/ForgetPwdPage';

const Tabs = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: () => (
                <Icon name='md-home' size={18}/>
            ),
        }
    },
    Find:{
        screen: FindPage,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: () => (
                <Icon name='md-compass' size={18}/>
            ),
        }
    },
    Culture:{
        screen: LiquorCulturePage,
        navigationOptions: {
            tabBarLabel: '酒文化',
            tabBarIcon: () => (
                <Icon name='md-book' size={18}/>
            ),
        }
    },
    ShoppingCar: {
        screen: ShoppingCarPage,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: () => (
                <Icon name='md-cart' size={18}/>
            ),
        }
    },
    UserCenter: {
        screen: PersonalCenterPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: () => (
                <Icon name='md-person' size={18}/>
            ),
        }
    }
},{
    animationEnabled: true, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#FF0011', // 文字和图片选中颜色
        inactiveTintColor: '#555555', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#FFFFFF', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    },
});

export default createStackNavigator({
    Main: {
        screen: Tabs
    },
    LoginPage: {
        screen: LoginPage
    },
    RegistPage: {
        screen: RegistPage
    },
    ForgetPwdPage: {
        screen: ForgetPwdPage
    }
},{
    headerMode: 'none',  // 标题导航
    initialRouteName: 'Main', // 默认先加载的页面组件
    mode: 'modal'       // 定义跳转风格(card、modal)
});