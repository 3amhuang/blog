const handleErrors = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.error(error.message)
    ctx.status = error.status || 500
    switch (error.status) {
      case 404:
      case 405:
    }
  }
}

export default handleErrors
