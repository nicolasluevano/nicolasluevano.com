fetch("https://api.spotify.com/v1/me/player/recently-played", {
  method: 'GET',
  headers: {
    "Accept":"application/json",
    "Content-Type":"application/json",
    "Authorization":"Bearer BQBViE9Pk-Py6CG48g7remtP3v3Uf5FQDLtWr-GBOKNU3TnhOAHJbcs84DDIiItBfKtPNrmzYYzzewIbIFd7VULDNKUYSbcsYJHKx1HxyQtSZJMCQb1-c84zfPu91v1Vu6qhN1bmWt10dTRYoSzl"
  }
})
.then(res => res.json())
.then(data => {
    console.log(data)
    let trackName = data.items[0].track.name
    let artistsName = data.items[0].track.artists[0].name
    document.querySelector('.track-name').innerText = trackName
    document.querySelector('.artists-name').innerText = artistsName
    
})
.catch(err => {
    console.log(`err ${err}`)
})

