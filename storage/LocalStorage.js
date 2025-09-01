import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveObjects(key, value) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        console.log('Objeto salvo com sucesso!');
    } catch (e) {
        console.error('Erro ao salvar objeto', e);
    }
}

export async function getObjects(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error('Erro ao recuperar objeto', e);
    }
}