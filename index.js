function receivesAFunction(spy) {
    spy();
}


function returnsANamedFunction() {
    return function x(){};
}

function returnsAnAnonymousFunction() {
    return function (){
        
    };
}