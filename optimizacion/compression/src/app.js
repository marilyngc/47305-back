import  express  from "express";
import compression from "express-compression";

const port = 8080;
const app = express();

app.listen(port,() => console.log("server working"));

// sin mideware
app.get("/ruta-normal", (req,res)=> {
    res.send("coderHouse".repeat(10));
});

// con compression
app.get("/ruta-gzip", compression(),(req,res)=> {
    res.send("coderHouse".repeat(20));
});

//con brotli
app.get("/ruta-brotli", compression({
    brotli:{enabled:true,zlib:{}}
}),(req,res)=> {
    res.send("coderHouse".repeat(20));
});
