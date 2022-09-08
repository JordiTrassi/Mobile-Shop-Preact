module.exports = {
    plugins: [
    [ '@babel/plugin-transform-react-jsx', {
      'pragma': 'h',
      'pragmaFrag': 'Fragment',
    } ],
    [ '@babel/plugin-proposal-unicode-property-regex' ],
    [ '@babel/plugin-proposal-class-properties' ],
    [ '@babel/plugin-proposal-object-rest-spread' ],
    [ '@babel/plugin-transform-modules-commonjs', {'allowTopLevelThis': true} ],
  ],
    presets: [
        [ '@babel/preset-env', { targets: { node: 'current' } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};