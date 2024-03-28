
// document.addEventListener("keyup",function(e){
//    console.log(e)
// })


// document.querySelector(".box").addEventListener("mouseover",function(e){
//     console.log("over")
// })

// document.querySelector(".box").addEventListener("mouseenter",function(e){
//     console.log(e)
// })

document.querySelector(".box").addEventListener("click",function(e){
    console.log("page: "+e.pageY)
    console.log("client: "+e.clientY)
    console.log("offset: "+e.offsetY)
    console.log("screen: "+e.screenY)

})
