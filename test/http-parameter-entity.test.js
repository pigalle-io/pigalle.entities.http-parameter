/**
 * This file is part of pigalle.entities.http-parameter
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {HttpParameterEntity} = require('../lib/http-parameter-entity')

describe('Class {HttpParameterEntity}', () => {
  it('should be a function', () => {
    (HttpParameterEntity).should.be.a.Function()
  })
})

describe('Create a instance of {HttpParameterEntity} ', () => {
  /**
  it('without argument should throw an {UndefinedError}', () => {
    (() => {
      HttpParameterEntity.factory()
    }).should.throw(UndefinedError)
  })
   */
  it('using factory() should be an instance of HttpParameterEntity', () => {
    (HttpParameterEntity.factory()).should.be.an.instanceOf(HttpParameterEntity)
  })
})
