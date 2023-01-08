import {get404} from '../../controllers/error';
import {createRequest,createResponse} from "node-mocks-http";

const mockNext = () => jest.fn();

describe('Utils test suite', () => {
    
    const req=  createRequest();
    const res=  createResponse();
  
    // const err=  Error;
    const next = mockNext();
    test('Test get404',  async () => {
        await get404(req, res, next);
        expect(200);
        console.log('test work!!');

    });
   
});


                