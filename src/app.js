const express = require("express")
require("dotenv").config();
const app = express();
require("./db/Connection")
app.use(express.json())

const UserRouter = require("./router/User")
const AlbumRouter = require("./router/Album")
const ArtistRouter = require("./router/Artist")
const FavoritesRouter = require("./router/Favorites")
const TrackRouter = require("./router/Track")

const port =process.env.PORT

app.use(UserRouter)
app.use(AlbumRouter)
app.use(ArtistRouter)
app.use(FavoritesRouter);
app.use(TrackRouter)


app.listen(port, ()=>{
    console.log(`listening port ${port}`)
})