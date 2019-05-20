module.exports = {
  login: ({ request }, callback) => {
    let data = {
      token: JSON.stringify({
        username: request.username,
        password: request.password
      })
    }

    return callback(null, data);
  },
  register: ({ request }, callback) => {
    let data = {
      token: JSON.stringify({
        username: request.creds.username,
        password: request.creds.password,
        name: request.user.name,
        email: request.user.email
      })
    }

    return callback(null, data);
  }
};