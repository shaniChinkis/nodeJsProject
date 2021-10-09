const mongoose=require('mongoose')
const users=require('./Models/user')
class db{
    constructor(){}
    connect(){
      
        const connectionParams={
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }

        let url= "mongodb://srv1:27017/323807545";
       //   let url= "mongodb://localhost:27017/node";

            mongoose.connect(url,connectionParams).then((connection)=>
            {
           //     autoIncrement.initialize(connection);

                console.log("db Connected");
            }
            ).catch((err)=>{
                console.log("error connecting!");
        })
      
        //users.createCollection();
        
    }
}
module.exports=new db();