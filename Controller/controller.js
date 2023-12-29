const Model=require("../models/model");

const postController=async(req,res)=>{
    const data=await Model({
      name:req.body.name,
      age:req.body.age
    });
  
    try {
  
   const dataToSave= data.save()
   res.status(200).json(dataToSave);
      
    } catch (error) {
     res.status(400).json({message:error.message});
    }
  }


  const getAllController=async(req,res)=>{


    try {
        const data=await Model.find();
        res.json(data)
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}


const getOneController=async(req,res)=>{
  
    try {
        const data= await Model.findById(req.param.id);
        res.json(data);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}


const patchController=async(req,res)=>{
    try {
 
     const id=req.param.id;
     const updatedata=req.body;
     const option={new:true};
 
     const result= await Model.findByIdAndUpdate(id,updatedata,option);
     res.json(result);
 
 
    } catch (error) {
 
     res.status(400).json({error:error.message});
     
    }
 }


 const deleteController=async(req,res)=>{

    try {
        const id=req.param.id;
        const deletedata= await Model.findByIdAndDelete(id);

        res.send(`Docment seleted with name ${deletedata.name}`)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
   
}

module.exports={postController,getAllController,getOneController,patchController,deleteController};