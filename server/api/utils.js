const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(403).send('Not Allowed')
  }
  next()
}

const adminOrUser = (req, res, next) => {
  if (!req.user.isAdmin || (!req.user && req.user.id != req.params.id)) {
    res.status(403).send('Not Allowed')
  }
  next()
}

module.exports = {
  adminOnly,
  adminOrUser
}
