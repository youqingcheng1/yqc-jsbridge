
import { name, version } from './package.json'
import jsonP from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const plugins = [
    terser({compress:{drop_console:false}}),
    resolve({
        preferBuiltins: true,
        mainFields: ['browser']
    }),
    commonJs(),
    jsonP(),
    babel({
        exclude: 'node_modules/**',
    })
]

export default {
    input: 'src/index.js',
    output: [
        {
            file: `lib/${name}@${version}.min.js`,
            format: 'umd'
        },
        {
            file: `test/${name}@${version}.min.js`,
            format: 'umd'
        }
    ],
    plugins
}