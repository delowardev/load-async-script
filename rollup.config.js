import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'es'
        },
        {
            file: 'dist/bundle.es5.js',
            format: 'es',
            plugins: [ getBabelOutputPlugin({ presets: ['@babel/preset-env'] }) ]
        }
    ]
}
