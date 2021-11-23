import {postloan} from "./http";


function getdictList(dictType) {
     return  postloan("000301",{dictTypeId:dictType}).then(res=>{
         if(res.data.RetData.dicts){
           return Promise.resolve(res.data.RetData.dicts);
         }
     })
}
export {getdictList}
