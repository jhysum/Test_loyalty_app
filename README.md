# Sweet Scoops - Ice Cream Loyalty App

A cross-platform mobile loyalty application built with Expo and React Native for a hyper-local, vertically integrated ice cream brand.

## Product Vision

Sweet Scoops reimagines the ice cream experience by combining:

- **Crumbl Cookie's weekly drop model**: New flavor drops every Sunday to create excitement and anticipation
- **Salt & Straw's hyper-local approach**: Each store features global classics alongside unique, neighborhood-specific flavors

We are a **vertically integrated ice cream store** that produces ice cream on-site using fresh, locally sourced ingredients. By partnering with local neighborhoods and suppliers, we enable rapid R&D on ice cream flavors, creating new, culturally relevant flavors every week that feel personalized for our community.

### Core Philosophy

- Fresh, on-site production with local ingredients
- Fast flavor R&D through community engagement
- Each store has global classics + hyper-local unique flavors
- Cultural heritage reflected in flavor creation
- Building a collectible flavor experience

## User Persona

**Primary Users**: Our ice cream store customers

- People who visit Sweet Scoops stores regularly
- Community members interested in local, artisanal products
- Ice cream enthusiasts who enjoy trying new flavors
- Users who appreciate the story behind their food

## Core Features (MVP)

### 1. Flavor Discovery

- **List View**: Browse all available flavors
- **New Flavor Banner**: Highlighted section for Sunday flavor drops
- **Flavor Detail View**:
  - Flavor name and description
  - Story behind the flavor and ingredients
  - Why the ingredients are interesting/unique
  - List of ingredients with sourcing information
  - User reviews and ratings
  - 5-star rating system for newcomers
  - Comment section for community discussion

### 2. Loyalty Program

- Track store visit frequency
- Membership status tiers with progressive benefits
- Status upgrades based on visit patterns
- Member-exclusive perks

### 3. Flavor Collection

- Personal flavor history tracking
- Collectible experience for flavors you've tried
- Review your past favorites
- Rate flavors you've experienced

### 4. User Experience

- **No forced login**: Users can browse flavors and reviews without authentication
- Optional login for tracking collections and loyalty status
- Clean, ice cream-themed UI design

## Future Features (Post-MVP)

- Prepaid account balance for purchases
- Discounts on pints and prepaid scoops
- In-app ordering (future consideration)
- Push notifications for new flavor drops
- Social sharing of flavor collections
- Store locator with store-specific flavors

## Tech Stack

### Core

- **Expo SDK ~54**: Cross-platform development framework
- **React Native 0.81**: Mobile UI framework
- **TypeScript 5.9**: Type-safe development with strict mode enabled
- **Target Platforms**: iOS, Android, Web

### Essential Dependencies

- **UI Components**: React Native Paper / React Native Elements
- **Icons**: @expo/vector-icons
- **Environment Variables**: expo-constants + dotenv
- **Navigation**: React Navigation (to be added when needed)
- **State Management**: Zustand (to be added when needed)
- **Forms**: React Hook Form + Zod (to be added when needed)

### Code Quality

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript Strict Mode**: Enabled for type safety
- **Comments**: Required for complex logic

### Performance Principles

- Optimize as we build
- Use FlatList for all lists (virtualization)
- Optimize images with expo-image
- Monitor bundle size incrementally

## Data Model (Draft)

### User

```typescript
{
  id: string
  email: string
  name: string
  loyaltyStatus: 'bronze' | 'silver' | 'gold' | 'platinum'
  visitCount: number
  joinDate: Date
  flavorCollection: FlavorHistory[]
}
```

### Flavor

```typescript
{
  id: string
  name: string
  description: string
  story: string
  ingredients: Ingredient[]
  storeId: string  // which store created this
  isGlobalClassic: boolean
  releaseDate: Date
  availableUntil?: Date
  imageUrl: string
  averageRating: number
  reviewCount: number
}
```

### Ingredient

```typescript
{
  name: string;
  source: string; // local supplier info
  story: string; // why this ingredient is special
}
```

### FlavorHistory

```typescript
{
  flavorId: string
  userId: string
  triedDate: Date
  userRating?: number  // 1-5 stars
  review?: string
  comments: Comment[]
}
```

### Comment

```typescript
{
  id: string;
  userId: string;
  flavorId: string;
  text: string;
  createdAt: Date;
  likes: number;
}
```

## Project Structure

```
.
├── App.tsx                 # Main app component
├── index.ts               # Expo entry file
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript config (strict mode)
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .env                  # Environment variables (not committed)
├── .env.example          # Environment variables template
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/      # Generic components (Button, Card, etc.)
│   │   └── features/    # Feature-specific components
│   ├── screens/         # Screen components
│   │   └── LoginScreen.tsx
│   ├── navigation/      # Navigation configuration (future)
│   ├── services/        # API calls (future)
│   ├── hooks/           # Custom React hooks
│   ├── context/         # Context providers (auth, etc.)
│   ├── utils/           # Helper functions
│   ├── constants/       # App constants, colors, theme
│   ├── types/           # TypeScript types/interfaces
│   └── assets/          # Images, fonts, etc.
└── README.md
```

## User Flows

### Primary Flow: Discover & Review Flavors

1. User opens app (no login required)
2. See list of all flavors with "New Drop" banner at top
3. Click on a flavor to view details
4. Read flavor story, ingredients, and sourcing information
5. See community reviews and ratings
6. Optionally: Rate flavor (1-5 stars) and leave comment
7. Optionally: Login to save flavor to collection

### Secondary Flow: Track Loyalty Status

1. User logs in / signs up
2. View loyalty status and visit count
3. See benefits of current tier
4. View personal flavor collection
5. Review and rate previously tried flavors

## Development Roadmap

### Phase 1: Foundation (Current)

- [x] Project setup with Expo + TypeScript
- [x] Initial login screen UI
- [ ] Enable TypeScript strict mode
- [ ] Set up ESLint + Prettier
- [ ] Create folder structure
- [ ] Add essential dependencies
- [ ] Define core data models

### Phase 2: Core Features (Next)

- [ ] Navigation setup
- [ ] Flavor list view with banner
- [ ] Flavor detail screen
- [ ] Rating component
- [ ] Comment section
- [ ] Mock data for development

### Phase 3: Loyalty System

- [ ] Authentication flow
- [ ] User profile screen
- [ ] Loyalty status tracking
- [ ] Flavor collection view
- [ ] Visit tracking

### Phase 4: Backend Integration

- [ ] API service layer
- [ ] State management with Zustand
- [ ] Real data integration
- [ ] Error handling

### Phase 5: Polish & Launch

- [ ] Performance optimization
- [ ] Offline support
- [ ] Analytics integration
- [ ] App store preparation

## Development Principles

1. **Build Incrementally**: Add dependencies and features only when needed
2. **Type Safety First**: Use TypeScript strict mode throughout
3. **Code Quality**: ESLint + Prettier, with comments for complex logic
4. **Performance Conscious**: Optimize as we build, not after
5. **User-Centric**: Start with core flows, iterate based on feedback

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

### 2. Set Up Environment Variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Start the Development Server

```bash
npm start
```

This will start the Expo development server and show a QR code in your terminal.

### 4. Run the App

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

## Development Workflow

1. Make changes to source files
2. Save the file
3. The app will automatically reload on your device (hot reload)
4. Run linting: `npm run lint`
5. Format code: `npm run format`

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Troubleshooting

### QR Code Not Working

- Make sure your phone and computer are on the same WiFi network
- Try using tunnel mode: `npm start --tunnel`

### App Won't Load

- Clear Expo cache: `npx expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Type Errors

- Run `npm run type-check` to see all TypeScript errors
- Make sure you're using strict mode compatible patterns

## Stack Decisions & Rationale

### Why Expo?

- Fastest cross-platform development (iOS, Android, Web)
- Great developer experience with hot reload
- Easy deployment with EAS Build and OTA updates
- Rich ecosystem of pre-built modules
- Perfect for loyalty apps that need to work everywhere

### Why TypeScript Strict Mode?

- Catch bugs early in development
- Better IDE autocomplete and documentation
- Easier refactoring as the app grows
- Industry best practice for production apps

### Why Incremental Dependency Addition?

- Smaller initial bundle size
- Learn dependencies as we need them
- Avoid unused code and complexity
- Easier to debug and maintain

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

Private project
