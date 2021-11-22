var origin={
    name:"Test",
    uuid:null,
    address:"asfdtyw fsuw"
}
var newOrigin={
    name:null,
    uuid:"257ddhjgy3663",
    address:null
}
function copy(newObj,oldObj) {
    let t=newObj
    Object.keys(oldObj).forEach(item=>{
        if(t[item]){
            {...t,t[item]}
        }
    })
    
    console.log(t)
}