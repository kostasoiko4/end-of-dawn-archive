
-- Site Content Tables for End of Dawn

-- Hero content (single row)
CREATE TABLE public.hero_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subtitle TEXT NOT NULL DEFAULT '',
  listen_now_label TEXT NOT NULL DEFAULT 'Listen Now',
  shows_label TEXT NOT NULL DEFAULT 'Upcoming Shows',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bio content (single row)
CREATE TABLE public.bio_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  paragraph1 TEXT NOT NULL DEFAULT '',
  paragraph2 TEXT NOT NULL DEFAULT '',
  paragraph3 TEXT NOT NULL DEFAULT '',
  quote TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Songs
CREATE TABLE public.songs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  duration TEXT NOT NULL DEFAULT '',
  plays TEXT NOT NULL DEFAULT '',
  album TEXT NOT NULL DEFAULT '',
  spotify_embed TEXT NOT NULL DEFAULT '',
  spotify_link TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Lineup members
CREATE TABLE public.lineup_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT '',
  instrument TEXT NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Releases / Discography
CREATE TABLE public.releases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL DEFAULT '',
  type TEXT NOT NULL DEFAULT '',
  label TEXT NOT NULL DEFAULT '',
  tracks INT NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT false,
  link TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  description TEXT,
  stream_link TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Merch items
CREATE TABLE public.merch_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  link TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Shows
CREATE TABLE public.shows (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  image TEXT NOT NULL DEFAULT '',
  url TEXT NOT NULL DEFAULT '',
  title TEXT NOT NULL,
  bands TEXT NOT NULL DEFAULT '',
  date TIMESTAMPTZ NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  tickets_url TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Featured items
CREATE TABLE public.featured_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL DEFAULT '',
  tag TEXT NOT NULL DEFAULT '',
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  link TEXT NOT NULL DEFAULT '',
  date TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Contact info (single row)
CREATE TABLE public.contact_info (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Social links (single row)
CREATE TABLE public.social_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  instagram TEXT NOT NULL DEFAULT '',
  facebook TEXT NOT NULL DEFAULT '',
  youtube TEXT NOT NULL DEFAULT '',
  spotify TEXT NOT NULL DEFAULT '',
  apple_music TEXT NOT NULL DEFAULT '',
  bandcamp TEXT NOT NULL DEFAULT '',
  tiktok TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Media links (single row)
CREATE TABLE public.media_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  press_kit TEXT NOT NULL DEFAULT '',
  logo_pack TEXT NOT NULL DEFAULT '',
  all_photos TEXT NOT NULL DEFAULT '',
  epk_zip TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bio_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.songs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lineup_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.releases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.merch_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.featured_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_links ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read access" ON public.hero_content FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.bio_content FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.songs FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.lineup_members FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.releases FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.merch_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.shows FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.featured_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.contact_info FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.social_links FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.media_links FOR SELECT USING (true);

-- Authenticated write access for admin
CREATE POLICY "Auth write access" ON public.hero_content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.bio_content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.songs FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.lineup_members FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.releases FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.merch_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.shows FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.featured_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.contact_info FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.social_links FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth write access" ON public.media_links FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Update timestamp trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_hero_content_updated_at BEFORE UPDATE ON public.hero_content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_bio_content_updated_at BEFORE UPDATE ON public.bio_content FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_songs_updated_at BEFORE UPDATE ON public.songs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_lineup_members_updated_at BEFORE UPDATE ON public.lineup_members FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_releases_updated_at BEFORE UPDATE ON public.releases FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_merch_items_updated_at BEFORE UPDATE ON public.merch_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_shows_updated_at BEFORE UPDATE ON public.shows FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_featured_items_updated_at BEFORE UPDATE ON public.featured_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_contact_info_updated_at BEFORE UPDATE ON public.contact_info FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_social_links_updated_at BEFORE UPDATE ON public.social_links FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_media_links_updated_at BEFORE UPDATE ON public.media_links FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
