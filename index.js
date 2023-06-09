/*const sum=require("./add.js");
console.log('Hello from index file');
 const adding1=sum(8,11);
 console.log(adding1);*/
 
 //require("./batman");
 //require("./superman");
 

/* const superHero=require("./superhero");
 console.log(superHero.getName()); 
 superHero.setName("Sahana");
 console.log(superHero.getName());

 const newsuperhero=require("./superhero");
 console.log(newsuperhero.getName()); */

 /*const superHero=require("./superhero")
 const batman=new superHero("batman");
 console.log(batman.getName());
 batman.setName("Sahana");
 console.log(batman.getName());

 const newsuperhero=new superHero("superman");
 console.log(newsuperhero.getName());
 */

 //const add=require("./add");
 //console.log(add(2,3));

 /*const math=require("./math");
 console.log(math.add(2,3));
 console.log(math.subtract(3,3));

 //or
 const math1=require("./math");
 const{add,subtract}=math1;
 console.log(add(2,3));
 console.log(subtract(3,3));
*/

 /* const data=require("./data.json");
console.log(data); */



// const path=require("node:path");
// //to get file & dir name

// //console.log(__filename);
// //console.log(__dirname);

// //to get last part(base) 

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// // to get extension


// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));
// //object info
// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// //to check path is absolute or not

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));


// to join paths
// console.log(path.join("folder1","hegde.html"));

// resolves path into absolute
// console.log(path.resolve("folder1","hegde.html"));

/*
function greet(name){
    console.log(`hello ${name}`);
};
function greetSahana(greetfun){
    const name="Sahana";
    greetfun(name);
};
greetSahana(greet);
*/

/*const EventEmitter =require("node:events");
const emitter=new EventEmitter();
emitter.on("Order-pizza",(size,topping)=>{
    console.log(`${size}pizza is being baked with ${topping}`);
});
emitter.on("Order-pizza",(size)=>{
   if(size=="large"){
    console.log("Serving complementary drink");
   }
});
emitter.emit("Order-pizza","large","corn and cheese");
*/

/*
const PizzaShop=require('./pizza-shop');
const DrinkMachine=require('./drink-machine');
const pizzaashop=new PizzaShop();
const drinkMachine=new DrinkMachine();
pizzaashop.on("order",(size,topping)=>{
    console.log(`${size}pizza is being baked with ${topping}`);
   drinkMachine.serveDrink(size); 
});
pizzaashop.order("large","cheese");


pizzaashop.viewordeno();
*/

/*
const buffer=new Buffer.from("TheSahanaHegde");
buffer.write("Hegde");
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
*/

//const fs=require("node:fs");

//read contents of a file

/*
console.log('First');
const file1=fs.readFileSync("./file.txt","utf-8");
console.log(file1);
console.log("Second");
fs.readFile("./file.txt","utf-8",(error,data)=>{
if(error){
    console.log(error);
    }
    else{
        console.log(data);
    }
});
console.log("Third");

fs.writeFileSync('./greet.txt',"Hey greetings!");

fs.writeFile('./greet.txt',"Hey async...",{flag:"a"},(err)=>{
    if(err){
console.log(err);
    }else{
        console.log("File written.")
    }
});
*/


/*
console.log("first");
const fs=require("node:fs/promises");
fs.readFile('file.txt',"utf-8")
.then((data)=>console.log(data))
.catch((error)=>console.log(error));
console.log("second");

*/


/*
const fs=require("node:fs");

const readableStream=fs.createReadStream("./file.txt",{
    encoding:"utf-8",
});

const writableStream=fs.createWriteStream("./file2.txt");
readableStream.on("data",(chunk)=>{
console.log(chunk);
writableStream.write(chunk);
});
*/

/*
const fs=require("node:fs");
const zlib=require("node:zlib");

const gzip=zlib.createGzip();
const readableStream=fs.createReadStream("./file.txt",{
    encoding:"utf-8",
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./fil2.txt.gz"));
const writableStream=fs.createWriteStream("./file2.txt");
readableStream.pipe(writableStream);
*/



//creating web servers using http

// const http=require("node:http");
// const fs=require("node:fs");
// const server=http.createServer((req,res)=>{
    
//     //  const superHero={
//     //      firstname:"Sahana",
//     //      lastname:"Hegde",
//     //  };

//     const name="Sahana";
//     let html=fs.readFileSync("./index.html","utf-8");
//     res.writeHead(200,{"Content-Type":"text/html"});
//     //fs.createReadStream(__dirname+"/index.html").pipe(res);
//     html=html.replace("{{name}}",name)
//     res.end(html);
    
// });


/*
const server=http.createServer((req,res)=>{

    
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home page");

    }else  if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About page");

    }else if(req.url==="/api"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
          firstname:"Sudeshna" ,
          lastname:"Hegde" ,
        }));


    }
    else{
        res.writeHead(404);
        res.end("Page not found");
    }
});  
server.listen(3000,()=>{
    
    console.log("your server is running on port 3000");
});
*/

/*
const fs=require("node:fs");

console.log("First");

fs.readFile("./file.txt","utf-8",(err,data)=>{

    console.log("File contents");

});

console.log("Last");
*/


//const crypto=require("node:crypto");

/*
const start=Date.now();
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
console.log("Hash: ", Date.now() - start);

crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
console.log("Hash: ", Date.now() - start);
*/


/*
const https=require("node:https");

//process.env.UV_THREADPOOL_SIZE=6;
const  MAX_CALLS=1;

const start=Date.now();
for(let i=0;i<MAX_CALLS;i++){
//     crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{;
// console.log(`Hash: ${i+1}`, Date.now() - start);
//});

https.request("https://www.google.com",(res)=>{
    res.on("data",()=>{});
    res.on("end",()=>{
        console.log(`Request:${i+1}`, Date.now() - start);
    });
})
.end();
}
*/

/*
console.log("console 1");
process.nextTick(()=>console.log("this is process.next 1"));
console.log("console 2");
*/

/*
Promise.resolve().then(()=>console.log("this is promise queue 1"));
process.nextTick(()=>console.log("this is nexttick queue 1"));
*/

/*
setTimeout(()=>console.log("this is set-timeout 1"),1000);
setTimeout(()=>console.log("this is set-timeout 2"),500);
setTimeout(()=>console.log("this is set-timeout 3"),2);
*/


/*
const fs=require("fs");
fs.readFile(__filename,()=>{
    console.log("this is readFile 1");

});

process.nextTick(()=>console.log("this is process.nextTick 1"));
Promise.resolve().then(()=>console.log("this is Promise.resolve 1"));
*/


//setTimeout(() =>console.log("timeout 1"),0);
//setImmediate(()=>console.log("set immediate 1"));


const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello world!");

});
const PORT =process.env.PORT || 3000;
server.listen(PORT,()=>console.log("Server is running on port 3000"));
