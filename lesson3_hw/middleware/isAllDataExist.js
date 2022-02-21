// і другу мідлвару /login чи користувач ввів всі data
function isAllDataExist(req,res,next){

    try {
        const {firstName,lastName,email,password,age,city} = req.body;
        if (!firstName || !lastName || !email || !password || !age || !city){
            throw new Error('All fields are required!')
        }
        next();
    } catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
}

module.exports = isAllDataExist;