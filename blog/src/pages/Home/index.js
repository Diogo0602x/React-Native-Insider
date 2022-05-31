import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import CategoryItem from '../../components/CategoryItem';

export default function Home(){
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadData(){
            const category = await api.get('/api/categories?populate=icon');
            setCategories(category.data.data);
        }

        loadData();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.name}>DevBLog</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Feather name="search" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{paddingRight: 12}}
                style={styles.categories}
                data={categories}
                keyExtractor={ (item) => item.id}
                renderItem={ ({ item }) => (
                    <CategoryItem
                        data={item}
                    />
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#232630'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 18,
        marginBottom: 24
    },
    name:{
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold'
    },
    categories:{
        maxHeight: 115,
        backgroundColor: '#EFEFEF',
        marginHorizontal: 18,
        borderRadius: 8,
        zIndex: 9
    }
})