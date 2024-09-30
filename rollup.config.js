
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import typescript from 'rollup-plugin-typescript2';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
export default {
    input: './src/components/index.ts',
    output: [{
        format: 'es', // ES module output,
        preserveModules: true, // this mode will create separate chunks for all modules using the original module names as file names
        dir: 'dist/esm',
    }],
    plugins: [
        babel({exclude: 'node_modules/**'}),
        resolve({extensions}),
        commonjs(),
        postcss({
            extensions: ['.css']
        }),
        typescript({
            tsconfig: './tsconfig.build.json',
            useTsconfigDeclarationDir: true // declaration files will be emitted in the declarationDir given in the tsconfig
        })
    ]

}