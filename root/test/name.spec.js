{%
    var sterileName = name.replace(/\W/g, ''); //sterilize the name
%}

if(typeof exports == 'object' && typeof exports.{%= sterileName %}){ //make it karma friendly for browsers
    var app = require(__dirname+'/../index.js').{%=sterileName%}();
}
else{
    var app = window.{%=sterileName%}();
}

describe("{%=sterileName%}",function(){
    it("has a function called hello that returns world",function(){
        expect(app.hello()).toEqual('world');
    });
});