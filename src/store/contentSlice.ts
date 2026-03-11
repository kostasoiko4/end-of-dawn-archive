import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// ─── Types ───────────────────────────────────────────────────
export interface HeroContent {
  subtitle: string;
  listenNowLabel: string;
  showsLabel: string;
}

export interface BioContent {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  quote: string;
}

export interface Song {
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
  name: string;
  role: string;
  instrument: string;
  bio: string;
  image: string;
}

export interface ReleaseItem {
  title: string;
  date: string;
  type: string;
  label: string;
  tracks: number;
  featured: boolean;
  link: string;
  image: string;
}

export interface MerchItem {
  name: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

export interface ShowItem {
  id: number;
  image: string;
  url: string;
  title: string;
  bands: string;
  date: string;
  location: string;
}

export interface FeaturedItem {
  id: number;
  type: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
  spotify: string;
  appleMusic: string;
  bandcamp: string;
  tiktok: string;
}

export interface MediaLinks {
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

// ─── Initial State (current website defaults) ────────────────
const initialState: ContentState = {
  hero: {
    subtitle: 'Symphonic / Gothic Black Metal from Thessaloniki, Greece',
    listenNowLabel: 'Listen Now',
    showsLabel: 'Upcoming Shows',
  },
  bio: {
    paragraph1: 'End of Dawn is a Symphonic/Gothic Black Metal band from Thessaloniki, Greece, formed in 2019. Rooted in a dark and atmospheric musical style, the band crafts intricate compositions that delve into themes of struggle, loss, and existential depths.',
    paragraph2: 'Their debut album, Primordial Darkness, released on November 15, 2024, features 11 haunting tracks that take listeners on a harrowing journey into the shadows of the soul. With its evocative blend of rapid, powerful riffs and symphonic textures, the album draws upon mythological and existential themes, creating an immersive and deeply resonant soundscape.',
    paragraph3: 'Driven by an unwavering dedication to their art, End of Dawn embraces the raw emotions and stark beauty found within the abyss. As they continue to forge their path, the band remains steadfast in pushing the boundaries of their sound, exploring the profound and the unknown.',
    quote: 'From the ashes of silence, we rise to orchestrate the symphony of eternal night.',
  },
  songs: [
    { title: 'Burning Echoes', duration: '6:34', plays: '3.2K', album: 'Primordial Darkness', spotifyEmbed: 'https://open.spotify.com/embed/track/2uXsPSS3GOSHXS3gdTfY4t?utm_source=generator&theme=0', spotifyLink: 'https://open.spotify.com/track/2uXsPSS3GOSHXS3gdTfY4t' },
    { title: 'Dawn of Decay', duration: '5:15', plays: '1.5K', album: 'Primordial Darkness', spotifyEmbed: 'https://open.spotify.com/embed/track/0zrgJ7JtlXC7yrRzdx4EVH?utm_source=generator&theme=0', spotifyLink: 'https://open.spotify.com/track/0zrgJ7JtlXC7yrRzdx4EVH' },
    { title: 'The Great Epilogue', duration: '5:10', plays: '1K', album: 'Primordial Darkness', spotifyEmbed: 'https://open.spotify.com/embed/track/3VXVxmrCv30tX9wULttpOs?utm_source=generator&theme=0', spotifyLink: 'https://open.spotify.com/track/3VXVxmrCv30tX9wULttpOs' },
  ],
  videos: [],
  lineup: [
    { name: 'Necro', role: 'Vocals', instrument: 'Screams & Growls', bio: 'The embodiment of primordial fury.', image: '' },
    { name: 'Mynoghra', role: 'Vocals', instrument: 'Screams & Operatic Vocals', bio: 'The haunting voice that channels the darkness.', image: '' },
    { name: 'Absence', role: 'Guitar', instrument: 'Leads & Melodies', bio: 'Crafting melodies from the depths of shadow.', image: '' },
    { name: 'Gravekeeper', role: 'Guitar', instrument: 'Rythm & Riffs', bio: 'The sonic foundation of eternal night.', image: '' },
    { name: 'Necrohymn', role: 'Bass', instrument: 'Bass Guitar', bio: 'Thunderous depths that shake the earth.', image: '' },
    { name: 'Akhenaten', role: 'Keyboards', instrument: 'Synths & Orchestration', bio: 'Weaving symphonic darkness through keys.', image: '' },
    { name: 'YB', role: 'Drums', instrument: 'Drums & Percussion', bio: 'The relentless heartbeat of chaos.', image: '' },
  ],
  releases: [
    { title: 'Primordial Darkness', date: '15 / 11 / 2024', type: 'Full Length', label: 'WormHoleDeath', tracks: 11, featured: true, link: 'https://endofdawn.bandcamp.com/album/primordial-darkness', image: '' },
    { title: 'Shadow', date: '18 / 10 / 2024', type: 'Single', label: 'Independent', tracks: 1, featured: false, link: 'https://endofdawn.bandcamp.com/track/shadow', image: '' },
  ],
  merch: [
    { name: 'End of Dawn - Official T-shirt', price: '€12', image: '', category: 'Apparel', link: 'https://endofdawn.bandcamp.com/merch/end-of-dawn-official-t-shirt' },
    { name: 'End of Dawn - Primordial Darkness Official T-shirt', price: '€15', image: '', category: 'Apparel', link: 'https://endofdawn.bandcamp.com/merch/end-of-dawn-primordial-darkness-official-t-shirt' },
    { name: 'End of Dawn - Primordial Darkness CD', price: '€10', image: '', category: 'Music', link: 'https://endofdawn.bandcamp.com/album/primordial-darkness' },
    { name: 'Bundle Edition: T-shirt + Album CD (Primordial Darkness)', price: '€20', image: '', category: 'Bundle', link: 'https://endofdawn.bandcamp.com/merch/bundle-edition-t-shirt-primordial-darkness-album-cd-primordial-darkness' },
  ],
  shows: [],
  featured: [],
  contact: {
    email: 'endofdawn.bandofficial@gmail.com',
    phone: '+30 6981777403',
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/endofdawnofficial/',
    facebook: 'https://www.facebook.com/endofdawnofficial/',
    youtube: 'https://www.youtube.com/@EndofDawn.official',
    spotify: 'https://open.spotify.com/artist/03GS0Jd0J7nEJv1Ra3idkS',
    appleMusic: 'https://music.apple.com/us/artist/end-of-dawn/1738951985',
    bandcamp: 'https://endofdawn.bandcamp.com/',
    tiktok: '',
  },
  mediaLinks: {
    pressKit: 'https://drive.usercontent.google.com/u/0/uc?id=1M2Vx_DuD_pT2YujZk1VZWisZWAolzWvK&export=download',
    logoPack: 'https://drive.usercontent.google.com/u/0/uc?id=1s52JA6e-dmQrjFXvS8nxGpM_gu0WPfph&export=download',
    allPhotos: 'https://drive.usercontent.google.com/u/0/uc?id=1StHabcDGWkaEuTxpzfxu5COSnOX4GlcT&export=download',
    epkZip: 'https://drive.usercontent.google.com/u/0/uc?id=19sfIw_FdGT2vMclrvj0PocNePO4ydKhA&export=download',
  },
  loading: false,
  error: null,
};

// ─── Async Thunks (prepared for future API integration) ──────
export const fetchContent = createAsyncThunk('content/fetchAll', async (_, { rejectWithValue }) => {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/content');
    // return await response.json();
    return initialState; // Return defaults for now
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateHero = createAsyncThunk('content/updateHero', async (data: HeroContent, { rejectWithValue }) => {
  try {
    // TODO: Replace with actual API call
    // await fetch('/api/content/hero', { method: 'PUT', body: JSON.stringify(data) });
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateBio = createAsyncThunk('content/updateBio', async (data: BioContent, { rejectWithValue }) => {
  try {
    // TODO: await fetch('/api/content/bio', { method: 'PUT', body: JSON.stringify(data) });
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateSongs = createAsyncThunk('content/updateSongs', async (data: Song[], { rejectWithValue }) => {
  try {
    // TODO: await fetch('/api/content/songs', { method: 'PUT', body: JSON.stringify(data) });
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateLineup = createAsyncThunk('content/updateLineup', async (data: MemberItem[], { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateReleases = createAsyncThunk('content/updateReleases', async (data: ReleaseItem[], { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateMerch = createAsyncThunk('content/updateMerch', async (data: MerchItem[], { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateShows = createAsyncThunk('content/updateShows', async (data: ShowItem[], { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateFeatured = createAsyncThunk('content/updateFeatured', async (data: FeaturedItem[], { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateContact = createAsyncThunk('content/updateContact', async (data: ContactInfo, { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateSocialLinks = createAsyncThunk('content/updateSocialLinks', async (data: SocialLinks, { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const updateMediaLinks = createAsyncThunk('content/updateMediaLinks', async (data: MediaLinks, { rejectWithValue }) => {
  try {
    return data;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

// ─── Slice ───────────────────────────────────────────────────
const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setHero(state, action: PayloadAction<HeroContent>) { state.hero = action.payload; },
    setBio(state, action: PayloadAction<BioContent>) { state.bio = action.payload; },
    setSongs(state, action: PayloadAction<Song[]>) { state.songs = action.payload; },
    setVideos(state, action: PayloadAction<VideoItem[]>) { state.videos = action.payload; },
    setLineup(state, action: PayloadAction<MemberItem[]>) { state.lineup = action.payload; },
    setReleases(state, action: PayloadAction<ReleaseItem[]>) { state.releases = action.payload; },
    setMerch(state, action: PayloadAction<MerchItem[]>) { state.merch = action.payload; },
    setShows(state, action: PayloadAction<ShowItem[]>) { state.shows = action.payload; },
    setFeatured(state, action: PayloadAction<FeaturedItem[]>) { state.featured = action.payload; },
    setContact(state, action: PayloadAction<ContactInfo>) { state.contact = action.payload; },
    setSocialLinks(state, action: PayloadAction<SocialLinks>) { state.socialLinks = action.payload; },
    setMediaLinks(state, action: PayloadAction<MediaLinks>) { state.mediaLinks = action.payload; },
  },
  extraReducers: (builder) => {
    // fetchContent
    builder.addCase(fetchContent.pending, (state) => { state.loading = true; state.error = null; });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.loading = false;
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchContent.rejected, (state, action) => { state.loading = false; state.error = action.payload as string; });

    // Individual updates
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

export const {
  setHero, setBio, setSongs, setVideos, setLineup, setReleases,
  setMerch, setShows, setFeatured, setContact, setSocialLinks, setMediaLinks,
} = contentSlice.actions;

export default contentSlice.reducer;
