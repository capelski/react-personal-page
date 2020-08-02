import getExpressApp from './get-express-app';

process.env.PRODUCTION_URL_BASE = 'https://carlescapellas.xyz/react-personal-page';

const app = getExpressApp();
app.listen(3000, (error: any) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Express server listening on port 3000');
    }
});
