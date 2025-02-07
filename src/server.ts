import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    // eslint-disable-next-line prettier/prettier
    host: ('RENDER' in process.env) ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
