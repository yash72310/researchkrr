const Menu = require('../../models/menu')
const Research=require('../../models/research')
function homeController() {
    return {
        async index(req, res) {
            const pizzas = await Research.find()
            return res.render('home', { pizzas: pizzas })
        },

        async about(req,res){
            res.render('about')
        }
    }
}

module.exports = homeController