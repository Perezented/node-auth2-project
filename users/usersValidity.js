module.exports = { isLoggedIn };
function isLoggedIn(user) {
    return Boolean(
        user.username && user.password && typeof user.password === "string"
    );
}
