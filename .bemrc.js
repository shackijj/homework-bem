const { CUR_LEVEL } = process.env;
const LEVEL_TO_INCLUDE = `src/${CUR_LEVEL}.blocks`;

module.exports = {
    levels: {
        'src/common.blocks': { scheme: 'nested' },
        [LEVEL_TO_INCLUDE]: { scheme: 'nested' },
    },
    modules: {
        'bem-tools': {
            plugins: {
                create: {
                    levels: {
                        'src/common.blocks': { default: true },
                    },
                    techs: ['js', 'css'],
                    templates: {
                        js: '.bem/templates/js.js'
                    },
                },
                'fs-scheme': 'react'
            }
        }
    }
}
