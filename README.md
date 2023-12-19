# Weather App

This is a small Express.js application that provides a simple web interface to check the weather. It utilizes data from external APIs to provide accurate and up-to-date weather information.

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/E1mir/express-weather-app.git
cd express-weather-app
```

2. Install dependencies.

```bash
npm install
```

3. Set up your environment variables.

  - Create a `.env` file in the root of the project.
  - Copy the contents of `.env.example` into `.env`.
  - Replace the placeholder values in `.env` with your actual API keys.

   ```env
   POSITIONSTACK_API_KEY="your-positionstack-api-key"
   WEATHERSTACK_API_KEY="your-weatherstack-api-key"
   ```

  - Get your Positionstack API key [here](https://positionstack.com/documentation).
  - Get your Weatherstack API key [here](https://weatherstack.com/documentation).

4. Run the application.

```bash
npm start
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`public/`**: Static assets (stylesheets, scripts, images).
- **`templates/`**: Handlebars view templates.
  - **`views/`**: Main view templates.
  - **`partials/`**: Handlebars partials.
- **`utils/`**: Utility functions (geocode, forecast).
- **`app.js`**: Main application file.


## Author

- **Elmir Ismayilzada**
  - Frontend Engineer
  - [GitHub](https://github.com/E1mir)

## API Integration

This app integrates with external weather APIs (Positionstack and Weatherstack) to provide accurate and real-time weather information. Ensure that you have valid API keys and update the environment variables accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
