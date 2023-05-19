import { createReduxStore, AppDispatch } from 'app/providers/StoreProvider/config/store';
import type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
};
