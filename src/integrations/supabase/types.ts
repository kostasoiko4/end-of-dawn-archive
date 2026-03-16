export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      bio_content: {
        Row: {
          created_at: string
          id: string
          paragraph1: string
          paragraph2: string
          paragraph3: string
          quote: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          paragraph1?: string
          paragraph2?: string
          paragraph3?: string
          quote?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          paragraph1?: string
          paragraph2?: string
          paragraph3?: string
          quote?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          created_at: string
          email: string
          id: string
          phone: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string
          id?: string
          phone?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          phone?: string
          updated_at?: string
        }
        Relationships: []
      }
      featured_items: {
        Row: {
          created_at: string
          date: string
          description: string
          id: string
          image: string
          link: string
          sort_order: number
          tag: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          date?: string
          description?: string
          id?: string
          image?: string
          link?: string
          sort_order?: number
          tag?: string
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          id?: string
          image?: string
          link?: string
          sort_order?: number
          tag?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      hero_content: {
        Row: {
          created_at: string
          id: string
          listen_now_label: string
          shows_label: string
          subtitle: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          listen_now_label?: string
          shows_label?: string
          subtitle?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          listen_now_label?: string
          shows_label?: string
          subtitle?: string
          updated_at?: string
        }
        Relationships: []
      }
      lineup_members: {
        Row: {
          bio: string
          created_at: string
          id: string
          image: string
          instrument: string
          name: string
          role: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          bio?: string
          created_at?: string
          id?: string
          image?: string
          instrument?: string
          name: string
          role?: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          bio?: string
          created_at?: string
          id?: string
          image?: string
          instrument?: string
          name?: string
          role?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      media_links: {
        Row: {
          all_photos: string
          created_at: string
          epk_zip: string
          id: string
          logo_pack: string
          press_kit: string
          updated_at: string
        }
        Insert: {
          all_photos?: string
          created_at?: string
          epk_zip?: string
          id?: string
          logo_pack?: string
          press_kit?: string
          updated_at?: string
        }
        Update: {
          all_photos?: string
          created_at?: string
          epk_zip?: string
          id?: string
          logo_pack?: string
          press_kit?: string
          updated_at?: string
        }
        Relationships: []
      }
      merch_items: {
        Row: {
          category: string
          created_at: string
          id: string
          image: string
          link: string
          name: string
          price: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          image?: string
          link?: string
          name: string
          price?: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          image?: string
          link?: string
          name?: string
          price?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      releases: {
        Row: {
          created_at: string
          date: string
          description: string | null
          featured: boolean
          id: string
          image: string
          label: string
          link: string
          sort_order: number
          stream_link: string | null
          title: string
          tracks: number
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          date?: string
          description?: string | null
          featured?: boolean
          id?: string
          image?: string
          label?: string
          link?: string
          sort_order?: number
          stream_link?: string | null
          title: string
          tracks?: number
          type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string | null
          featured?: boolean
          id?: string
          image?: string
          label?: string
          link?: string
          sort_order?: number
          stream_link?: string | null
          title?: string
          tracks?: number
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      shows: {
        Row: {
          bands: string
          created_at: string
          date: string
          id: string
          image: string
          location: string
          sort_order: number
          tickets_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          bands?: string
          created_at?: string
          date: string
          id?: string
          image?: string
          location?: string
          sort_order?: number
          tickets_url?: string | null
          title: string
          updated_at?: string
          url?: string
        }
        Update: {
          bands?: string
          created_at?: string
          date?: string
          id?: string
          image?: string
          location?: string
          sort_order?: number
          tickets_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      social_links: {
        Row: {
          apple_music: string
          bandcamp: string
          created_at: string
          facebook: string
          id: string
          instagram: string
          spotify: string
          tiktok: string
          updated_at: string
          youtube: string
        }
        Insert: {
          apple_music?: string
          bandcamp?: string
          created_at?: string
          facebook?: string
          id?: string
          instagram?: string
          spotify?: string
          tiktok?: string
          updated_at?: string
          youtube?: string
        }
        Update: {
          apple_music?: string
          bandcamp?: string
          created_at?: string
          facebook?: string
          id?: string
          instagram?: string
          spotify?: string
          tiktok?: string
          updated_at?: string
          youtube?: string
        }
        Relationships: []
      }
      songs: {
        Row: {
          album: string
          created_at: string
          duration: string
          id: string
          plays: string
          sort_order: number
          spotify_embed: string
          spotify_link: string
          title: string
          updated_at: string
        }
        Insert: {
          album?: string
          created_at?: string
          duration?: string
          id?: string
          plays?: string
          sort_order?: number
          spotify_embed?: string
          spotify_link?: string
          title: string
          updated_at?: string
        }
        Update: {
          album?: string
          created_at?: string
          duration?: string
          id?: string
          plays?: string
          sort_order?: number
          spotify_embed?: string
          spotify_link?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
