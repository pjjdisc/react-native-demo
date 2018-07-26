import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from './common/headers/HomeHeader';

export default class HomePage extends Component{
    render(){
        const { navigate } = this.props.navigation;
        let homeHeader = <View style={styles.homeHeader}>
            <HomeHeader navigate={navigate} />
        </View>;
        return (
            <View>
                {homeHeader}
                <Text>我是首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeHeader:{
        height: 60,
    }
});