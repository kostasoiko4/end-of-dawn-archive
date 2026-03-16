import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, logoutAdmin } from '@/store/authSlice';
import type { AppDispatch, RootState } from '@/store';
import {
  updateHero, updateBio, updateSongs, updateLineup, updateReleases,
  updateMerch, updateShows, updateFeatured, updateContact, updateSocialLinks, updateMediaLinks,
  type HeroContent, type BioContent, type Song, type MemberItem, type ReleaseItem,
  type MerchItem, type ShowItem, type FeaturedItem, type ContactInfo, type SocialLinks, type MediaLinks,
} from '@/store/contentSlice';
import {
  LogOut, Home, Music, BookOpen, Users, Disc, ShoppingBag, Calendar,
  Star, Mail, Share2, Download, Save, Plus, Trash2, ChevronDown, ChevronUp,
} from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/band/logo.svg';

type Tab = 'hero' | 'bio' | 'songs' | 'lineup' | 'releases' | 'merch' | 'shows' | 'featured' | 'contact' | 'social' | 'media';

const tabs: { id: Tab; label: string; icon: any }[] = [
  { id: 'hero', label: 'Hero', icon: Home },
  { id: 'bio', label: 'Bio', icon: BookOpen },
  { id: 'songs', label: 'Top Songs', icon: Music },
  { id: 'lineup', label: 'Lineup', icon: Users },
  { id: 'releases', label: 'Discography', icon: Disc },
  { id: 'merch', label: 'Merchandise', icon: ShoppingBag },
  { id: 'shows', label: 'Shows', icon: Calendar },
  { id: 'featured', label: 'Featured', icon: Star },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'social', label: 'Social Links', icon: Share2 },
  { id: 'media', label: 'Media Links', icon: Download },
];

// ─── Reusable input ──────────────────────────────────────────
const Field = ({ label, value, onChange, type = 'text', rows }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; rows?: number;
}) => (
  <div className="space-y-1">
    <label className="text-xs font-cinzel text-silver/70 tracking-wider uppercase">{label}</label>
    {rows ? (
      <textarea rows={rows} value={value} onChange={e => onChange(e.target.value)} className="input-gothic resize-none text-sm" />
    ) : (
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="input-gothic text-sm" />
    )}
  </div>
);

// ─── Collapsible card wrapper ────────────────────────────────
const ItemCard = ({ title, onRemove, children }: { title: string; onRemove?: () => void; children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="card-gothic p-4 space-y-3">
      <div className="flex items-center justify-between">
        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-silver font-cinzel text-sm tracking-wider">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {title}
        </button>
        {onRemove && (
          <button onClick={onRemove} className="text-destructive/70 hover:text-destructive transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
      {open && <div className="space-y-3 pt-2">{children}</div>}
    </div>
  );
};

// ─── Main Dashboard ──────────────────────────────────────────
const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const content = useSelector((state: RootState) => state.content);
  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Local form state mirrors
  const [hero, setHero] = useState<HeroContent>(content.hero);
  const [bio, setBio] = useState<BioContent>(content.bio);
  const [songs, setSongs] = useState<Song[]>(content.songs);
  const [lineup, setLineup] = useState<MemberItem[]>(content.lineup);
  const [releases, setReleases] = useState<ReleaseItem[]>(content.releases);
  const [merch, setMerch] = useState<MerchItem[]>(content.merch);
  const [shows, setShows] = useState<ShowItem[]>(content.shows);
  const [featured, setFeatured] = useState<FeaturedItem[]>(content.featured);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(content.contact);
  const [socialLinks, setSocialLinksState] = useState<SocialLinks>(content.socialLinks);
  const [mediaLinks, setMediaLinksState] = useState<MediaLinks>(content.mediaLinks);

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, navigate]);

  const handleSave = () => {
    switch (activeTab) {
      case 'hero': dispatch(updateHero(hero)); break;
      case 'bio': dispatch(updateBio(bio)); break;
      case 'songs': dispatch(updateSongs(songs)); break;
      case 'lineup': dispatch(updateLineup(lineup)); break;
      case 'releases': dispatch(updateReleases(releases)); break;
      case 'merch': dispatch(updateMerch(merch)); break;
      case 'shows': dispatch(updateShows(shows)); break;
      case 'featured': dispatch(updateFeatured(featured)); break;
      case 'contact': dispatch(updateContact(contactInfo)); break;
      case 'social': dispatch(updateSocialLinks(socialLinks)); break;
      case 'media': dispatch(updateMediaLinks(mediaLinks)); break;
    }
    toast.success(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} saved successfully`);
  };

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate('/admin/login');
  };

  // Array item helpers
  const updateSong = (i: number, field: keyof Song, value: string) => {
    const arr = [...songs]; arr[i] = { ...arr[i], [field]: value }; setSongs(arr);
  };
  const updateMember = (i: number, field: keyof MemberItem, value: string) => {
    const arr = [...lineup]; arr[i] = { ...arr[i], [field]: value }; setLineup(arr);
  };
  const updateRelease = (i: number, field: keyof ReleaseItem, value: string | number | boolean) => {
    const arr = [...releases]; arr[i] = { ...arr[i], [field]: value as any }; setReleases(arr);
  };
  const updateMerchItem = (i: number, field: keyof MerchItem, value: string) => {
    const arr = [...merch]; arr[i] = { ...arr[i], [field]: value }; setMerch(arr);
  };
  const updateShow = (i: number, field: keyof ShowItem, value: string) => {
    const arr = [...shows]; arr[i] = { ...arr[i], [field]: value } as any; setShows(arr);
  };
  const updateFeaturedItem = (i: number, field: keyof FeaturedItem, value: string) => {
    const arr = [...featured]; arr[i] = { ...arr[i], [field]: value } as any; setFeatured(arr);
  };

  if (!isAuthenticated) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'hero':
        return (
          <div className="space-y-4">
            <Field label="Subtitle" value={hero.subtitle} onChange={v => setHero({ ...hero, subtitle: v })} />
            <Field label="Listen Now Button Label" value={hero.listenNowLabel} onChange={v => setHero({ ...hero, listenNowLabel: v })} />
            <Field label="Shows Button Label" value={hero.showsLabel} onChange={v => setHero({ ...hero, showsLabel: v })} />
          </div>
        );

      case 'bio':
        return (
          <div className="space-y-4">
            <Field label="Paragraph 1" value={bio.paragraph1} onChange={v => setBio({ ...bio, paragraph1: v })} rows={4} />
            <Field label="Paragraph 2" value={bio.paragraph2} onChange={v => setBio({ ...bio, paragraph2: v })} rows={4} />
            <Field label="Paragraph 3" value={bio.paragraph3} onChange={v => setBio({ ...bio, paragraph3: v })} rows={4} />
            <Field label="Quote" value={bio.quote} onChange={v => setBio({ ...bio, quote: v })} />
          </div>
        );

      case 'songs':
        return (
          <div className="space-y-4">
            {songs.map((song, i) => (
              <ItemCard key={i} title={song.title || `Song ${i + 1}`} onRemove={() => setSongs(songs.filter((_, j) => j !== i))}>
                <Field label="Title" value={song.title} onChange={v => updateSong(i, 'title', v)} />
                <Field label="Duration" value={song.duration} onChange={v => updateSong(i, 'duration', v)} />
                <Field label="Plays" value={song.plays} onChange={v => updateSong(i, 'plays', v)} />
                <Field label="Album" value={song.album} onChange={v => updateSong(i, 'album', v)} />
                <Field label="Spotify Embed URL" value={song.spotifyEmbed} onChange={v => updateSong(i, 'spotifyEmbed', v)} />
                <Field label="Spotify Link" value={song.spotifyLink} onChange={v => updateSong(i, 'spotifyLink', v)} />
              </ItemCard>
            ))}
            <button onClick={() => setSongs([...songs, { title: '', duration: '', plays: '', album: '', spotifyEmbed: '', spotifyLink: '' }])} className="btn-outline-gothic text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Song
            </button>
          </div>
        );

      case 'lineup':
        return (
          <div className="space-y-4">
            {lineup.map((member, i) => (
              <ItemCard key={i} title={member.name || `Member ${i + 1}`} onRemove={() => setLineup(lineup.filter((_, j) => j !== i))}>
                <Field label="Name" value={member.name} onChange={v => updateMember(i, 'name', v)} />
                <Field label="Role" value={member.role} onChange={v => updateMember(i, 'role', v)} />
                <Field label="Instrument" value={member.instrument} onChange={v => updateMember(i, 'instrument', v)} />
                <Field label="Bio" value={member.bio} onChange={v => updateMember(i, 'bio', v)} />
                <Field label="Image URL" value={member.image} onChange={v => updateMember(i, 'image', v)} />
              </ItemCard>
            ))}
            <button onClick={() => setLineup([...lineup, { name: '', role: '', instrument: '', bio: '', image: '' }])} className="btn-outline-gothic text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Member
            </button>
          </div>
        );

      case 'releases':
        return (
          <div className="space-y-4">
            {releases.map((release, i) => (
              <ItemCard key={i} title={release.title || `Release ${i + 1}`} onRemove={() => setReleases(releases.filter((_, j) => j !== i))}>
                <Field label="Title" value={release.title} onChange={v => updateRelease(i, 'title', v)} />
                <Field label="Date" value={release.date} onChange={v => updateRelease(i, 'date', v)} />
                <Field label="Type" value={release.type} onChange={v => updateRelease(i, 'type', v)} />
                <Field label="Label" value={release.label} onChange={v => updateRelease(i, 'label', v)} />
                <Field label="Tracks" value={String(release.tracks)} onChange={v => updateRelease(i, 'tracks', parseInt(v) || 0)} />
                <Field label="Link" value={release.link} onChange={v => updateRelease(i, 'link', v)} />
                <Field label="Image URL" value={release.image} onChange={v => updateRelease(i, 'image', v)} />
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={release.featured} onChange={e => updateRelease(i, 'featured', e.target.checked)} className="accent-primary" />
                  <span className="text-xs text-silver/70 font-cinzel">Featured</span>
                </div>
              </ItemCard>
            ))}
            <button onClick={() => setReleases([...releases, { title: '', date: '', type: '', label: '', tracks: 0, featured: false, link: '', image: '' }])} className="btn-outline-gothic text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Release
            </button>
          </div>
        );

      case 'merch':
        return (
          <div className="space-y-4">
            {merch.map((item, i) => (
              <ItemCard key={i} title={item.name || `Item ${i + 1}`} onRemove={() => setMerch(merch.filter((_, j) => j !== i))}>
                <Field label="Name" value={item.name} onChange={v => updateMerchItem(i, 'name', v)} />
                <Field label="Price" value={item.price} onChange={v => updateMerchItem(i, 'price', v)} />
                <Field label="Category" value={item.category} onChange={v => updateMerchItem(i, 'category', v)} />
                <Field label="Link" value={item.link} onChange={v => updateMerchItem(i, 'link', v)} />
                <Field label="Image URL" value={item.image} onChange={v => updateMerchItem(i, 'image', v)} />
              </ItemCard>
            ))}
            <button onClick={() => setMerch([...merch, { name: '', price: '', image: '', category: '', link: '' }])} className="btn-outline-gothic text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Merch Item
            </button>
          </div>
        );

      case 'shows':
        return (
          <div className="space-y-4">
            {shows.map((show, i) => (
              <ItemCard key={i} title={show.title || `Show ${i + 1}`} onRemove={() => setShows(shows.filter((_, j) => j !== i))}>
                <Field label="Title" value={show.title} onChange={v => updateShow(i, 'title', v)} />
                <Field label="Bands" value={show.bands} onChange={v => updateShow(i, 'bands', v)} />
                <Field label="Date" value={show.date} onChange={v => updateShow(i, 'date', v)} />
                <Field label="Location" value={show.location} onChange={v => updateShow(i, 'location', v)} />
                <Field label="Event URL" value={show.url} onChange={v => updateShow(i, 'url', v)} />
                <Field label="Image URL" value={show.image} onChange={v => updateShow(i, 'image', v)} />
              </ItemCard>
            ))}
            <button onClick={() => setShows([...shows, { id: Date.now(), image: '', url: '', title: '', bands: '', date: '', location: '' }])} className="btn-outline-gothic text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Show
            </button>
          </div>
        );

      case 'featured':
        return (
          <div className="space-y-4">
            {featured.map((item, i) => (
              <ItemCard key={i} title={item.title || `Item ${i + 1}`} onRemove={() => setFeatured(featured.filter((_, j) => j !== i))}>
                <Field label="Title" value={item.title} onChange={v => updateFeaturedItem(i, 'title', v)} />
                <Field label="Type" value={item.type} onChange={v => updateFeaturedItem(i, 'type', v)} />
                <Field label="Tag" value={item.tag} onChange={v => updateFeaturedItem(i, 'tag', v)} />
                <Field label="Description" value={item.description} onChange={v => updateFeaturedItem(i, 'description', v)} rows={3} />
                <Field label="Link" value={item.link} onChange={v => updateFeaturedItem(i, 'link', v)} />
                <Field label="Date" value={item.date} onChange={v => updateFeaturedItem(i, 'date', v)} />
                <Field label="Image URL" value={item.image} onChange={v => updateFeaturedItem(i, 'image', v)} />
              </ItemCard>
            ))}
            <button onClick={() => setFeatured([...featured, { id: Date.now(), type: '', tag: '', title: '', description: '', image: '', link: '', date: '' }])} className="btn-outline-gothic text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Featured Item
            </button>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <Field label="Email" value={contactInfo.email} onChange={v => setContactInfo({ ...contactInfo, email: v })} type="email" />
            <Field label="Phone" value={contactInfo.phone} onChange={v => setContactInfo({ ...contactInfo, phone: v })} />
          </div>
        );

      case 'social':
        return (
          <div className="space-y-4">
            <Field label="Instagram" value={socialLinks.instagram} onChange={v => setSocialLinksState({ ...socialLinks, instagram: v })} />
            <Field label="Facebook" value={socialLinks.facebook} onChange={v => setSocialLinksState({ ...socialLinks, facebook: v })} />
            <Field label="YouTube" value={socialLinks.youtube} onChange={v => setSocialLinksState({ ...socialLinks, youtube: v })} />
            <Field label="Spotify" value={socialLinks.spotify} onChange={v => setSocialLinksState({ ...socialLinks, spotify: v })} />
            <Field label="Apple Music" value={socialLinks.appleMusic} onChange={v => setSocialLinksState({ ...socialLinks, appleMusic: v })} />
            <Field label="Bandcamp" value={socialLinks.bandcamp} onChange={v => setSocialLinksState({ ...socialLinks, bandcamp: v })} />
            <Field label="TikTok" value={socialLinks.tiktok} onChange={v => setSocialLinksState({ ...socialLinks, tiktok: v })} />
          </div>
        );

      case 'media':
        return (
          <div className="space-y-4">
            <Field label="Press Kit URL" value={mediaLinks.pressKit} onChange={v => setMediaLinksState({ ...mediaLinks, pressKit: v })} />
            <Field label="Logo Pack URL" value={mediaLinks.logoPack} onChange={v => setMediaLinksState({ ...mediaLinks, logoPack: v })} />
            <Field label="All Photos URL" value={mediaLinks.allPhotos} onChange={v => setMediaLinksState({ ...mediaLinks, allPhotos: v })} />
            <Field label="EPK ZIP URL" value={mediaLinks.epkZip} onChange={v => setMediaLinksState({ ...mediaLinks, epkZip: v })} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-charcoal border-r border-silver/10 flex flex-col transition-all duration-300 flex-shrink-0`}>
        <div className="p-4 border-b border-silver/10 flex items-center gap-3">
          <img src={logo} alt="EOD" className="h-8 w-auto opacity-80" />
          {sidebarOpen && <span className="font-cinzel text-silver text-xs tracking-[0.2em] uppercase">Admin</span>}
        </div>

        <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-cinzel tracking-wider transition-colors ${
                  activeTab === tab.id ? 'bg-primary/20 text-primary border-r-2 border-primary' : 'text-silver/60 hover:text-silver hover:bg-charcoal-light'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {sidebarOpen && <span>{tab.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-silver/10 space-y-2">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-silver text-xs font-cinzel w-full text-left">
            {sidebarOpen ? '← Collapse' : '→'}
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 text-muted-foreground hover:text-destructive text-xs font-cinzel transition-colors w-full">
            <LogOut className="w-4 h-4" />
            {sidebarOpen && 'Logout'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-silver/10 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-cinzel text-silver text-lg tracking-wider">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-xs text-muted-foreground font-cormorant">Edit section content below</p>
          </div>
          <button onClick={handleSave} className="btn-gothic text-sm flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </header>

        <div className="p-8 max-w-3xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
