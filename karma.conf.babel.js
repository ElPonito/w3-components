import webpack from 'webpack'
import webpackConfig from './webpack.config'

export default (config) => {

    config.set({
        browsers: ['PhantomJS'],
        port: 8080,
        captureTimeout: 60000,
        frameworks: [
            'mocha',
            'chai'
        ], /*
         client: {
         mocha: {}
         },*/
        singleRun: true,
        mochaReporter: {
            output: 'autowatch'
        },

        // Files

        files: [
            './loadtests.js'
        ],
        preprocessors: {
            './loadtests.js': ['webpack', 'sourcemap']
        },

        // Webpack

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },

        // Reporters

        reporters: ['mocha', 'coverage', 'junit'],
        junitReporter: {
            outputDir: 'tests-result',
            outputFile: 'junit-result.xml',
            useBrowserName: false
        },
        /*coverageReporter: {
         dir: 'tests-result/',
         watermarks: {
         statements: [80, 90],
         functions: [80, 90],
         branches: [80, 90],
         lines: [80, 90]
         },
         reporters: [
         {type: 'text'},
         {
         type: 'html',
         subdir: 'html'
         },
         {
         type: 'cobertura',
         subdir: '.'
         },
         {
         type: 'lcovonly',
         subdir: '.'
         },
         {
         type: 'clover',
         subdir: '.'
         }
         ]
         }*/
    })
}
