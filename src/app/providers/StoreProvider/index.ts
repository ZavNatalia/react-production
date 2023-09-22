import type {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
} from './config/StateSchema';
import type { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider };

export type {
    AppDispatch,
    ThunkConfig,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
};
