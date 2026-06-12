const submitStudentFee=(req,res)=>{
    try{
        const{studentName,amount}=req.body;
        const newFee={studentName,amount};

        res.status(201).json({
            success:true,
            message:"Nayaaa student ERP me add ho gaya! (Via Controller)",
            data:newFee
        })
    }catch(error){
        res.status(500).json({success:false,message:"Server me gadbad hui"})
    }
};
module.exports={submitStudentFee};