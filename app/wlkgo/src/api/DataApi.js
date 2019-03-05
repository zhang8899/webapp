
import Api from "../common/Api"
import {DATAURL} from "../common/AjaxUrlSchema"
 
export default{

    getData(cb){
        Api.get(DATAURL,cb)
    }
}