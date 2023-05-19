import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])}>
            123
        </div>
    </DynamicModuleLoader>
);

export default ProfilePage;