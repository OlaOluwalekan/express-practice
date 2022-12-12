let data = require("../data");

const getData = (req, res) => {
  //   console.log(res.statusCode);
  res.json({ response: "success", data: data });
};

const getSingle = (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const item = data.filter((item) => {
    return item.id == id;
  });
  // if (item.length < 1) {
  //   return res.send(
  //     `<div style="width:95vw;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;margin:0;text-align:center"><h1 style="font-size:100px">404</h1><h3>The page you are looking for does not exist or has been removed</h3></div>`
  //   );
  // }
  res.json({ response: "success", data: item });
};

const postData = (req, res) => {
  console.log(req.body);

  res.json({ data: [...data, req.body] });
};

const putData = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const result = data.find((item) => {
    if (item.id == id) {
      item.name = req.body.name;
      return item;
    }
    // return item.id == id;
  });
  res.json({ data: result });
};

module.exports = { getData, getSingle, postData, putData };
