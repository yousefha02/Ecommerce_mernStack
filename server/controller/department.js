const Department = require('../model/Department')

exports.createDepartment = async(req,res,next)=>
{
    try{
        if(!req.file)
        {
            const error = new Error('image not found')
            error.statusCode = 422
            throw error
        }
        const department = await Department.findOne({title:req.body.title})
        if(department)
        {
            const error = new Error('title is found')
            error.statusCode = 401
            throw error
        }
        const currentDepartment = new Department({title:req.body.title,image:req.file.filename})
        await currentDepartment.save()
        res.status(201).json({message:"department has created"})
    }
    catch(err)
    {
        if(!err.statusCode)
        {
            err.statusCode = 500
        }
        next(err)
    }  
}

exports.getDepartments = async(req,res,next)=>
{
    try{
        const departments = await Department.find()
        res.status(200).json({departments})
    }
    catch(err)
    {
        if(!err.statusCode)
        {
            err.statusCode = 500
        }
        next(err)
    }  
}