const login = async (ctx) => {
  if (ctx.method === 'POST') {
    const body = ctx.request.body
    const username = body.username
    const password = body.password
    ctx.type = 'application/json'
    ctx.body = {
      res: `${username}: ${password}`
    }
  }
}

export {
  login,
}
