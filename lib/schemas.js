module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        type: 'string'
      },
      tokenIssuer: {
        type: 'integer'
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  addTagTreeCategory: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        name: {
          type: 'string'
        },
        desc: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'name'],
      additionalProperties: false
    }
  },

  // #2
  getTagTreeCategoryList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        query: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'offset', 'size'],
      additionalProperties: false
    }
  },

  // #3
  updateTagTreeCategory: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        desc: {
          type: 'string'
        },
        enable: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #4
  addTagTree: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        name: {
          type: 'string'
        },
        categoryId: {
          type: 'integer'
        },
        parentId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'name', 'categoryId'],
      additionalProperties: false
    }
  },

  // #5
  getTagTreeList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        categoryId: {
          type: 'integer'
        },
        parentId: {
          type: 'integer'
        },
        levelCount: {
          type: 'integer'
        },
        level: {
          type: 'integer'
        },
        id: {
          type: 'integer'
        }
      },
      oneof: [{ required: ['level'] }, { required: ['parentId'] }],
      required: ['token', 'tokenIssuer', 'categoryId', 'levelCount'],
      additionalProperties: false
    }
  },

  // #6
  updateTagTree: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        parentId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #7
  getOtt: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #8
  getGuildList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #9
  getCurrencyList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  }
};
