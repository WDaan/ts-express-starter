import app from './App'
import Log from './log/Log'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    Log.save(Log.INFO, 'Missile launched 🚀')
    console.log(`🚀 Listening on port ${PORT} ...`)
})
