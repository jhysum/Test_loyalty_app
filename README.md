# Ice Cream Loyalty App

A cross-platform mobile application built with Expo and React Native for an ice cream brand loyalty program.

## Features (Planned)

- User authentication and login
- View new ice cream flavors
- Browse all available flavors
- Rate and vote on flavors (1-5 stars)
- View flavor details including:
  - Flavor story and description
  - Ingredients
  - Product information

## Tech Stack

- **Expo** - React Native framework for cross-platform development
- **React Native** - Mobile app framework
- **TypeScript** - Type-safe JavaScript
- **Target Platforms**: Web, iOS, Android

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- **Expo Go app** installed on your mobile device (optional but recommended)
  - [Download for iOS](https://apps.apple.com/app/expo-go/id982107779)
  - [Download for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm start
```

This will start the Expo development server and show a QR code in your terminal.

### 3. Run the App

You have three options:

#### Option A: Run on Your Phone (Recommended for Testing)
1. Install **Expo Go** on your phone (links above)
2. Scan the QR code from your terminal:
   - **iOS**: Use the Camera app to scan the QR code
   - **Android**: Use the Expo Go app to scan the QR code
3. Your app will load on your phone

#### Option B: Run in Web Browser
```bash
npm run web
```
or press `w` after running `npm start`

#### Option C: Run on Emulator/Simulator
```bash
npm run ios      # Requires macOS with Xcode
npm run android  # Requires Android Studio
```

## Project Structure

```
.
├── App.tsx              # Main app component (entry point)
├── index.ts            # Expo entry file
├── app.json            # Expo configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── assets/             # Images, fonts, and other static files
```

## Development Workflow

1. Make changes to `App.tsx` or other files
2. Save the file
3. The app will automatically reload on your device (hot reload)

## Next Steps

- [ ] Set up navigation (React Navigation)
- [ ] Create screen components (Login, New Flavors, All Flavors, Flavor Detail)
- [ ] Implement authentication flow
- [ ] Design flavor card components
- [ ] Add rating/voting functionality
- [ ] Connect to backend API (future)

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser

## Troubleshooting

### QR Code Not Working
- Make sure your phone and computer are on the same WiFi network
- Try using tunnel mode: `npm start --tunnel`

### App Won't Load
- Clear Expo cache: `npx expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

## License

Private project
