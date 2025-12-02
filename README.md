# GUM Premium Consultation App

A React Native mobile application built with Expo and TypeScript for GUM's premium consultation service. This app provides users with access to GUM specialist consultations through WhatsApp and appointment booking.

## 📱 Features

- **Specialist Directory**: Display GUM specialists with photos and names (English/Chinese)
- **Multi-language Support**: Full English and Traditional Chinese localization
- **Appointment Booking**: Direct link to GUM's online booking platform
- **WhatsApp Integration**: Quick contact with pre-filled messages
- **Contact Information**: Clickable phone and email links
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: Smooth loading experience with activity indicators

## 🏗️ Project Architecture

```
gum-premium-consultation-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ActionButtons.tsx       # Booking & WhatsApp buttons
│   │   ├── PrimaryButton.tsx       # Common button
│   │   ├── ContactInfo.tsx         # Contact details with clickable links
│   │   ├── ErrorView.tsx           # Error state with retry button
│   │   ├── ServiceHours.tsx        # Service hours display
│   │   ├── SpecialistCard.tsx      # Individual specialist card
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useSpecialists.ts       # React Query hook for specialists data
│   │
│   ├── i18n/                # Internationalization
│   │   ├── translations.ts         # English & Chinese translations
│   │
│   ├── screens/             # Screen components
│   │   ├── PremiumConsultationScreen.tsx  # Main consultation screen
│   │
│   ├── services/            # API/Data services
│   │   ├── specialistService.ts    # Specialist data fetching (hardcoded, CMS-ready)
│   │
│   └── types/               # TypeScript type definitions
│       ├── specialist.types.ts     # Specialist data types
│       ├── translation.types.ts    # i18n types
│
├── assets/                  # Images and static assets
├── App.tsx                  # Root application component
├── index.ts                 # Application entry point
├── app.json                 # Expo configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── .eslintrc.js            # ESLint configuration

```

## 📦 Tech Stack & Dependencies

### Core Framework

- **React Native**: 0.81.5 - Mobile app framework
- **Expo**: ~54.0.25 - React Native development platform
- **TypeScript**: ~5.9.2 - Type-safe JavaScript

### State Management & Data Fetching

- **@tanstack/react-query**: ^5.90.10 - Powerful async state management
  - Handles data fetching, caching, and synchronization
  - Used for loading specialist data
  - Provides error handling and retry logic

### UI Components

- **@gorhom/bottom-sheet**: ^5.2.6 - Performant bottom sheet component
  - Smooth animations with React Native Reanimated
  - Gesture-based interactions
  - _(Installed but not yet implemented in current version)_

### Animations & Gestures

- **react-native-reanimated**: ^4.1.5 - High-performance animations
- **react-native-gesture-handler**: ^2.29.1 - Native-driven gesture management

### Internationalization

- **i18n-js**: ^4.5.1 - Localization library for English/Chinese support

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Expo Go app (for testing on physical devices)
- iOS Simulator (Mac only) or Android Emulator (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gum-premium-consultation-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your device/simulator**

   - **Expo Go (Recommended for beginners)**:

     - Install Expo Go app on your iOS/Android device
     - Scan the QR code from the terminal

   - **iOS Simulator** (Mac only):

     ```bash
     npm run ios
     ```

   - **Android Emulator**:
     ```bash
     npm run android
     ```

## 📱 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser (experimental)
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Auto-fix ESLint issues

## 🌐 Localization

The app supports two languages:

- **English (en)** - Default
- **繁體中文 (zh)** - Traditional Chinese

Language can be toggled using the button in the top-right corner of the app.

### Adding New Translations

Edit `src/i18n/translations.ts`:

```typescript
export const translations: Translations = {
  en: {
    newKey: "English text",
    // ...
  },
  zh: {
    newKey: "中文文本",
    // ...
  },
};
```

## 🔧 Configuration

### Specialist Data

Currently, specialist data is hardcoded in `src/services/specialistService.ts`. To integrate with a CMS in the future:

```typescript
// Replace the fetchSpecialists function:
export const fetchSpecialists = async (): Promise<Specialist[]> => {
  const response = await fetch("https://your-cms-api.com/specialists");
  return response.json();
};
```

The service layer is designed for easy swapping between hardcoded and API-based data.

## 🎨 Design Implementation

Based on Figma specifications:

- White background (#FFF)
- Black action buttons (#000)
- Service hours and action buttons persist at bottom
- Scrollable content for specialists list, contact info, and agreements

## 📞 Contact Integration

### WhatsApp

- Phone: +852 6030 0900
- Pre-filled message: "Hi GUM Specialist! I am contacting via the app."

### Phone & Email

- Hotline: +852 2893 4402 (clickable to open dialer)
- Email: memberservice@gumhk.com (clickable to open mail app)

### Appointment Booking

- URL: https://gainmiles.simplybook.asia/v2/
- Opens in device's default browser

## 🐛 Error Handling

The app includes comprehensive error handling:

- **Loading State**: Spinner displayed while fetching data
- **Error State**: Friendly error message with retry button
- **Network Errors**: Gracefully handled with user feedback

## 🧪 Testing the App

1. **Test Language Switch**: Tap the language toggle button (top-right)
2. **Test WhatsApp Link**: Tap "WhatsApp us" button
3. **Test Booking**: Tap "Book appointment" button
4. **Test Contact Links**: Tap phone number and email
5. **Test Error Handling**: Network errors are simulated with 10% probability

## 📚 For React Native Beginners

### Key Concepts

1. **Components**: Reusable UI building blocks (like `SpecialistCard`)
2. **Props**: Data passed to components (like `language="en"`)
3. **State**: Dynamic data that changes (like loading/error states)
4. **Hooks**: Functions that let you use React features (`useState`, `useEffect`)
5. **React Query**: Simplifies data fetching and caching

### Useful Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Query Docs](https://tanstack.com/query/latest)

### Common Commands

```bash
# Clear Expo cache if you encounter issues
npx expo start -c

# Check for outdated dependencies
npm outdated

# Update dependencies
npm update
```

## 🔍 Code Quality

ESLint is configured for code quality and consistency:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

## 🚧 Future Enhancements

- [ ] Integrate CMS for specialist data management
- [ ] Implement bottom sheet for better UX
- [ ] Add in-app browser for appointment booking
- [ ] Add unit and integration tests
- [ ] Add accessibility improvements
- [ ] Implement analytics tracking

## 📄 License

Copyright © 2025 GUM HK. All rights reserved.

## 👥 Support

For questions or support, contact:

- Email: rockyiu@gainmiles-tw.com
- Development Team: GUM Technology

---

**Built with ❤️ using React Native & Expo**
