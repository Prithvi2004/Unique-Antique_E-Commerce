# Timeless Treasures - Luxury E-Commerce Platform

<div align="center">

![Timeless Treasures Logo](https://img.shields.io/badge/Timeless-Treasures-gold?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-2.38.4-3ECF8E?style=for-the-badge&logo=supabase)

_A sophisticated luxury e-commerce platform for antique and premium collectibles_

[Live Demo](#) • [Documentation](#documentation) • [Features](#features) • [Installation](#installation)

</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Components Documentation](#components-documentation)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling & Theming](#styling--theming)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Timeless Treasures** is a premium e-commerce platform designed for luxury antique and collectible items. The platform features a sophisticated dual-theme system (Antique & Luxury), advanced authentication, real-time cart management, and an immersive shopping experience with stunning animations and parallax effects.

### Key Highlights

- **Dual Theme System**: Seamless switching between Antique and Luxury aesthetics
- **Premium UI/UX**: Glass morphism effects, smooth animations, and responsive design
- **Advanced Authentication**: Supabase-powered auth with Google OAuth
- **Real-time Features**: Live cart updates, wishlist management, and user sessions
- **Luxury Product Catalog**: Curated collection of high-end watches, jewelry, and collectibles
- **Seller Dashboard**: Comprehensive tools for sellers to manage their inventory
- **Mobile-First Design**: Optimized for all devices with touch-friendly interactions

---

## ✨ Features

### 🛍️ E-Commerce Features

- **Product Catalog**: Curated luxury items with detailed specifications
- **Advanced Filtering**: Category, price range, rarity, and origin filters
- **Wishlist Management**: Save and organize favorite items
- **Shopping Cart**: Real-time cart updates with persistent storage
- **Product Reviews**: User-generated ratings and feedback system
- **Rarity System**: Common, Rare, Legendary, and Exclusive item classifications

### 🎨 User Experience

- **Dual Theme Interface**: Antique and Luxury visual themes
- **Smooth Animations**: Framer Motion-powered transitions and effects
- **Parallax Scrolling**: Immersive background effects
- **Glass Morphism**: Modern UI elements with backdrop blur effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic theme switching with system preferences

### 🔐 Authentication & Security

- **Supabase Authentication**: Secure user management
- **Google OAuth**: One-click social login
- **Protected Routes**: Role-based access control
- **Session Management**: Persistent login states
- **Profile Management**: User profile customization

### 📊 Seller Features

- **Seller Dashboard**: Comprehensive inventory management
- **Product Management**: Add, edit, and remove listings
- **Sales Analytics**: Performance tracking and insights
- **Order Management**: Process and fulfill customer orders

---

## 🛠️ Technology Stack

### Frontend

- **React 18.3.1**: Modern React with hooks and concurrent features
- **TypeScript 5.5.3**: Type-safe development
- **Vite 5.4.2**: Fast build tool and development server
- **React Router DOM 6.26.0**: Client-side routing
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Framer Motion 10.16.4**: Animation library
- **Lucide React 0.344.0**: Beautiful icon library

### State Management

- **Zustand 4.4.7**: Lightweight state management
- **React Hook Form 7.47.0**: Form handling and validation
- **Zod 3.22.4**: Schema validation

### Backend & Database

- **Supabase 2.38.4**: Backend-as-a-Service
- **PostgreSQL**: Relational database
- **Row Level Security**: Database-level security

### Development Tools

- **ESLint 9.9.1**: Code linting
- **TypeScript ESLint 8.3.0**: TypeScript-specific linting
- **PostCSS 8.4.35**: CSS processing
- **Autoprefixer 10.4.18**: CSS vendor prefixing

---

## 📁 Project Structure

```
project/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── auth/            # Authentication components
│   │   ├── cart/            # Shopping cart components
│   │   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── themed/          # Theme-specific components
│   │   └── ui/              # Base UI components
│   ├── data/                # Static data and mock content
│   ├── lib/                 # Utility libraries and configurations
│   ├── pages/               # Page components
│   ├── store/               # Zustand state management
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

### Detailed Component Structure

#### Authentication Components (`src/components/auth/`)

- **ProtectedRoute.tsx**: Route protection wrapper for authenticated users

#### Cart Components (`src/components/cart/`)

- **CartSidebar.tsx**: Sliding cart sidebar with real-time updates

#### Layout Components (`src/components/layout/`)

- **Navbar.tsx**: Main navigation with theme switching and user menu
- **Footer.tsx**: Site footer with links and information

#### Themed Components (`src/components/themed/`)

- **AntiqueInterface.tsx**: Antique theme-specific styling
- **LuxuryInterface.tsx**: Luxury theme-specific styling
- **ThemeSelector.tsx**: Theme switching interface

#### UI Components (`src/components/ui/`)

- **AnimatedCounter.tsx**: Animated number counters
- **Button.tsx**: Reusable button component with variants
- **GlassCard.tsx**: Glass morphism card component
- **LoadingSpinner.tsx**: Loading animation component
- **ParallaxSection.tsx**: Parallax scrolling wrapper
- **ProductCard.tsx**: Product display card
- **RarityBadge.tsx**: Product rarity indicator

---

## 🚀 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/timeless-treasures.git
   cd timeless-treasures
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

4. **Configure Supabase**

   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Get your project URL and anon key
   - Update `.env.local` with your credentials

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. **Database Schema**

   ```sql
   -- Create profiles table
   CREATE TABLE profiles (
     id UUID REFERENCES auth.users(id) PRIMARY KEY,
     email TEXT NOT NULL,
     full_name TEXT,
     avatar_url TEXT,
     bio TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable Row Level Security
   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

   -- Create policies
   CREATE POLICY "Users can view own profile" ON profiles
     FOR SELECT USING (auth.uid() = id);

   CREATE POLICY "Users can update own profile" ON profiles
     FOR UPDATE USING (auth.uid() = id);
   ```

2. **Authentication Settings**
   - Enable Google OAuth in Supabase dashboard
   - Configure redirect URLs
   - Set up email templates

### Tailwind Configuration

The project uses a custom Tailwind configuration with luxury-themed colors:

```javascript
// tailwind.config.js
colors: {
  gold: { /* Gold color palette */ },
  navy: { /* Navy color palette */ },
  marble: { /* Marble color palette */ }
}
```

---

## 📖 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Theme Switching

The application supports two distinct themes:

1. **Antique Theme**: Warm, vintage aesthetic with amber tones
2. **Luxury Theme**: Premium, modern aesthetic with gold accents

Users can switch themes using the theme selector in the navigation bar.

### Product Management

#### Adding Products

Products are managed through the `src/data/products.ts` file:

```typescript
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  rarity?: "common" | "rare" | "legendary" | "exclusive";
  yearMade?: number;
  origin?: string;
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    verified?: boolean;
  };
}
```

---

## 🧩 Components Documentation

### Core UI Components

#### Button Component

```typescript
import Button from "./components/ui/Button";

// Usage
<Button
  variant="primary" // "primary" | "secondary" | "outline" | "ghost"
  size="md" // "sm" | "md" | "lg" | "xl"
  disabled={false}
  onClick={handleClick}
>
  Click Me
</Button>;
```

#### GlassCard Component

```typescript
import GlassCard from "./components/ui/GlassCard";

// Usage
<GlassCard className="p-6">
  <h2>Card Content</h2>
  <p>With glass morphism effect</p>
</GlassCard>;
```

#### ProductCard Component

```typescript
import ProductCard from "./components/ui/ProductCard";

// Usage
<ProductCard
  product={product}
  onAddToCart={handleAddToCart}
  onToggleWishlist={handleToggleWishlist}
/>;
```

### Layout Components

#### Navbar Component

Features:

- Responsive navigation
- Theme switching
- User authentication status
- Shopping cart indicator
- Search functionality

#### CartSidebar Component

Features:

- Sliding sidebar design
- Real-time cart updates
- Product quantity management
- Checkout integration

### Themed Components

#### ThemeSelector Component

```typescript
import ThemeSelector from "./components/themed/ThemeSelector";

// Usage
<ThemeSelector currentTheme={currentTheme} onThemeChange={setTheme} />;
```

---

## 🗃️ State Management

The application uses Zustand for state management with separate stores for different concerns:

### Auth Store (`src/store/authStore.ts`)

```typescript
interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: () => Promise<{ error: any }>;
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}
```

### Cart Store (`src/store/cartStore.ts`)

```typescript
interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
```

### Theme Store (`src/store/themeStore.ts`)

```typescript
interface ThemeState {
  isDark: boolean;
  currentTheme: "antique" | "luxury";
  setTheme: (isDark: boolean) => void;
  setCurrentTheme: (theme: "antique" | "luxury") => void;
}
```

### Wishlist Store (`src/store/wishlistStore.ts`)

```typescript
interface WishlistState {
  items: Product[];
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}
```

---

## 🔌 API Integration

### Supabase Integration

The application integrates with Supabase for:

#### Authentication

```typescript
// Sign in with email/password
const { error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

// Sign in with Google OAuth
const { error } = await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    redirectTo: `${window.location.origin}/`,
  },
});
```

#### Database Operations

```typescript
// Fetch user profile
const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .single();

// Update profile
const { error } = await supabase.from("profiles").upsert({
  id: user.id,
  full_name: fullName,
  avatar_url: avatarUrl,
});
```

### Real-time Features

The application uses Supabase's real-time subscriptions for:

- Authentication state changes
- Cart updates
- User profile changes

---

## 🎨 Styling & Theming

### Design System

#### Color Palette

- **Gold**: Primary luxury accent color
- **Navy**: Professional and trustworthy
- **Marble**: Clean and sophisticated neutrals

#### Typography

- **Serif**: Playfair Display for headings
- **Sans**: Inter for body text

#### Spacing

- Consistent spacing scale using Tailwind's spacing utilities
- Responsive breakpoints for mobile-first design

### Theme Implementation

#### Antique Theme

- Warm amber and brown tones
- Vintage typography and patterns
- Classic, timeless aesthetic

#### Luxury Theme

- Gold and navy color scheme
- Modern, premium styling
- Sophisticated animations

### Animation System

#### Framer Motion Integration

```typescript
import { motion } from "framer-motion";

// Fade in animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>;
```

#### Parallax Effects

```typescript
import ParallaxSection from "./components/ui/ParallaxSection";

// Usage
<ParallaxSection speed={0.3}>
  <div>Content with parallax effect</div>
</ParallaxSection>;
```

---

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**

   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**

   ```bash
   vercel --prod
   ```

3. **Environment Variables**
   Set environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Netlify Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**

   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

3. **Environment Variables**
   Configure environment variables in Netlify dashboard

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Write clean, readable code
- Add comments for complex logic
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Supabase** for the excellent backend-as-a-service platform
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for beautiful icons
- **Vite** for the fast build tool

---

## 📞 Support

For support and questions:

- 📧 Email: support@timelesstreasures.com
- 💬 Discord: [Join our community](https://discord.gg/timelesstreasures)
- 📖 Documentation: [docs.timelesstreasures.com](https://docs.timelesstreasures.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/timeless-treasures/issues)

---

<div align="center">

**Made with ❤️ by the Timeless Treasures Team**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/timeless-treasures?style=social)](https://github.com/yourusername/timeless-treasures)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/timeless-treasures?style=social)](https://github.com/yourusername/timeless-treasures)

</div>
