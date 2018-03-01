/**
 * This file is part of pigalle.entities.http.request.parameter
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module http-parameter-entity
 * @description A base to generate derived class for managing different HTTP params.
 * @example
 *
 * const {HttpParameterEntity} = require('@pigalle/entities.http.request.parameter')
 *
 * // A custom HttpParameter
 * class QueryParam extends HttpParameterEntity {
 *
 * }
 *
 * // Use this {QueryParam}
 * const param = QueryParam.factory('param')
 *
 */

const {EntityBase} = require('@pigalle/entities.base')

class HttpParameterEntity extends EntityBase {

}

module.exports = {}
module.exports.HttpParameterEntity = HttpParameterEntity
