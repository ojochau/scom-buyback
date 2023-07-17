const theme = {
    backgroundColor: {
        type: 'string',
        format: 'color'
    },
    fontColor: {
        type: 'string',
        format: 'color'
    },
    inputBackgroundColor: {
        type: 'string',
        format: 'color'
    },
    inputFontColor: {
        type: 'string',
        format: 'color'
    },
    // buttonBackgroundColor: {
    // 	type: 'string',
    // 	format: 'color'
    // },
    // buttonFontColor: {
    // 	type: 'string',
    // 	format: 'color'
    // },
    secondaryColor: {
        type: 'string',
        title: 'Timer Background Color',
        format: 'color'
    },
    secondaryFontColor: {
        type: 'string',
        title: 'Timer Font Color',
        format: 'color'
    }
}

export default {
    general: {
        dataSchema: {
            type: 'object',
            properties: {
                chainId: {
                    type: 'number',
                    enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
                    required: true
                },
                projectName: {
                    type: 'string',
                    required: true
                },
                description: {
                    type: 'string'
                },
                offerIndex: {
                    type: 'number',
                    required: true
                },
                tokenIn: {
                    type: 'string',
                    required: true
                },
                tokenOut: {
                    type: 'string',
                    required: true
                },
                detailUrl: {
                    type: 'string'
                }
            }
        }
    },
    theme: {
        dataSchema: {
            type: 'object',
            properties: {
                "dark": {
                    type: 'object',
                    properties: theme
                },
                "light": {
                    type: 'object',
                    properties: theme
                }
            }
        }
    }
}