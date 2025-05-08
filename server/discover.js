import bonjour from 'bonjour';

const instance = bonjour();

// Discover all HTTP services
instance.find({ type: 'http' }, (service) => {
    console.log(`Found server ${service.name} at ${service.host} port ${service.port}`);
    console.log(service);
});

