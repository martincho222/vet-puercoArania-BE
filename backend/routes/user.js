const router = require('express').Router();
const userController = require('../controllers/userController');

const { UserList, userListById, updateUser, deleteUser, createUser, updateUserAdmin } = userController


router.route('/user')
.get(UserList)
.post(createUser)
.put(updateUser);

router.route('/user/:id')
.get(userListById)
.put(updateUserAdmin)
.delete(deleteUser);

module.exports = router;