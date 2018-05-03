var LobbyLogin = (function() {
    var win = null;
    var credentials = null;
    var site = 'https://lobby.gegzone.com';
 
    window.addEventListener('message', function(evntData) {
        if (evntData.data == 'lobbysetup' && evntData.origin == site) {
            console.log('lobby initialized ok');
            if (win && credentials)
                win.postMessage(credentials, site);
        }
    })
 
    function login(username, password) {
        win = window.open(site, '_blank');
        credentials = { username: username, password: password };
    }
 
    return login;
 
})();