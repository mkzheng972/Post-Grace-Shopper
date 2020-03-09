// const adminOnly = (req, res, next) => {
//   const err = new Error('Not Allowed')
//   if (!req.user.isAdmin) {
//     err.status = 403
//     throw err
//   }
//   next()
// }

const adminOnly = (req, res, next) => {
  const err = new Error('Not Allowed - Admin Only')
  if (req.user.isAdmin) {
    next()
  } else {
    err.status = 403
    throw err
  }
}

const selfUserOnly = (req, res, next) => {
  const err = new Error('Not Allowed - Self User Only')
  if (req.user.id === Number(req.params.id) || req.user.isAdmin) {
    next()
  } else {
    err.status = 403
    throw err
  }
}

// const selfUserOnly = (req, res, next) => {
//   const err = new Error('Not Allowed')
//   if (req.user.id !== Number(req.params.id) || (!req.user.isAdmin)) {
//     err.status = 403
//     throw err
//   }
//   next()
// }

// if user is admin --> everything is allowed

// if user is self-user or admin

module.exports = {
  adminOnly,
  selfUserOnly
}
