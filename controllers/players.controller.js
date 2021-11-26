const UserRooms = require('../models/create-rooms.model');

exports.viewHome = async (req, res, next) => {
    // render tampilan UI register
    return res.render('home')
}

exports.viewRegister = async (req, res, next) => {
    // render tampilan UI register
    return res.render('register')
}

exports.viewPlay = async (req, res, next) => {
    // render tampilan UI register
    return res.render('main')
}

exports.viewRoom = async (req, res, next) => {
    try {
        const rooms = await UserRooms.findAll({
            attributes: ['id', 'room_name', 'playerone', 'playertwo','pointone','pointtwo'],
        })

        return res.status(200).render('rooms', {
            rooms
        })
    } catch (error) {
        next(error)
    }
}