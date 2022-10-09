## BCR - Car Management Dashboard

Website Management database mobil menggunakan :

- Node Express
- Ejs
- Postgre Database
- ORM Sequelize
- Cloudinary
- Multer

## Entity Relationship Diagram

![gambarentity](https://raw.githubusercontent.com/AsrofurRizqi/BCR-Stage3/master/dbdiagram/cars.png)

## Endpoints

##### View Endpoints :
- ```localhost:3030/```
- ```localhost:3030/add-cars```
- ```localhost:3030/edit-cars/:id```

##### RestAPI Endpoints :
- ```GET localhost:3030/cars```

![alldata](https://raw.githubusercontent.com/AsrofurRizqi/BCR-Management-Dashboard/master/dbdiagram/rest-image/alldata.png)
- ```GET localhost:3030/cars/:id```

![byid](https://raw.githubusercontent.com/AsrofurRizqi/BCR-Management-Dashboard/master/dbdiagram/rest-image/byid.png)
- ```POST localhost:3030/cars```

![postdata](https://raw.githubusercontent.com/AsrofurRizqi/BCR-Management-Dashboard/master/dbdiagram/rest-image/postdata.png)
- ```DELETE localhost:3030/cars/:id```

![deletedata](https://raw.githubusercontent.com/AsrofurRizqi/BCR-Management-Dashboard/master/dbdiagram/rest-image/deletedata.png)
- ```PUT localhost:3030/cars/:id```

![updatedata](https://raw.githubusercontent.com/AsrofurRizqi/BCR-Management-Dashboard/master/dbdiagram/rest-image/updatedata.png)