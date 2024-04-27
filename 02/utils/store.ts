import AsyncStorage from '@react-native-community/async-storage';

export class store {

    async setItem(key: string, val: any) {
        let data = JSON.stringify(val);
        await AsyncStorage.setItem(key, data)
    }

    getItem = async (key: string) => {
        var val = await AsyncStorage.getItem(key);
        if (!val || val === 'null') return '';
        return JSON.parse(val);
    }

    removeItem(key: string) {
        AsyncStorage.removeItem(key)
    }

} //class

export const storage = new store();