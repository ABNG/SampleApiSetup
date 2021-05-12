const catchAsync = require('../utils/catchAsync');

const showReceipt = catchAsync(async (req, res) => {
    res.render('html/receipt',{name: "ABU BAKAR"});
});

module.exports = {
    showReceipt,
};