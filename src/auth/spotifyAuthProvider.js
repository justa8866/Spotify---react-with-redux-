const spotifyAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    spotifyAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    spotifyAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { spotifyAuthProvider };
