import decode from 'jwt-decode';


class AuthService {
    getProfile() {
        return decode(this.getToken());
      }

      isTokenExpired(token) {
        // Decode the token to get its expiration time that was set by the server
        const decoded = decode(token);
        // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
        if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem('id_token');
          return true;
        }
        // If token hasn't passed its expiration time, return `false`
        return false;
      }
    
      getToken() {
        return localStorage.getItem('id_token');
      }
}

export default new AuthService();