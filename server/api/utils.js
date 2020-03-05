const adminOnly = (req, res, next) => {
  const err = new Error('Not Allowed')
  if (!req.user.isAdmin) {
    err.status = 403
    throw err
  }
  next()
}

const selfUserOnly = (req, res, next) => {
  const err = new Error('Not Allowed')
  if (!req.user && req.user.id != req.params.id) {
    err.status = 403
    throw err
  }
  next()
}

module.exports = {
  adminOnly,
  selfUserOnly
}
