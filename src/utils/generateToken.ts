import jwt from 'jsonwebtoken';

const SECRECT = 'requisito3tafacil';

const jwtConfig: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateJWT = (username: string, id : number) => {
  const token = jwt.sign({ data: { username, id } }, SECRECT, jwtConfig);
  return token;
};

export default generateJWT;