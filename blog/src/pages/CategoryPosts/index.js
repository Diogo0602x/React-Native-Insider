import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryPosts(){
    return(
        <View style={style.container}>
            <Text>Posts de uma categoria</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})