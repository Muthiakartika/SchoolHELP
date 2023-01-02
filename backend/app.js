const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import Model
const School = require('./models/school');
const User = require('./models/user');
const Request = require('./models/request');
const Offer = require('./models/offer');

const app = express();

// CONNECT TO MONGGODB
mongoose.connect('mongodb://localhost:27017/db_schoolhelp')
.then(()=>{
    console.log('Connected to database');
})
.catch(()=>{
    console.log('connection failed');
});

// Middleware Body Parser
app.use(bodyParser.json());

// Middleware CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
 })

/**AUTHENTICATION */
    // Signup
    app.post('/api/user/signup', (req, res, next) =>{
        bcrypt.hash(req.body.password, 10).then(hash =>{
            const user = new User({
                username: req.body.username,
                password: hash,
                fullname: req.body.fullname,
                email: req.body.email,
                phone: req.body.phone,
                dob: req.body.dob,
                occupation: req.body.occupation,
                role: req.body.role
            });
    
            user.save().then(result =>{
                res.status(200).json({
                    result:result
                })
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                });
            })
        })
    });

    // Signin
    app.post('/api/user/login', (req, res, next) =>{
        let fetchedUser;
        User.findOne({username: req.body.username})
        .then(user => {
            if(!user){
                return res.status(401).json({
                    message: 'username Not Found'
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password)
        })
        .then(result => {
            if(!result){
                return res.status(401).json({
                    message: 'Password Not Found'
                });
            }
            const token = jwt.sign(
                {username: fetchedUser.username, 
                    userId: fetchedUser._id, 
                    fullname: fetchedUser.fullname,
                    email: fetchedUser.email, 
                    schoolName: fetchedUser.schoolName,
                    schoolCity: fetchedUser.schoolCity},
                'secret_this_should_be_longer', {expiresIn: '1h'}
                );
                res.status(200).json({
                    token: token,
                    user: fetchedUser
                })
        })
        .catch(err =>{
            return res.status(401).json({
                message: 'Auth failed'
            });
        })
    });

    
/**SCHOOL HELP ADMIN */
    
    // #SCHOOL CRUD
    // Fetch School Data
    app.get('/api/schools',  (req, res, next)=>{
       School.find().then(documents => {
        res.status(200).json({
            message: 'School fetched successfully',
            school: documents
        });
       }) 
    });

    //Create School Data
    app.post('/api/schools',  (req, res, next) =>{
        const schools = new School({
            schoolName: req.body.schoolName,
            address: req.body.address,
            city: req.body.city
        });
        schools.save();
        res.status(201).json({
            message: 'School added successfully'
        });
    });

    
    //#SCHOOL ADMIN CRUD 
    //Fecthed School Data
    app.get('/api/schoolNames', async (req, res, next)=>{
        let schoolNames;
        try{
            schoolNames = await School.find({});
        } catch (error) {
            res.status(500).json({ message: 'error'});
        }
        res.json({schoolNames: schoolNames.map((sch) => 
            sch.toObject({getters:true}))});
    })

    // Create School Help Admin Account
    app.post('/api/schoolAdmin', (req, res, next) =>{
        
        bcrypt.hash(req.body.password, 10).then(hash =>{
            const user = new User({
                username: req.body.username,
                password: hash,
                fullname: req.body.fullname,
                email: req.body.email,
                phone: req.body.phone,
                role: req.body.role,
                staffID: req.body.staffID,
                position: req.body.position,
                schoolName: req.body.schoolName,
                schoolCity: req.body.schoolCity
            });

            user.save().then(result =>{
                res.status(201).json({
                    message: 'Successfully Created',
                    result:result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                });
            })
        })
    });

    // Fetch School Admin Data
    app.get('/api/schoolAdmin', (req, res, next) =>{
        User.find({role: 'schoolAdmin'}).limit(10).then(document =>{
                res.status(200).json({
                message: 'School Admin Data Fecth successfully',
                admin: document

            });
        })
    })

 /**SCHOOL ADMIN*/

        //Fecthed School Data in user
        app.get('/api/schoolNameById', async (req, res, next)=>{
           const school = req.params.sch;
           let user;
           try{
            user = await User.find({schoolName: school});
           }catch (error){
            res.status(500).json({ message: 'error'});
           }

           res.json({schools: user.map((sc)=> sc.toObject({
            getters:true
           }))});
        });
        
    //#RESOURCE REQUEST CRUD 
        //create//
        app.post('/api/resourceReq', (req, res, next) =>{
            const resource = new Request({
                type: req.body.type,
                date: req.body.date,
                status: req.body.status,
                description: req.body.description,
                resourceType: req.body.resourceType,
                numRequired: req.body.numRequired,
                school: req.body.school,
                schoolCity: req.body.schoolCity
            });
            resource.save();
            console.log(resource);
            res.status(201).json({message: 'Resource added successfully'});
           
        })
        //fethced data
        app.get('/api/resourceReq', (req, res, next) =>{
            Request.find({type: 'resource'}).limit(10).then(documents => {
                res.status(200).json({
                    message: 'Resource request fetched successfully',
                    resource: documents
                });
            });
        })

     //#TUTORIAL REQUEST CRUD 
        //create//
        app.post('/api/assistanceReq', (req, res, next) =>{
            const assistance = new Request({
                type: req.body.type,
                date: req.body.date,
                status: req.body.status,
                description: req.body.description,
                proposedDate: req.body.proposedDate,
                time: req.body.time,
                level: req.body.level,
                numStudent: req.body.numStudent,
                school: req.body.school,
                schoolCity: req.body.schoolCity
            });
            assistance.save();
            
            res.status(201).json({
            message: 'Resource added successfully'
        });
        })

        //fethced data
        app.get('/api/assistanceReq', (req, res, next) =>{
            Request.find({type: 'assistance'}).limit(10).then(documents => {
                res.status(200).json({
                    message: 'Assistance request fetched successfully',
                    assistance: documents
                });
            });
        })


/**VOLUNTEER*/

    //#VIEW REQUEST 
        //fethced data
        app.get('/api/viewReq', (req, res, next) =>{
            Request.find({status: 'new'}).limit(10).then(documents => {
                res.status(200).json({
                    message: 'Request data fetched successfully',
                    request: documents
                });
            });
        })

    //#SUBMIT OFFER
        //fetched data       
         app.post('/api/offers', (req, res, next) =>{           
            const offers = new Offer({
                date: new Date(), // get the current date and time
                remarks: req.body.remarks,
                status : req.body.status, 
                fullname: req.body.fullname,
            });
            offers.save();   
            res.status(201).json({message: 'Resource added successfully'});
        });
module.exports = app;