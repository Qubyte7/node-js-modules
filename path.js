const path = require('path');
const os=require('os');
const fs=require('fs');



 
let  body = path.normalize('./node.js///path/..');//normailze :normalizes the path by removing duplicates 0f double slashes and dotss
console.log(body);//this /.. means one directory up

let base=path.basename(__dirname)
let base1=path.basename('./path/path.js','.js');//return the name of th last working file or dictory
console.log(base1);//here the 2nd argument .js is used to reomve'.js' form oath.js

let base2=path.dirname('./path/path.js');//out pu tthe directory name
console.log(base2);

let dir=path.extname('path.js')
console.log(dir);


let res=path.resolve('path.js')
let res1=path.resolve(__filename)
let res2=path.resolve('path','path1')
let res3=path.resolve('path/path.js')
console.log(res3);
//.resolve return complete absolute path of the file 

let join = path.join(__filename,'path','path1')
let join1 = path.join(__dirname,'path','path1')
console.log(join);
console.log(join1);
//this joins the paths and then normalize them

let abs=path.isAbsolute(__dirname)
let abs1=path.isAbsolute('path')//if the path is not ansolute then it is called relative
//absolute path:is the path that provides you the full way of the path
//relative path:is the path that orovides you a single relatove path
console.log(abs);


let rel=path.relative('path','path1')
console.log(rel);

let par=path.parse('path.js');
let par1=path.parse(__dirname)
console.log(par1);
//provides an object  describing the path


//OS MODULES 
let hostname=os.hostname()
console.log(hostname);//host name provide

let platform=os.platform()
console.log(platform);//operating system name

let memory=os.totalmem();
console.log(memory);//gives you the total memory in bytes

let freememory=os.freemem()
console.log(freememory);//dusplay free memory

let op=os.type()
console.log(op);//gies you the type of os

//fs modules

fs.readFile('./file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

if(!fs.existsSync('./written.txt')){

fs.writeFile('./written.txt','Beni sunt et Terra',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file written');
    }
});
}else{
    fs.unlink('./written.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('file deleted');
        }
    })
}
//fs.unlink is used to delete file 
//and fs.write is used to write a file  


//query strings










































































