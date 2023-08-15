module.exports = function (api) {
    api.cache(true);
    return {
        plugins: [
            'macros',
            '@babel/plugin-proposal-private-property-in-object'
        ],

    }
}