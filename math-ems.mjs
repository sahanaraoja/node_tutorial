//exporting es modules
/*1

const add=(a,b)=>{
    return a+b;
};
const subtract=(a,b)=>{
    return a-b;
};

export default add; */

//2

/*

export default(a,b)=>{
    return a+b;
};*/

/* 3
export default {
    add,
    subtract
};*/

//4

export const add=(a,b)=>{
    return a+b;
};
export const subtract=(a,b)=>{
    return a-b;
};
