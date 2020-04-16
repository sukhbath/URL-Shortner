const shortid = require("shortid")
const URL_Model = require('../Models/URLmodel')


exports.createURL=async (request, response, next) => {
    const exactURL = request.body.url;
    const id = shortid.generate();
    const shortURL = id
    await URL_Model.create({
        exactURL,
        shortURL
    })

    response.send({
        message: "success",
        data: {
            exactURL,
            shortURL:`http://localhost:3000/${shortURL}`
        }
    })

}



exports.redirect=async (request, response, next) => {
    const id = request.params.id;
    var me = await URL_Model.findOne({shortURL:id})
    response.redirect(me.exactURL)
}