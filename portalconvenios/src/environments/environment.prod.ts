export const environment = {
  production: true,
  url: "",
  login_url: 'https://accounts.claveunica.gob.cl/openid/authorize/',
  redirect_uri: window.location.origin + '/',
  client_id:'b50d3e39697d4b698fe829fa4c07cbac',
  scope: 'openid run name',
  responseType: 'code',
  client_secret: 'c9f56cb622e844269bac5d66c631be0e',
  auth_url:'https://accounts.claveunica.gob.cl/openid/token/',
  info_url:'https://accounts.claveunica.gob.cl/openid/userinfo/',
  origin: 'https://portalconveniosqa.srcei.cl',
  encoded_uri:'https%3A%2F%2Fportalconveniosqa.srcei.cl%2F'
};
