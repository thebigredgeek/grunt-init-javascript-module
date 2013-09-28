if(typeof exports == 'object' && typeof module == 'object'){ //make it karma friendly for browsers
    var app = require(__dirname+'/../index.js');
}

describe("test",function(){
    it("has a function called hello that returns world",function(){
        expect(app.hello()).toEqual('world');
    });
});