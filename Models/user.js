var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    'userName': String,
    'password': {type: String, minlength:6},
    'fName': String,
    'lName': String,
    //'adresses':[String,String]
},{toJSON: {virtuals: true}});
// },{timestamps:true},{toJSON: {virtuals: true}});

userSchema.virtual('ordersList',{
    ref: 'order',
    localField: '_id',
    foreignField: 'userId'
})


module.exports=mongoose.model('users',userSchema);