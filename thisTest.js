var counter = (i) =>{
    var result = i;
    this.add25 = ()=>{
        console.log(result);
        result += 25;
    }
    return (j)=>{
        result += j;
        console.log(result);
        return result;
    }
}

var foo = function(){
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var timeout = function(){
    setTimeout(foo.bind(obj2), 3000);
}

var obj2 = {
    a: 3,
    obj: obj,
    objfoo: obj.foo,
    objtout: timeout
}

var obj2func = function(){
    obj2.objfoo();
}




