const svgTransformer = require('react-native-svg-transformer')
const dynatraceTransformer = require('@dynatrace/react-native-plugin/lib/dynatrace-transformer');

module.exports.transform = function ({ src, filename, options }) {
    if (filename.endsWith('.svg')) {
        return svgTransformer.transform({ src, filename, options });
    }
    return dynatraceTransformer.transform({ src, filename, options });

}