
const UserRole = require("../models/user-roles.model");
const User = require("../models/users.model");
const index = require("../models/index")
exports.viewDashboard = async (req, res, next) => {
    try {
        const { user } = req
        const users = await User.findAll({
            attributes: ['id', 'fullName', 'email'],
            include: [
                {
                    model: UserRole,
                    as: 'role',
                    attributes: ['name']
                }
            ]
        })

        return res.status(200).render('dashboard', {
            users,
            fullName: users.fullName
        })
    } catch (error) {
        next(error)
    }
}