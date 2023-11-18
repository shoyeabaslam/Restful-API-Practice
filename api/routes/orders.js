const express = require("express");
const router = express.Router();
router.get("/:productId",(req,res,next)=>{
    res.status(200).json({
        message:"this is order request"
    })
})

router.delete("/:productId",(req,res,next)=>{
    res.status(200).json({
        message:"this is delete request"+ req.params.productId
    })
})

module.exports = router;