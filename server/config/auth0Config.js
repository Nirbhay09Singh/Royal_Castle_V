import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUERBASEURL,
    tokenSigningAlg: process.env.TOKENSIGNALGO
  });

export default jwtCheck


