import axios from "axios";
import QS from 'qs';
import { Base64 } from 'js-base64';
const service = axios.create({
  baseURL: "loanServer" // api的base_url
  // timeout: 15000 // 请求超时时间
})
const postloan = function postLoan(url, param = {}) {
  return new Promise((resolve, reject) => {
    let headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    let requestBody = QS.stringify({
      head: JSON.stringify({AppCode: 'TYRCBWdXcx_nocode'}),
      body: JSON.stringify(param)
    })
    service({
      method: 'post',
      url: url+".app",
      data: requestBody,
      headers: headers,
    }).then(res=>{
        resolve(res);
    }).catch(res=>{
      reject(res);
    })
  });
}
export {postloan}
