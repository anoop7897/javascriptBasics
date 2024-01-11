function compareBy(propertyName){
    return function (a,b){
        let x = a[propertyName];
        y = b[propertyName];
        if(x>y){
            return 1;
        }else if(x<y){
            return -1;
        }else{
            return 0;
        }
    }
}
let product = [
    {
        name:"I Phone",price:70000
    },
    {
        name:"Samsang Glaxy",price:40000
    },
    {
        name:"OPPO",price:23000
    }
];
console.log("Sorted array by name:");
product.sort(compareBy('name'));
console.table(product);
console.log("Sorted array by price:");
product.sort(compareBy('price'));
console.table(product);