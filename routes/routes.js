const express=require("express");
const router=express.Router();
const {postController,getAllController,getOneController,patchController,deleteController}=require("../Controller/controller");
module.exports=router;


router.post('/post',postController);
router.get('/getAll', getAllController);
router.get('/getOne/:id',getOneController);
router.patch('/update/:id',patchController);
router.delete('/delete/:id',deleteController);