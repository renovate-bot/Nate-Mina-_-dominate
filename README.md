# Dom-I-NATE Music Website

This is the official website for music artist Dom-I-NATE, featuring video hosting capabilities and a modern React frontend.

## Setup Instructions

1. Install Docker and Docker Compose on your system
2. Create a `videos` directory in the project root
3. Place your MP4 video files in the `videos` directory
4. Run the application:

```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Development

- Frontend code is in the `src` directory
- Backend code is in the `backend` directory
- Videos are served from the `videos` directory

## Adding Videos

1. Place MP4 video files in the `videos` directory
2. They will be automatically available through the `/videos/{filename}` endpoint
3. Update the video source in the React components as needed