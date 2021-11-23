import router from '../../router'
const whitePath = ["/login"]
router.beforeEach((to,from,next)=>{
 let sign  =  window.sessionStorage.getItem("loginSign");
  let isWhite = whitePath.find(item=>{
    return item == to.path
  });
 if(sign||isWhite ){
   next();
 }else{
   router.replace("/login")
 }
})
