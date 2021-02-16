// //GET to obtain recently played song from spotify

// fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
//   method: 'GET',
//   headers: {
//     "Accept":"application/json",
//     "Content-Type":"application/json",
//     "Authorization":"Bearer BQCCPZrTfJP7DS6Z4WjgkbVnbsaVsOVLcTkUNRw2NW-4WJk_6nNYVAk7oL85ICB0OvHnv1Y5d072crg4tP1qLJmVmXerahNuPgwfPHJg7En7AhUClR-CbFKfbV6YU6tNkJ6ZVQzWVIhUaRFMbkRb"
//   }
// })
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     let trackName = data.items[0].track.name
//     let artistsName = data.items[0].track.artists[0].name
//     document.querySelector('.track-name').innerText = trackName
//     document.querySelector('.artists-name').innerText = artistsName
    
// })
// .catch(err => {
//     console.log(`err ${err}`)
// })

// //POST to get a new token every hour
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer BQCjCzzdH4t9MKn1MdBWN5x6-_BJTbHFT9c2lyRcP99B1kv-cgBRk_FyM40jW1cmUVMv82isvYCJQLCL13xwhg4zvEyjFHMrR8YRaGDvUFhLlHfyxlIsOBFY7tCCUbvqYRKHgELZicdFW1HMdK-0");
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// myHeaders.append("Cookie", "__Host-device_id=AQA3yFAp4MzzgPzGU1i8PSNSsjWATOnUT1ExGCOHaT-XJNNuPZ--Vh2ZDadiNciYXYiaTCnXNa5MZo4WIk0gSuG3y0vl2z_2BTU; __Secure-TPASESSION=AQANcD6++5X20tz6IsRnsQArb2hEJwsnw14BAGAzPuTFuPlMHrpXYioTs3u2FTDQjKr0tDCCHvyK2spwlxTszeCkrZWNpdYDNcE=; _ga=GA1.2.282974044.1613458079; _gid=GA1.2.355584.1613458079; remember=calanchos%40yahoo.com; sp_dc=AQA1S9D2iDw9t0OjXxG6gEoqYJDWyPunwVa2ChmQ1cWeycxo4yWPcGcjsljvqaUH7oz0Pu_KCYwrztPumpY4zqxSIoycO_HQtYGnna-22A; sp_key=ae3ec1a6-ee5c-4060-b43c-6e0d62bdfdd0; csrf_token=AQDaAX6Ot439O4ZTNMmuuwqJT1YPfZZytIEKhrm5DhAW2VBOOhSb6fUtMDdSyp7IN0ZWtWBWS-AT6a8; inapptestgroup=; sp_ac=AQB55Hjk8Wryetj4E3hdVA1UljhAHGS6jAiOdnf4J8OhxHNyhKTvnzKKoTcYBN1c0KOVL5JLOzdY8eAA70lksOImy7l0POFwfxSJM659f2W8YbJz0xzCArVMcwZMedpVxgXlKryswIguVtfuiiLxXn4JXUP4_Cna1nSP5gBOc6I9ZF0G0n6UzyQwvZyBu9dspE3g2PwHeyy9E63Gtfm0HxWPHDmfs4VIMJ0");

// var urlencoded = new URLSearchParams();
// urlencoded.append("grant_type", "refresh_token");
// urlencoded.append("refresh_token", "");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("https://accounts.spotify.com/api/token", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

