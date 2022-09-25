const userSchema = require('../db/userSchema')


createUser = (req,res)=>{
    const body = req.body

    if (!body) {
   
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }
      
    const user = new userSchema(body)
    

    if (!user) {
        
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
               
            })
        })

}

getUsers = (req,res)=>{
    const users =  userSchema.find();
    let page = 1;
    users.exec(function(err, data){
        if(err) throw err;
        return res.json({
            page:req.body.pageNum ?? page,
            per_page:6,
            total:data.length,
            total_pages:Math.ceil(data.length/6),
            data
        });
    })

}
getCurrentUser = (req,res)=>{
    const {id} = req.params;

    const users =  userSchema.findOne({user_id:id});
    users.exec(function(err, data){
        if(err) throw err;
        return res.json({
           data:{
            status: "success",
            user:data
           }
        });
    })

}


authenticateUser = async(req,res)=>{
   const user = await userSchema.findOne({email:req.body.email});
   try{
    if(!user ) throw err;
   return res.json({
        data:{
            status:'success',
            user
          }}
    )
   }
  catch(err){
      return res.json({
          data:{
              status:'failed'
          }
      })
  }
}

deleteUser =async (req,res)=>{
    const {id} = req.params;
   userSchema.findOneAndDelete({user_id: id },function (err,data) {
       if (err) res.json(err)
       else res.json({message:'user deleted successfully'})
   })
}

updateUser = async (req, res) => {
    const body = req.body
    const {id} = req.params;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    userSchema.findOne({ user_id: id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: ' appointment not found!',
            })
        }
      
        user.email = req.body.email
        user.first_name = req.body.first_name
        user.last_name= req.body.last_name
      
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'user updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'user not updated!',
                })
            })
     })
}

module.exports ={createUser,getUsers,getCurrentUser,authenticateUser,deleteUser,updateUser}