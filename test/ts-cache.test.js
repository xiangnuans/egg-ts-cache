'use strict';

const mock = require('egg-mock');

describe('test/ts-cache.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ts-cache-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tsCache')
      .expect(200);
  });
});
