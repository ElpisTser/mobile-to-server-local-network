import express from 'express';
import bonjour from 'bonjour';

const app = express();
const PORT = 3000;

app.use(express.json());


// Routes
app.post('/log', (req, res) => {
    const text = req.body.text;
    console.log(`[LOG] ${new Date().toISOString()}: ${text}`);
    res.json({ status: 'OK', received: text });
  });

// Server start
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Advertise via mDNS
const instance = bonjour();
instance.publish({
    name: 'My WiFi Server',
    type: 'http',
    port: PORT,
    txt: { description: 'WiFi test server' }
});

console.log(`Server advertised as 'My WiFi Server' on port ${PORT}`);