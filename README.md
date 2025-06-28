# Timeless Treasures - Luxury E-Commerce Platform

<div align="center">

![Timeless Treasures Logo](https://img.shields.io/badge/Timeless-Treasures-gold?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-2.38.4-3ECF8E?style=for-the-badge&logo=supabase)

_A sophisticated luxury e-commerce platform for antique and premium collectibles_

[Live Demo](https://antique-luxury-ecommerce.vercel.app/) • [Documentation](#documentation) • [Features](#features) • [Installation](#installation)

</div>

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

## 📁 Project Structure

```
Unique-Antique_E-Commerce/
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

---

## 🚀 Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Prithvi2004/Unique-Antique_E-Commerce.git
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

1. **Authentication Settings**
   - Enable Google OAuth in Supabase dashboard
   - Configure redirect URLs
   - Set up email templates


---

### Theme Switching

The application supports two distinct themes:

1. **Antique Theme**: Warm, vintage aesthetic with amber tones
2. **Luxury Theme**: Premium, modern aesthetic with gold accents

Users can switch themes using the theme selector in the Shop section.


## 🔌 API Integration

### Theme Implementation

#### Antique Theme

- Warm amber and brown tones
- Vintage typography and patterns
- Classic, timeless aesthetic

#### Luxury Theme

- Gold and navy color scheme
- Modern, premium styling
- Sophisticated animations

