const http = require("http");
//fs: file system => module để truy xuất & thay đổi file
const fs = require("fs");

const port = 1234;

const web = http.createServer((req, res) => {
  //check đường dẫn URL hiện tại
  if (req.url === "/") {
    fs.readFile("./greenwich.html", (err, data) => {
      //TH1: nếu đọc file bị lỗi (sai tên, đã bị xóa,...) => show ra lỗi
      if (err) {
        console.log("Read file error: " + err);
      }
      //TH2: nếu đọc file thành công => render ra html page
      else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/cloud") {
    fs.readFile("./cloud.html", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    fs.readFile("./notfound.html", (err, data) => {
      res.write(data);
      res.end;
    });
    //console.log("URL not found");
  
  } if (req.url === "new") {
    fs.readFile("new/news.html"), (err, data) => {
      if (err){
        console.error(err);

      }else {
        res.write(data);
        res.end();
      }
    }
  }else if (req.url === "/product") {
    fs.readFile("numberproduct/product.html"), (err,data) => {
      if (err) {
        console.error(err);

      }else {
        fs.readFile("titleprd/titleprd.html"), (err, data) => { 
          res.write(data);
          res.end();
        }
      }
    }
  } else {
    fs.readFile("buyproduct/buy.html"), (err,data) => {
      res.write(data);
      res.end();
    }
  }

});
//chạy web server bằng cách listen port
web.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});