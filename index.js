const fs = require("fs");
const http = require("http");
const imgToPDF = require("image-to-pdf");

http
  .createServer((req, res) => {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      console.log("all parts/chunks have arrived");

      imgToPDF([Buffer.concat(chunks).toString()], imgToPDF.sizes.A4).pipe(
        fs.createWriteStream("output.pdf")
      );
    });
    res.end("server is ready ");
  })
  .listen("8080");
