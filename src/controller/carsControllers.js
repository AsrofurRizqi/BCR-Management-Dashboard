const {cars} = require("../models/");

module.exports = {
    getAllCars : (req, res)=>{
        cars.findAll()
        .then((data)=>{
            res.send({
                msg: "Success get all data",
                status: 200,
                data
            })
        })
        .catch ((err)=>{
            res.send({
                msg: 'Error to get all data',
                status:500,
                err,
            })
        })
    },
    getAllWeb : (req,res)=>{
        cars.findAll()
        .then((data)=>{
            res.render('main', {layout : 'index',datacar: data ,listExists: true});
        })
        .catch ((err)=>{
            res.render('main', {layout : 'index',err: err});
        })
    },
    postCars : (req, res)=>{
        let{body} = req;

        const newData = {
            ...body,
            image: req.image.url,
        };
        cars.create(newData)
        .then((data)=>{
            res.status(200).send({
                msg: "Success to post data",
                status : 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'Failed to post data',
                status: 500,
                err,
            })
        })
    },
    postCarsweb : (req, res)=>{
        let{body} = req;

        const newData = {
            ...body,
            image: req.image.url,
        };
        cars.create(newData)
        .then((data)=>{
            let status = "sukses";
            res.redirect('/?status=' + status);
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'Failed to post data',
                status: 500,
                err,
            })
        })
    },
    getDataByIdweb :(req,res)=>{
        let{ id }=req.params;
        cars.findOne({
            where : {id},
        })
        .then((data)=>{
            res.render('update-cars', {layout : 'index',put: true,datacar: data});
        })
        .catch ((err)=>{
            res.render('update-cars', {layout : 'index',err: err});
        })
    },
    getDataById :(req,res)=>{
        let{ id }=req.params;
        cars.findOne({
            where : {id},
        })
        .then ((data)=>{
            res.status(200).send({
                msg: 'Success get data By Id',
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'Failed get data By Id',
                status: 500,
                err,
            })
        })
    },
    deleteData :(req, res)=>{
        let{id}=req.params;
        cars.destroy({
            where : {id},
        })
        .then((data)=>{
            res.status(200).send({
                msg: 'Success delete data',
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'Failed delete data',
                status: 500,
                err,
            })
        })
    },
    deleteDataweb :(req, res)=>{
        let{id}=req.body;
        cars.destroy({
            where : {id},
        })
        .then((data)=>{
            let status = "delet";
            res.redirect('/?status=' + status);
        })
        .catch ((err)=>{
            res.render('main', {layout : 'index',err: err});
        })
    },
    updateDataById: (req, res)=>{
        let{id}=req.params;
        let{body}=req;
        cars.update(body,{
            where:{id}
        })
        .then((data)=>{
            res.status(200).send({
                msg: 'Success update data by id',
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'Failed update data by id',
                msg: 500,
                err,
            })
        })
    },
    updateDataByIdweb: (req, res)=>{
        let{id}=req.body;
        let{body}=req;
        
        if(req.image == null){
            cars.update(body,{
                where:{id}
            })
            .then((data)=>{
                let status = "updated";
                res.redirect('/?status=' + status);
            })
            .catch ((err)=>{
                res.render('main', {layout : 'index',err: err});
            })
        }else{
            cars.update({...body,image: req.image.url},{
                where:{id}
            })
            .then((data)=>{
                let status = "updated";
                res.redirect('/?status=' + status);
            })
            .catch ((err)=>{
                res.render('main', {layout : 'index',err: err});
            })
        }
    }

}