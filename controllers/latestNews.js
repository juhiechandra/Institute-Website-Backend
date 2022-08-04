const LatestNews = require('./../models/latestNews');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addNews = async (req, res) => {
    const latestnewsTitle = req.body.latestnewsTitle;
    const latestnewsText = req.body.latestnewsText;
    const date = Date.parse(req.body.date);

    const latestnews = new Latestnews({
        latestnewsTitle,
        latestnewsText,
        date
    });

    Latestnews.save()
        .then((news) => res.status(201).json(news))
        .catch(err => res.status(400).json('Error: ' + err));
}