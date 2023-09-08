module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
        'storybook-addon-themes',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
