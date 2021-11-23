//1. Load the mongoose driver
var mongooseDrv = require("mongoose");
//2. Connect to MongoDB and its database
mongooseDrv.connect("mongodb+srv://Olasubomi:cuuXt0ZYcogEJa7e@cluster0-sqg7f.mongodb.net/Product_Supply?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } );
//3. The Connection Object
var connection = mongooseDrv.connection;
if (connection !== "undefined") {
    console.log(connection.readyState.toString());
    //4. The Path object
    var path = require("path");
    //5. The grid-stream
    var grid = require("gridfs-stream");
    //6. The File-System module
    var fs = require("fs");
    //7.Read the video/image file from the videoread folder
    // var filesrc = path.join(__dirname, "/filestoread/tomato.jpg");
    var filesrc =  "/Users/olasubomiawokoya/Documents/projects/ChopChowSD/filestoread/tomato.jpg";

    //8. Establish connection between Mongo and GridFS
    grid.mongo = mongooseDrv.mongo;
    //9.Open the connection and write file
    connection.once("open", () => {
        console.log("Connection Open");
        var gridfs = grid(connection.db);
        if (gridfs) {
            //9a. create a stream, this will be
            //used to store file in database
            var streamwrite = gridfs.createWriteStream({
                //the file will be stored with the name
                filename: "tomato.jpg"
            });
            //9b. create a readstream to read the file
            //from the filestored folder
            //and pipe into the database
            fs.createReadStream(filesrc).pipe(streamwrite);
            //9c. Complete the write operation
            streamwrite.on("close", function (file) {
                console.log("Write written successfully in database");
            });
        } else {
            console.log("Sorry No Grid FS Object");
        }
    });
} else {
 
    console.log('Sorry not connected');
}
console.log("done");
