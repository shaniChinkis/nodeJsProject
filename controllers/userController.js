const user=require('../Models/user');

class userController{
constructor(){};


  async login(req,res){
  var userName= req.params.userName ;
  var password= req.params.password ;
  let userG= await user.find({userName: userName,password:password}).populate("ordersList").exec()
  res.send(userG);
 
}

async getNewUser(req,res){
    let userG= await user.find({}).sort({createdAt: -1}).limit(1);
  res.send(userG);
}
  async post(req,res){

  let userP= new user({
    userName : req.body.userName,
    password : req.body.password,
    fName : req.body.fName,
    lName : req.body.lName,
  //  adresses : req.body.adresses
        })
      
  console.log(userP);
   let data=await userP.save()
    res.send(data);
    
  }
  async update(req,res){
    var id = req.params.id;

        await user.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.userName = req.body.userName ? req.body.userName : user.userName;
            user.password = req.body.password ? req.body.password : user.password;
            user.fName = req.body.fName ? req.body.fName : user.fName;
            user.lName = req.body.lName ? req.body.lName : user.lName;
            user.adresses = req.body.adresses ? req.body.adresses : user.adresses;

            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating order.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
  }
  async  delete(req,res){
    var id = req.params.id;

    user.findByIdAndRemove(id, function (err, user) {
        if (err) {
            return res.status(500).json({
                message: 'Error when deleting the user.',
                error: err
            });
        }

        return res.status(204).json();
    });
}

}
module.exports =new userController();