module.exports = {
    user: function(user){
        return {
            username: user.username,
            firstName: user.firstName,
            categories: user.categories,
            tasks: user.tasks
        }
    }
}