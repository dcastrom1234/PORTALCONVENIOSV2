import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  loginUrl: 'https://accounts.claveunica.gob.cl/openid/authorize/',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'b50d3e39697d4b698fe829fa4c07cbac',
  strictDiscoveryDocumentValidation: false,
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid run name',
  responseType: 'code'
}