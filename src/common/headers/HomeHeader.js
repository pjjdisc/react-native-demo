import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput,
} from 'react-native';
export default class HomeHeader extends Component{
    render(){
        return (
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <View style={styles.icons}>
                        <TouchableOpacity>
                            <Icon name='qrcode-scan' size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerInput}>
                        <Icon name='magnify' size={20} style={styles.headerIcon} />
                        <TextInput underlineColorAndroid='transparent' placeholder='请输入查询条件' style={styles.headerTextInput} />
                    </View>
                    <View style={styles.icons}>
                        <TouchableOpacity>
                            <Icon name='forum' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        zIndex: 999,
        paddingTop: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
    headerIcon: {
        marginTop: 10,
        marginLeft: 10,
    },
    headerTextInput: {
        width: 290,
        height: 40,
    },
    icons:{
        padding: 10,
    }
});