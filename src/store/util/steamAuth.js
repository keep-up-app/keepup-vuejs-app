const SteamAuth = require("node-steam-openid");


/**
 * Steam OpenID Authentication initialization
 */

const steamAuthApi = 'https://steam-api-endpoint.herokuapp.com/steam/user/auth';


module.exports.auth = new SteamAuth({
    realm: steamAuthApi,
    returnUrl: 'http://localhost:8080/auth/steam',
    apiKey: '3C928C31955258B04B76FCE7FDF70798'
});