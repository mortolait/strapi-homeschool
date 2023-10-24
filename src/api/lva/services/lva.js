'use strict';

/**
 * lva service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lva.lva');
