
//ye 
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//      await fn(req,res,next)   
//     }
//     catch(error){
//         res.status(err.code)
//     }
// }
// export {asyncHandler}

const asyncHandler=(requestHander)=>{ 
    (req,res,next)=>{
        Promise.resolve(requestHander(req,res,next)).catch((err)=>next(err))
    }
}
export {asyncHandler};