const UrlModel = require("./../model/URLmodel");
const shortid = require("shortid");

exports.short = async function (reqest, response, next) {
  var { url } = reqest.body;
  var existedUrl = await UrlModel.findOne({ actualUrl: url });
  if (existedUrl) {
    return render(existedUrl.uid, response);
  }
  var uid = shortid.generate();
  await UrlModel.create({ actualUrl: url, uid });

  render(uid, response);
};

exports.go = async function (reqest, response, next) {
  var uid = reqest.params.id;
  var url = await UrlModel.findOne({ uid });
  response.redirect(url.actualUrl);
};

function render(id, response) {
  response.render("ShortenedURL.ejs", {
    title: "Shortened URL",
    shortenUrl: `http://localhost:3000/go/${id}`,
  });
}
