import { createReduxStore, AppDispatch } from 'app/providers/StoreProvider/config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
};

export type { AppDispatch };
