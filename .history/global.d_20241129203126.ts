import { Storage } from 'redux-persist';

declare module 'redux-persist/lib/storage/getStorage' {
    const getStorage: Storage;
    export default getStorage;
}