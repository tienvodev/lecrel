import { notFound } from "next/navigation";

// lib/placeholder-data.ts
export interface Novel {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  genre: string[];
  status: "ongoing" | "completed" | "hiatus";
  totalChapters: number;
  rating: number;
  followers: number;
  lastUpdated: string;
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  number: number;
  content: string;
  publishedAt: string;
  wordCount: number;
  isRead?: boolean;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  avatar: string;
}

// Realistic novel data
export const NOVELS: Record<string, Novel> = {
  "shadow-of-eternity": {
    id: "1",
    slug: "shadow-of-eternity",
    title: "Shadow of Eternity",
    author: "Elena Nightshade",
    description:
      "In a world where magic and technology collide, young Aria discovers she holds the key to preventing an ancient evil from consuming both realms. But power comes with a price, and some shadows never fade.",
    coverUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    genre: ["Fantasy", "Adventure", "Magic"],
    status: "ongoing",
    totalChapters: 247,
    rating: 4.8,
    followers: 125847,
    lastUpdated: "2024-12-15",
  },
  "quantum-hearts": {
    id: "2",
    slug: "quantum-hearts",
    title: "Quantum Hearts",
    author: "Dr. Marcus Chen",
    description:
      "When physicist Sarah Liu accidentally creates a portal to parallel universes, she must navigate different versions of her life and love while preventing a quantum catastrophe that could destroy all realities.",
    coverUrl:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
    genre: ["Sci-Fi", "Romance", "Thriller"],
    status: "completed",
    totalChapters: 89,
    rating: 4.6,
    followers: 78903,
    lastUpdated: "2024-11-28",
  },
  "the-last-chef": {
    id: "3",
    slug: "the-last-chef",
    title: "The Last Chef",
    author: "Isabella Romano",
    description:
      "In post-apocalyptic New York, where food is scarce and hope scarcer, former Michelin-starred chef Antonio must use his culinary skills to survive and bring communities together through the power of a shared meal.",
    coverUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    genre: ["Post-Apocalyptic", "Drama", "Survival"],
    status: "ongoing",
    totalChapters: 156,
    rating: 4.9,
    followers: 203445,
    lastUpdated: "2024-12-20",
  },
};

// Generate chapter data for each novel
export const CHAPTERS: Record<string, Chapter[]> = {
  "shadow-of-eternity": Array.from({ length: 247 }, (_, i) => {
    const chapterNum = i + 1;
    const titles = [
      "The Awakening",
      "Whispers in the Dark",
      "First Steps",
      "The Academy",
      "Hidden Powers",
      "Ancient Secrets",
      "The Mentor",
      "Trial by Fire",
      "Bonds of Trust",
      "The Prophecy",
      "Shadow Magic",
      "The Forbidden Library",
      "Allies and Enemies",
      "The Test",
      "Revelations",
      "The Hunt Begins",
      "Dark Alliances",
      "The Turning Point",
      "Sacrifice",
      "New Horizons",
      "The Council",
      "Betrayal",
      "Into the Void",
      "The Final Battle",
      "Redemption",
    ];

    return {
      id: `shadow-${chapterNum}`,
      slug: `chapter-${chapterNum}`,
      title:
        titles[Math.floor(Math.random() * titles.length)] +
        (chapterNum > 25 ? ` - Part ${Math.floor(chapterNum / 25) + 1}` : ""),
      number: chapterNum,
      content: generateChapterContent(chapterNum, "fantasy"),
      publishedAt: new Date(
        2024,
        0,
        1 + Math.floor(chapterNum * 1.5)
      ).toLocaleDateString(),
      wordCount: 2500 + Math.floor(Math.random() * 1500),
      isRead: Math.random() > 0.7,
    };
  }),

  "quantum-hearts": Array.from({ length: 89 }, (_, i) => {
    const chapterNum = i + 1;
    const titles = [
      "The Experiment",
      "Parallel Lives",
      "Quantum Entanglement",
      "Love Across Dimensions",
      "The Accident",
      "Mirror Universe",
      "Choices and Consequences",
      "The Other Sarah",
      "Colliding Worlds",
      "Time Paradox",
      "Infinite Possibilities",
      "The Decision Point",
      "Quantum Leap",
      "Final Equation",
      "Coming Home",
    ];

    return {
      id: `quantum-${chapterNum}`,
      slug: `chapter-${chapterNum}`,
      title:
        titles[Math.floor(Math.random() * titles.length)] +
        (chapterNum > 15 ? ` ${Math.floor(chapterNum / 15) + 1}` : ""),
      number: chapterNum,
      content: generateChapterContent(chapterNum, "sci-fi"),
      publishedAt: new Date(
        2024,
        2,
        1 + Math.floor(chapterNum * 2)
      ).toLocaleDateString(),
      wordCount: 3200 + Math.floor(Math.random() * 1800),
      isRead: Math.random() > 0.6,
    };
  }),

  "the-last-chef": Array.from({ length: 156 }, (_, i) => {
    const chapterNum = i + 1;
    const titles = [
      "The Last Meal",
      "Scavenging",
      "Community Kitchen",
      "Recipe for Hope",
      "The Garden",
      "Trading Post",
      "Memories of Flavor",
      "The Feast",
      "New Ingredients",
      "Cooking with Fire",
      "The Harvest",
      "Sharing Stories",
      "Building Bridges",
      "The Restaurant",
      "Legacy",
    ];

    return {
      id: `chef-${chapterNum}`,
      slug: `chapter-${chapterNum}`,
      title:
        titles[Math.floor(Math.random() * titles.length)] +
        (chapterNum > 15 ? ` - Day ${chapterNum}` : ""),
      number: chapterNum,
      content: generateChapterContent(chapterNum, "post-apocalyptic"),
      publishedAt: new Date(
        2024,
        5,
        1 + Math.floor(chapterNum * 1.2)
      ).toLocaleDateString(),
      wordCount: 2800 + Math.floor(Math.random() * 1200),
      isRead: Math.random() > 0.8,
    };
  }),
};

// Generate realistic chapter content
function generateChapterContent(
  chapterNum: number,
  genre: "fantasy" | "sci-fi" | "post-apocalyptic"
): string {
  const templates = {
    fantasy: [
      `<p>The morning mist clung to the ancient stones of the courtyard as Aria made her way through the Academy grounds. Chapter ${chapterNum} had brought new challenges, and she could feel the weight of her destiny pressing down upon her shoulders like a heavy cloak.</p>`,
      `<p>"You're not ready," Master Eldrin said, his weathered hands tracing the glowing runes in the air. "The shadow magic you seek to master has consumed greater wizards than you."</p>`,
      `<p>The crystal pulsed with an otherworldly light, its faceted surface reflecting not the room around them, but glimpses of what was to come. Aria reached out tentatively, knowing that once she touched it, there would be no turning back.</p>`,
    ],
    "sci-fi": [
      `<p>The quantum field generator hummed with barely contained energy as Sarah checked the calibrations one final time. The equations floating in the holographic display seemed to mock her—elegant in their simplicity, terrifying in their implications.</p>`,
      `<p>"The parallel universe theory isn't just theory anymore," Dr. Chen announced to the packed auditorium. "We've made contact." The gasps from the audience were audible even through the speakers.</p>`,
      `<p>Through the shimmering portal, Sarah could see another version of herself—one who had made different choices, lived a different life. The other Sarah was looking back, and their eyes met across the dimensions.</p>`,
    ],
    "post-apocalyptic": [
      `<p>The last can of tomatoes sat on the dusty shelf like a treasure more valuable than gold. Antonio remembered when markets were full of fresh produce, when choosing ingredients was the hardest part of cooking.</p>`,
      `<p>Smoke rose from the makeshift kitchen where dozens of survivors had gathered. The smell of the communal stew—made from scraps and hope—brought tears to eyes that had seen too much.</p>`,
      `<p>"Food is memory," Antonio told the children as he stirred the pot. "Every meal tells a story of who we were, and who we can become again."</p>`,
    ],
  };

  const content = templates[genre];
  const paragraphs = [];

  // Generate 8-12 paragraphs
  for (let i = 0; i < 8 + Math.floor(Math.random() * 5); i++) {
    paragraphs.push(content[Math.floor(Math.random() * content.length)]);
  }

  return paragraphs.join("\n\n");
}

// Generate comments for chapters
export function generateComments(
  novelSlug: string,
  chapterSlug: string
): Comment[] {
  const commentTemplates = [
    "This chapter was absolutely incredible! The character development is phenomenal.",
    "I can't believe what just happened! My heart is still racing.",
    "The plot twist at the end has me completely shook. Didn't see that coming at all.",
    "The author's writing style is so immersive. I feel like I'm right there with the characters.",
    "This is getting so intense! I need the next chapter right now.",
    "The world-building in this story is just amazing. Every detail feels so real.",
    "I've been following this story since the beginning and it just keeps getting better!",
    "The dialogue in this chapter was perfect. So natural and engaging.",
    "I'm obsessed with this story! It's 2 AM and I can't stop reading.",
    "The emotional depth of this chapter really got to me. Had me in tears.",
    "Love how the author is developing the relationship between the main characters.",
    "This chapter answered so many questions but raised even more! Can't wait for more.",
    "The pacing is perfect. Never a dull moment but not overwhelming either.",
    "I really appreciate how the author handles these complex themes.",
    "This story deserves way more recognition. It's absolutely brilliant!",
  ];

  const authors = [
    "BookwormBella",
    "FantasyFan92",
    "StorySeeker",
    "ChapterChaser",
    "NovelNinja",
    "ReadingRaven",
    "PlotTwistPro",
    "BookBinge",
    "StoryAddict",
    "PageTurner",
    "LiteraryLover",
    "FictionFanatic",
    "BookishBee",
    "NovelNerd",
    "ReadingRiot",
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1494790108755-2616b332c1e0?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
  ];

  // Generate 0-15 comments per chapter
  const numComments = Math.floor(Math.random() * 16);

  return Array.from({ length: numComments }, (_, i) => ({
    id: `${novelSlug}-${chapterSlug}-comment-${i + 1}`,
    author: authors[Math.floor(Math.random() * authors.length)],
    content:
      commentTemplates[Math.floor(Math.random() * commentTemplates.length)],
    createdAt: new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    likes: Math.floor(Math.random() * 50),
    avatar: avatars[Math.floor(Math.random() * avatars.length)],
  }));
}

// Fake API functions with realistic delays
export async function getNovelWithChapters(
  novelSlug: string
): Promise<Novel & { chapters: Chapter[] }> {
  // Simulate network delay
  await new Promise((resolve) =>
    setTimeout(resolve, 300 + Math.random() * 700)
  );

  const novel = NOVELS[novelSlug];
  if (!novel) {
    notFound();
  }

  return {
    ...novel,
    chapters: CHAPTERS[novelSlug] || [],
  };
}

export async function getChapter(
  novelSlug: string,
  chapterSlug: string
): Promise<Chapter> {
  // Simulate network delay - chapters take longer to load
  await new Promise((resolve) =>
    setTimeout(resolve, 800 + Math.random() * 1200)
  );

  const chapters = CHAPTERS[novelSlug];
  if (!chapters) {
    throw new Error(`Novel ${novelSlug} not found`);
  }

  const chapter = chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) {
    notFound();
  }

  return chapter;
}

export async function getComments(
  novelSlug: string,
  chapterSlug: string
): Promise<Comment[]> {
  // Simulate network delay - comments load separately
  await new Promise((resolve) =>
    setTimeout(resolve, 500 + Math.random() * 800)
  );

  return generateComments(novelSlug, chapterSlug);
}

// Export some sample novel slugs for testing
export const SAMPLE_NOVELS = Object.keys(NOVELS);
export const SAMPLE_ROUTES = [
  "/novels/shadow-of-eternity/chapters/chapter-1",
  "/novels/shadow-of-eternity/chapters/chapter-25",
  "/novels/quantum-hearts/chapters/chapter-1",
  "/novels/quantum-hearts/chapters/chapter-42",
  "/novels/the-last-chef/chapters/chapter-1",
  "/novels/the-last-chef/chapters/chapter-100",
];
