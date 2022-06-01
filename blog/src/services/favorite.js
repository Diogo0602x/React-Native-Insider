import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

// Buscacr categoria favoritada
export async function getFavorite(){
    const data = await AsyncStorage.getItem('@favCategory');

    if(data !== null){
        const response = await api.get(`/api/categories/${data}?fiels=name&populate=posts.cover`);

        return response.data?.data?.attributes?.posts?.data;
    } else {
        return [];
    }
}

// Favoritar categoria
export async function setFavorite(category){
    await AsyncStorage.setItem('@favCategory', String(category));

    const response = await getFavorite();

    return response;
}