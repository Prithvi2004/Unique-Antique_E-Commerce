import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: () => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,

  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Sign in error:', error);
        return { error };
      }
      
      if (data.user) {
        set({ user: data.user });
      }
      
      return { error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error };
    }
  },

  signInWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Google sign in error:', error);
        return { error };
      }
      
      // For OAuth, the user will be redirected, so we don't set user here
      // The auth state change will be handled by the listener
      return { error: null };
    } catch (error) {
      console.error('Google sign in error:', error);
      return { error };
    }
  },

  signUp: async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        console.error('Sign up error:', error);
        return { error };
      }

      if (data.user) {
        set({ user: data.user });
        
        // Create a profile record
        try {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              {
                id: data.user.id,
                email: data.user.email!,
                full_name: fullName,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              },
            ]);
          
          if (profileError) {
            console.warn('Profile creation error:', profileError);
          }
        } catch (profileError) {
          console.warn('Profile creation failed:', profileError);
        }
      }

      return { error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error };
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
      }
      set({ user: null });
    } catch (error) {
      console.error('Sign out error:', error);
    }
  },

  initialize: async () => {
    try {
      set({ loading: true });
      
      // Get the current session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.warn('Session error:', sessionError);
        set({ user: null, loading: false });
      } else if (session?.user) {
        set({ user: session.user, loading: false });
      } else {
        set({ user: null, loading: false });
      }

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log('Auth state changed:', event, session?.user?.email);
          
          if (event === 'SIGNED_IN' && session?.user) {
            set({ user: session.user, loading: false });
            
            // Create or update profile on sign in
            try {
              const { error: profileError } = await supabase
                .from('profiles')
                .upsert([
                  {
                    id: session.user.id,
                    email: session.user.email!,
                    full_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || null,
                    avatar_url: session.user.user_metadata?.avatar_url || null,
                    updated_at: new Date().toISOString(),
                  },
                ], { onConflict: 'id' });
              
              if (profileError) {
                console.warn('Profile upsert error:', profileError);
              }
            } catch (profileError) {
              console.warn('Profile upsert failed:', profileError);
            }
          } else if (event === 'SIGNED_OUT') {
            set({ user: null, loading: false });
          } else if (event === 'TOKEN_REFRESHED' && session?.user) {
            set({ user: session.user, loading: false });
          }
        }
      );

      // Cleanup subscription on unmount
      return () => {
        subscription.unsubscribe();
      };
    } catch (error) {
      console.error('Initialize auth error:', error);
      set({ user: null, loading: false });
    }
  },
}));