class isAdminMiddleware {
  static isAdmin = (req, res, next) => {
    if (req.userRole === "ROLE_ADMIN") {
      return next();
    }
    return res.sendStatus(403);
  };
}
module.exports = isAdminMiddleware;
