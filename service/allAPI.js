import { commonApi } from "./commomApi";
import { service_url } from "./service_url";


//upload video
export const  uploadvideoAPI =async(video)=>{
    return await commonApi("POST",`${service_url}/allvideos`,video)
}
//get all videos
export const  getalluploadedvideoAPI =async()=>{
    return await commonApi("GET",`${service_url}/allvideos`,"")
}
// get a video
export const  getvideoAPI =async(id)=>{
    return await commonApi("GET",`${service_url}/allvideos/${id}`,"")
}
//delete a video
export const  AddhistoryAPI =async(video)=>{
    return await commonApi("POST",`${service_url}/history`,video)
}
export const  gethistoryAPI =async()=>{
    return await commonApi("GET",`${service_url}/history`,"")
}
export const  deletehistoryAPI =async(id)=>{
    return await commonApi("DELETE",`${service_url}/history/${id}`,{})
}
//add category
export const  addcategoryAPI =async(category)=>{
    return await commonApi("POST",`${service_url}/category`,category)
}
export const  getcategoryAPI =async()=>{
    return await commonApi("GET",`${service_url}/category`,"")
}
export const  deletecategoryyAPI =async(id)=>{
    return await commonApi("DELETE",`${service_url}/category/${id}`,{})
}
// Delete video
export const deleteVideoAPI = async (id) => {
    return await commonApi("DELETE", `${service_url}/allvideos/${id}`); // Changed to DELETE
}
//update category
export const updateCategoryAPI =async(id,categoryDetails)=>{
    return await commonApi("PUT",`${service_url}/category/${id}`,categoryDetails)
}