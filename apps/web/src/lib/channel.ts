import type { Video } from "./youtube";

/**
 * Hand picked content from the YouTube channel. The RSS feed only covers recent uploads (and is sometimes
 * down), so playlists, shorts and the most watched videos live here. Edit freely; ids come from the URLs.
 */

export const channelStats = [
  { value: "10K+", label: "YouTube subscribers" },
  { value: "700+", label: "videos uploaded" },
  { value: "800K+", label: "views on top clips" },
  { value: "14", label: "playlists to binge" },
];

/** Plays in the hero. A playlist keeps rolling into the next video. */
export const featuredPlaylist = { id: "PLDXJ-AS3XDHX23gcd7fwWvdE8QP30MbrR", title: "Lets Race" };

export type Playlist = { id: string; title: string; count: number; thumbId: string; blurb: string };

export const playlists: Playlist[] = [
  { id: "PLDXJ-AS3XDHX23gcd7fwWvdE8QP30MbrR", title: "Lets Race", count: 108, thumbId: "gnhpQo5yKCk", blurb: "Full online races and lobbies." },
  { id: "PLDXJ-AS3XDHW8YpPHATVLqq7g6FJQ7W-e", title: "Assetto Corsa", count: 83, thumbId: "3GHDCo5bqnk", blurb: "No Hesi, SRP, Nordschleife and more." },
  { id: "PLDXJ-AS3XDHVMPdm_Fk4xlXcAwYPPgtcj", title: "My Sim Racing Setup", count: 13, thumbId: "YdtGlCacoPk", blurb: "Wheel, pedals, shakers and wiring." },
  { id: "PLDXJ-AS3XDHVXix4wLPcd_DekufxaWa1M", title: "Forza Motorsport", count: 12, thumbId: "T1qIdZmkKgI", blurb: "Races and tunes in Forza." },
  { id: "PLDXJ-AS3XDHWypKvWPjSEpigYOnN8IifR", title: "Gaming", count: 105, thumbId: "03QjEDDlw6g", blurb: "Everything else I play." },
  { id: "PLDXJ-AS3XDHWC0Jrsh5gnU_zELagiJKI_", title: "Dirt Rally 2.0", count: 5, thumbId: "wZ6dgGLpbZE", blurb: "Gravel, snow and a lot of trees." },
  { id: "PLDXJ-AS3XDHUjjwHnjnLa3eAl84sRZ9Gu", title: "Trak Racer TR160S Assembly", count: 2, thumbId: "Ye3Nj6x0GJI", blurb: "Building the cockpit, step by step." },
  { id: "PLDXJ-AS3XDHVuPMswymSX8-tEhWgt-j1O", title: "Forza: Practical Performance", count: 5, thumbId: "CDY0K-JFg9U", blurb: "Everyday cars pushed hard." },
  { id: "PLDXJ-AS3XDHU91PcyrkK0DdaUJ3K-2Jsk", title: "How to Assetto Corsa", count: 1, thumbId: "NEk63330sgk", blurb: "Tips to get set up fast." },
  { id: "PLDXJ-AS3XDHXUiT-HHbdS3TTpnUpLUaGV", title: "GTA Online", count: 2, thumbId: "VBUXceJfHN0", blurb: "Chaos in Los Santos." },
  { id: "PLDXJ-AS3XDHWRyKigJohXnLRpr-OGQE3Q", title: "Cars", count: 6, thumbId: "A0FhiqpoIFs", blurb: "Real cars, real roads." },
  { id: "PLDXJ-AS3XDHV6qZi-rK7JAb-x9BkvwCY9", title: "Kitchen Series: Season 1", count: 5, thumbId: "JkJMtUp2a5g", blurb: "Karahi, burgers and grilling." },
  { id: "PLDXJ-AS3XDHXOHMdH5HxaRgGr_DGclePb", title: "Nature", count: 5, thumbId: "Lyd-nhhU_AY", blurb: "Utah: salt flats, camping, moons." },
  { id: "PLDXJ-AS3XDHUCvwlh8ue214f8DUQLrNXd", title: "My Gig", count: 19, thumbId: "ff-EHj6pFz8", blurb: "Life outside the rig." },
];

export const playlistUrl = (id: string) => `https://www.youtube.com/playlist?list=${id}`;

export type Short = { id: string; title: string; views: string };

export const shorts: Short[] = [
  { id: "Ze6Go6fHS3s", title: "Cars with afterburners are music to the ears", views: "354K" },
  { id: "uJWkv6jjBME", title: "Sim racing and the need for a keyboard", views: "219K" },
  { id: "59EGofdO0d0", title: "Switch car and track in Assetto Corsa quickly", views: "100K" },
  { id: "qzxD5GO6QS4", title: "Bass shaker shaking the entire rig", views: "74K" },
  { id: "aEEs5AfSYlE", title: "Trak Racer keyboard and mouse tray", views: "29K" },
  { id: "1KoQRFcFrbc", title: "Aura bass shaker on a Vasa adaptor plate", views: "28K" },
  { id: "bZErey-LT4k", title: "TR160S with the Fanatec CSL DD", views: "9.1K" },
  { id: "YdtGlCacoPk", title: "Wire management on my racing sim", views: "7.4K" },
  { id: "J0dMk9nGE90", title: "Working on that 5th to 6th shift", views: "6.9K" },
  { id: "X_P9Rj2s448", title: "Gaming is life!", views: "6K" },
  { id: "ro8VoC1DQtQ", title: "Found the perfect mouse for the rig", views: "5.6K" },
  { id: "c9AVVQL2X94", title: "Goofing around with my son on the Nürburgring", views: "3.9K" },
];

const video = (id: string, title: string): Video => ({
  id,
  title,
  published: "",
  url: `https://www.youtube.com/watch?v=${id}`,
  thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
});

/** Most watched uploads. Also stands in for "latest" when the RSS feed is unavailable. */
export const popularVideos: Video[] = [
  video("DvZ60zdkzjA", "Building a Trak Racer TR80S + triple monitor mount: full assembly"),
  video("3GHDCo5bqnk", "INSANE high speed run in Dodge Chargers! Father vs Son | Assetto Corsa SRP"),
  video("D6L01oJqsMY", "Triple screen upgrade! ASUS bezel free kit on my TR80S"),
  video("Z2jZAMde7f8", "The best $100 audio setup for your sim rig?"),
  video("ff-EHj6pFz8", "Simagic Haptic Reactor: the ultimate Moza R5 upgrade"),
  video("gnhpQo5yKCk", "Teaching my son the Nürburgring! GT3 RS vs BRABUS 900"),
];

export const topics = [
  "Assetto Corsa",
  "No Hesi",
  "Nordschleife",
  "Forza Motorsport",
  "Dirt Rally 2.0",
  "BeamNG",
  "Sim rig builds",
  "Direct drive",
  "Bass shakers",
  "Drifting",
  "Software engineering",
  "Kitchen Series",
];
