require('dotenv').config()
const express = require('express')
const app = express()
gitdata={
  "login": "Dest1Troyer",
  "id": 119774321,
  "node_id": "U_kgDOByOccQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/119774321?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Dest1Troyer",
  "html_url": "https://github.com/Dest1Troyer",
  "followers_url": "https://api.github.com/users/Dest1Troyer/followers",
  "following_url": "https://api.github.com/users/Dest1Troyer/following{/other_user}",
  "gists_url": "https://api.github.com/users/Dest1Troyer/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Dest1Troyer/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Dest1Troyer/subscriptions",
  "organizations_url": "https://api.github.com/users/Dest1Troyer/orgs",
  "repos_url": "https://api.github.com/users/Dest1Troyer/repos",
  "events_url": "https://api.github.com/users/Dest1Troyer/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Dest1Troyer/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-12-04T04:42:32Z",
  "updated_at": "2025-02-18T15:26:45Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram',(req,res)=>{
    res.send('varadbvbvpn3081')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>youtube</h2>')
})
app.get('/github',(req,res)=>{
  res.json(gitdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
