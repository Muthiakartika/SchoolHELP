const jwt = require('jsonwebtoken');
const User = require('../models/user');

isVolunteer = (req, res, next) => {
    User.findById(req.userId).exec((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        User.find(req.role).exec((err, roles) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
  
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "volunteer") {
                next();
                return;
                }
            }
  
            res.status(403).send({ message: "Require Admin Role!" });
            return;
        });
    });
}

isSchoolHelp = (req, res, next) => {
    User.findById(req.userId).exec((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        User.find(req.role).exec((err, roles) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
  
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "schoolHelp") {
                next();
                return;
                }
            }
  
            res.status(403).send({ message: "Require School Help Role!" });
            return;
        });
    });
}

isSchoolAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        User.find(req.role).exec((err, roles) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
  
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "schoolAdmin") {
                next();
                return;
                }
            }
  
            res.status(403).send({ message: "Require School Admin Role!" });
            return;
        });
    });
}

const checkRole = {
    isVolunteer,
    isSchoolHelp,
    isSchoolAdmin
}

module.exports = checkRole;
    