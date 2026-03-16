import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '@/integrations/supabase/client';

// ─── Types ───────────────────────────────────────────────────
export interface HeroContent {
  id?: string;
  subtitle: string;
  listenNowLabel: string;
  showsLabel: string;
}

export interface BioContent {
  id?: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  quote: string;
}

export interface Song {
  id?: string;
  title: string;
  duration: string;
  plays: string;
  album: string;
  spotifyEmbed: string;
  spotifyLink: string;
}

export interface VideoItem {
  title: string;
  url: string;
}

export interface MemberItem {
  id?: string;
  name: string;
  role: string;
  instrument: string;
  bio: string;
  image: string;
}

export interface ReleaseItem {
  id?: string;
  title: string;
  date: string;
  type: string;
  label: string;
  tracks: number;
  featured: boolean;
  link: string;
  image: string;
  description?: string;
  streamLink?: string;
}

export interface MerchItem {
  id?: string;
  name: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

export interface ShowItem {
  id: string;
  image: string;
  url: string;
  title: string;
  bands: string;
  date: string;
  location: string;
  ticketsUrl?: string;
}

export interface FeaturedItem {
  id: string;
  type: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

export interface ContactInfo {
  id?: string;
  email: string;
  phone: string;
}

export interface SocialLinks {
  id?: string;
  instagram: string;
  facebook: string;
  youtube: string;
  spotify: string;
  appleMusic: string;
  bandcamp: string;
  tiktok: string;
}

export interface MediaLinks {
  id?: string;
  pressKit: string;
  logoPack: string;
  allPhotos: string;
  epkZip: string;
}

export interface ContentState {
  hero: HeroContent;
  bio: BioContent;
  songs: Song[];
  videos: VideoItem[];
  lineup: MemberItem[];
  releases: ReleaseItem[];
  merch: MerchItem[];
  shows: ShowItem[];
  featured: FeaturedItem[];
  contact: ContactInfo;
  socialLinks: SocialLinks;
  mediaLinks: MediaLinks;
  loading: boolean;
  error: string | null;
}

// ─── Defaults ────────────────────────────────────────────────
const defaultHero: HeroContent = { subtitle: '', listenNowLabel: 'Listen Now', showsLabel: 'Upcoming Shows' };
const defaultBio: BioContent = { paragraph1: '', paragraph2: '', paragraph3: '', quote: '' };
const defaultContact: ContactInfo = { email: '', phone: '' };
const defaultSocialLinks: SocialLinks = { instagram: '', facebook: '', youtube: '', spotify: '', appleMusic: '', bandcamp: '', tiktok: '' };
const defaultMediaLinks: MediaLinks = { pressKit: '', logoPack: '', allPhotos: '', epkZip: '' };

const initialState: ContentState = {
  hero: defaultHero,
  bio: defaultBio,
  songs: [],
  videos: [],
  lineup: [],
  releases: [],
  merch: [],
  shows: [],
  featured: [],
  contact: defaultContact,
  socialLinks: defaultSocialLinks,
  mediaLinks: defaultMediaLinks,
  loading: false,
  error: null,
};

// ─── Helpers: DB row <-> App model mapping ───────────────────
const mapHeroFromDb = (row: any): HeroContent => ({
  id: row.id,
  subtitle: row.subtitle,
  listenNowLabel: row.listen_now_label,
  showsLabel: row.shows_label,
});

const mapSongFromDb = (row: any): Song => ({
  id: row.id,
  title: row.title,
  duration: row.duration,
  plays: row.plays,
  album: row.album,
  spotifyEmbed: row.spotify_embed,
  spotifyLink: row.spotify_link,
});

const mapMemberFromDb = (row: any): MemberItem => ({
  id: row.id,
  name: row.name,
  role: row.role,
  instrument: row.instrument,
  bio: row.bio,
  image: row.image,
});

const mapReleaseFromDb = (row: any): ReleaseItem => ({
  id: row.id,
  title: row.title,
  date: row.date,
  type: row.type,
  label: row.label,
  tracks: row.tracks,
  featured: row.featured,
  link: row.link,
  image: row.image,
  description: row.description,
  streamLink: row.stream_link,
});

const mapMerchFromDb = (row: any): MerchItem => ({
  id: row.id,
  name: row.name,
  price: row.price,
  image: row.image,
  category: row.category,
  link: row.link,
});

const mapShowFromDb = (row: any): ShowItem => ({
  id: row.id,
  image: row.image,
  url: row.url,
  title: row.title,
  bands: row.bands,
  date: row.date,
  location: row.location,
  ticketsUrl: row.tickets_url,
});

const mapFeaturedFromDb = (row: any): FeaturedItem => ({
  id: row.id,
  type: row.type,
  tag: row.tag,
  title: row.title,
  description: row.description,
  image: row.image,
  link: row.link,
  date: row.date,
});

const mapSocialFromDb = (row: any): SocialLinks => ({
  id: row.id,
  instagram: row.instagram,
  facebook: row.facebook,
  youtube: row.youtube,
  spotify: row.spotify,
  appleMusic: row.apple_music,
  bandcamp: row.bandcamp,
  tiktok: row.tiktok,
});

const mapMediaFromDb = (row: any): MediaLinks => ({
  id: row.id,
  pressKit: row.press_kit,
  logoPack: row.logo_pack,
  allPhotos: row.all_photos,
  epkZip: row.epk_zip,
});

// ─── Fetch all content from Supabase ─────────────────────────
export const fetchContent = createAsyncThunk('content/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const [heroRes, bioRes, songsRes, lineupRes, releasesRes, merchRes, showsRes, featuredRes, contactRes, socialRes, mediaRes] = await Promise.all([
      supabase.from('hero_content').select('*').limit(1).maybeSingle(),
      supabase.from('bio_content').select('*').limit(1).maybeSingle(),
      supabase.from('songs').select('*').order('sort_order'),
      supabase.from('lineup_members').select('*').order('sort_order'),
      supabase.from('releases').select('*').order('sort_order'),
      supabase.from('merch_items').select('*').order('sort_order'),
      supabase.from('shows').select('*').order('date', { ascending: true }),
      supabase.from('featured_items').select('*').order('sort_order'),
      supabase.from('contact_info').select('*').limit(1).maybeSingle(),
      supabase.from('social_links').select('*').limit(1).maybeSingle(),
      supabase.from('media_links').select('*').limit(1).maybeSingle(),
    ]);

    return {
      hero: heroRes.data ? mapHeroFromDb(heroRes.data) : defaultHero,
      bio: bioRes.data ? { id: bioRes.data.id, paragraph1: bioRes.data.paragraph1, paragraph2: bioRes.data.paragraph2, paragraph3: bioRes.data.paragraph3, quote: bioRes.data.quote } : defaultBio,
      songs: (songsRes.data || []).map(mapSongFromDb),
      lineup: (lineupRes.data || []).map(mapMemberFromDb),
      releases: (releasesRes.data || []).map(mapReleaseFromDb),
      merch: (merchRes.data || []).map(mapMerchFromDb),
      shows: (showsRes.data || []).map(mapShowFromDb),
      featured: (featuredRes.data || []).map(mapFeaturedFromDb),
      contact: contactRes.data ? { id: contactRes.data.id, email: contactRes.data.email, phone: contactRes.data.phone } : defaultContact,
      socialLinks: socialRes.data ? mapSocialFromDb(socialRes.data) : defaultSocialLinks,
      mediaLinks: mediaRes.data ? mapMediaFromDb(mediaRes.data) : defaultMediaLinks,
    };
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

// ─── Update thunks (upsert single-row tables, replace arrays) ─
export const updateHero = createAsyncThunk('content/updateHero', async (data: HeroContent, { rejectWithValue }) => {
  try {
    const payload = { subtitle: data.subtitle, listen_now_label: data.listenNowLabel, shows_label: data.showsLabel };
    if (data.id) {
      const { error } = await supabase.from('hero_content').update(payload).eq('id', data.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('hero_content').insert(payload);
      if (error) throw error;
    }
    const { data: row } = await supabase.from('hero_content').select('*').limit(1).maybeSingle();
    return row ? mapHeroFromDb(row) : data;
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateBio = createAsyncThunk('content/updateBio', async (data: BioContent, { rejectWithValue }) => {
  try {
    const payload = { paragraph1: data.paragraph1, paragraph2: data.paragraph2, paragraph3: data.paragraph3, quote: data.quote };
    if (data.id) {
      const { error } = await supabase.from('bio_content').update(payload).eq('id', data.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('bio_content').insert(payload);
      if (error) throw error;
    }
    const { data: row } = await supabase.from('bio_content').select('*').limit(1).maybeSingle();
    return row ? { id: row.id, paragraph1: row.paragraph1, paragraph2: row.paragraph2, paragraph3: row.paragraph3, quote: row.quote } as BioContent : data;
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateSongs = createAsyncThunk('content/updateSongs', async (data: Song[], { rejectWithValue }) => {
  try {
    // Delete all then re-insert
    await supabase.from('songs').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    const rows = data.map((s, i) => ({
      title: s.title, duration: s.duration, plays: s.plays, album: s.album,
      spotify_embed: s.spotifyEmbed, spotify_link: s.spotifyLink, sort_order: i,
    }));
    if (rows.length) {
      const { error } = await supabase.from('songs').insert(rows);
      if (error) throw error;
    }
    const { data: result } = await supabase.from('songs').select('*').order('sort_order');
    return (result || []).map(mapSongFromDb);
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateLineup = createAsyncThunk('content/updateLineup', async (data: MemberItem[], { rejectWithValue }) => {
  try {
    await supabase.from('lineup_members').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    const rows = data.map((m, i) => ({
      name: m.name, role: m.role, instrument: m.instrument, bio: m.bio, image: m.image, sort_order: i,
    }));
    if (rows.length) {
      const { error } = await supabase.from('lineup_members').insert(rows);
      if (error) throw error;
    }
    const { data: result } = await supabase.from('lineup_members').select('*').order('sort_order');
    return (result || []).map(mapMemberFromDb);
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateReleases = createAsyncThunk('content/updateReleases', async (data: ReleaseItem[], { rejectWithValue }) => {
  try {
    await supabase.from('releases').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    const rows = data.map((r, i) => ({
      title: r.title, date: r.date, type: r.type, label: r.label, tracks: r.tracks,
      featured: r.featured, link: r.link, image: r.image, description: r.description || null,
      stream_link: r.streamLink || null, sort_order: i,
    }));
    if (rows.length) {
      const { error } = await supabase.from('releases').insert(rows);
      if (error) throw error;
    }
    const { data: result } = await supabase.from('releases').select('*').order('sort_order');
    return (result || []).map(mapReleaseFromDb);
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateMerch = createAsyncThunk('content/updateMerch', async (data: MerchItem[], { rejectWithValue }) => {
  try {
    await supabase.from('merch_items').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    const rows = data.map((m, i) => ({
      name: m.name, price: m.price, image: m.image, category: m.category, link: m.link, sort_order: i,
    }));
    if (rows.length) {
      const { error } = await supabase.from('merch_items').insert(rows);
      if (error) throw error;
    }
    const { data: result } = await supabase.from('merch_items').select('*').order('sort_order');
    return (result || []).map(mapMerchFromDb);
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateShows = createAsyncThunk('content/updateShows', async (data: ShowItem[], { rejectWithValue }) => {
  try {
    await supabase.from('shows').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    const rows = data.map((s, i) => ({
      image: s.image, url: s.url, title: s.title, bands: s.bands,
      date: s.date, location: s.location, tickets_url: s.ticketsUrl || null, sort_order: i,
    }));
    if (rows.length) {
      const { error } = await supabase.from('shows').insert(rows);
      if (error) throw error;
    }
    const { data: result } = await supabase.from('shows').select('*').order('date');
    return (result || []).map(mapShowFromDb);
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateFeatured = createAsyncThunk('content/updateFeatured', async (data: FeaturedItem[], { rejectWithValue }) => {
  try {
    await supabase.from('featured_items').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    const rows = data.map((f, i) => ({
      type: f.type, tag: f.tag, title: f.title, description: f.description,
      image: f.image, link: f.link, date: f.date, sort_order: i,
    }));
    if (rows.length) {
      const { error } = await supabase.from('featured_items').insert(rows);
      if (error) throw error;
    }
    const { data: result } = await supabase.from('featured_items').select('*').order('sort_order');
    return (result || []).map(mapFeaturedFromDb);
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateContact = createAsyncThunk('content/updateContact', async (data: ContactInfo, { rejectWithValue }) => {
  try {
    const payload = { email: data.email, phone: data.phone };
    if (data.id) {
      const { error } = await supabase.from('contact_info').update(payload).eq('id', data.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('contact_info').insert(payload);
      if (error) throw error;
    }
    const { data: row } = await supabase.from('contact_info').select('*').limit(1).maybeSingle();
    return row ? { id: row.id, email: row.email, phone: row.phone } as ContactInfo : data;
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateSocialLinks = createAsyncThunk('content/updateSocialLinks', async (data: SocialLinks, { rejectWithValue }) => {
  try {
    const payload = {
      instagram: data.instagram, facebook: data.facebook, youtube: data.youtube,
      spotify: data.spotify, apple_music: data.appleMusic, bandcamp: data.bandcamp, tiktok: data.tiktok,
    };
    if (data.id) {
      const { error } = await supabase.from('social_links').update(payload).eq('id', data.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('social_links').insert(payload);
      if (error) throw error;
    }
    const { data: row } = await supabase.from('social_links').select('*').limit(1).maybeSingle();
    return row ? mapSocialFromDb(row) : data;
  } catch (err: any) { return rejectWithValue(err.message); }
});

export const updateMediaLinks = createAsyncThunk('content/updateMediaLinks', async (data: MediaLinks, { rejectWithValue }) => {
  try {
    const payload = { press_kit: data.pressKit, logo_pack: data.logoPack, all_photos: data.allPhotos, epk_zip: data.epkZip };
    if (data.id) {
      const { error } = await supabase.from('media_links').update(payload).eq('id', data.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from('media_links').insert(payload);
      if (error) throw error;
    }
    const { data: row } = await supabase.from('media_links').select('*').limit(1).maybeSingle();
    return row ? mapMediaFromDb(row) : data;
  } catch (err: any) { return rejectWithValue(err.message); }
});

// ─── Slice ───────────────────────────────────────────────────
const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setVideos(state, action: PayloadAction<VideoItem[]>) { state.videos = action.payload; },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => { state.loading = true; state.error = null; });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.loading = false;
      state.hero = action.payload.hero;
      state.bio = action.payload.bio;
      state.songs = action.payload.songs;
      state.lineup = action.payload.lineup;
      state.releases = action.payload.releases;
      state.merch = action.payload.merch;
      state.shows = action.payload.shows;
      state.featured = action.payload.featured;
      state.contact = action.payload.contact;
      state.socialLinks = action.payload.socialLinks;
      state.mediaLinks = action.payload.mediaLinks;
    });
    builder.addCase(fetchContent.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; });

    builder.addCase(updateHero.fulfilled, (state, action) => { state.hero = action.payload; });
    builder.addCase(updateBio.fulfilled, (state, action) => { state.bio = action.payload; });
    builder.addCase(updateSongs.fulfilled, (state, action) => { state.songs = action.payload; });
    builder.addCase(updateLineup.fulfilled, (state, action) => { state.lineup = action.payload; });
    builder.addCase(updateReleases.fulfilled, (state, action) => { state.releases = action.payload; });
    builder.addCase(updateMerch.fulfilled, (state, action) => { state.merch = action.payload; });
    builder.addCase(updateShows.fulfilled, (state, action) => { state.shows = action.payload; });
    builder.addCase(updateFeatured.fulfilled, (state, action) => { state.featured = action.payload; });
    builder.addCase(updateContact.fulfilled, (state, action) => { state.contact = action.payload; });
    builder.addCase(updateSocialLinks.fulfilled, (state, action) => { state.socialLinks = action.payload; });
    builder.addCase(updateMediaLinks.fulfilled, (state, action) => { state.mediaLinks = action.payload; });
  },
});

export const { setVideos } = contentSlice.actions;
export default contentSlice.reducer;
