let error = '';

class ErrorController{
    renderError(req,res){
        res.render('error', {error});
    }
}
module.exports = new ErrorController();