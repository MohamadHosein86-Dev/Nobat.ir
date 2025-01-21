import { PersistedStorage } from 'redux-persist';

declare module 'redux-persist/lib/storage/getStorage' {
    const getStorage: PersistedStorage;
    export default getStorage;
}