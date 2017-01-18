import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

const host = 'https://streetviewtourist.com/api/street_view';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let component;

/**
 *  TO-DO: Find a workaround integrating axios with nock for action testing
 */
describe('Street View Actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  describe('getDistincts', () => {
    it('fetches the distinct types and countries', () => {
      nock(host)
        .get('/info/get_distincts')
        .reply(200, { body: { test: ['???'] } })

        const store = mockStore({test: []});
        store.dispatch(actions.getDistincts());
        // axios.get('/info/get_distincts').then(response => {
        //   expect(response.data).to.be.equal('test data');
        //   done();
        // });

        // return store.dispatch(actions.getDistincts())
        //   .then(response => {
        //     console.log(response);
        //   })
    });
  });
});