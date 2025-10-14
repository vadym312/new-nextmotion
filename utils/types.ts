import { z } from 'zod';

export type Locale = 'en' | 'fr';

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface ApiErrorResponse {
  error: ApiError;
  status: number;
  timestamp: string;
  path: string;
  method: string;
}

export interface PostsApiRequest {
  page?: number;
  per_page?: number;
  fields?: string[];
  category?: string;
  search?: string;
  orderby?: "date" | "title" | "id" | "include" | "relevance";
  order?: "asc" | "desc";
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "draft" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, any>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: {
        rendered: string;
      };
      author: number;
      caption: {
        rendered: string;
      };
      alt_text: string;
      media_type: string;
      mime_type: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes: Record<
          string,
          {
            file: string;
            width: number;
            height: number;
            mime_type: string;
            source_url: string;
          }
        >;
      };
      source_url: string;
      _links: Record<string, any>;
    }>;
    "wp:author"?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: Record<string, string>;
      _links: Record<string, any>;
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        link: string;
        name: string;
        slug: string;
        taxonomy: string;
        _links: Record<string, any>;
      }>
    >;
  };
  _links: Record<string, any>;
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogPost {
    id: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    category: string;
    createdAt: string;
    readTime?: number;
    image?: string;
    imageAlt?: string;
    metaTitle?: string;
    metaDescription?: string;
    slug: string;
    categories: string[];
    sections?: {
        id: string;
        title: string;
    }[];
    date: string;
    modified?: string;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
        }>;
        "wp:author"?: Array<{
            name: string;
        }>;
    };
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
}

export interface BlogAuthor {
    id: string;
    name: string;
    email?: string;
    bio?: string;
    avatar?: string;
    website?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
    posts?: BlogPost[];
}

export interface BlogTag {
    id: string;
    name: string;
    slug: string;
    description?: string;
    count: number;
}

export interface BlogComment {
    id: string;
    postId: string;
    author: {
        name: string;
        email: string;
        website?: string;
    };
    content: string;
    date: string;
    approved: boolean;
    parentId?: string;
    replies?: BlogComment[];
}

export interface BlogPostMeta {
    views: number;
    likes: number;
    shares: number;
    comments: number;
    readingTime: number;
    featured: boolean;
    pinned: boolean;
    seo: SEO;
    schema?: Record<string, any>;
}

export interface BlogPostContent {
    blocks: ContentBlock[];
    version: string;
}

export interface ContentBlock {
    id: string;
    type: 'paragraph' | 'heading' | 'image' | 'video' | 'quote' | 'list' | 'code' | 'table' | 'embed';
    content: any;
    attributes?: Record<string, any>;
}

export interface BlogPostTemplate {
    id: string;
    name: string;
    description?: string;
    fields: BlogPostField[];
    layout?: string;
    preview?: string;
}

export interface BlogPostField {
    name: string;
    type: 'text' | 'textarea' | 'rich-text' | 'image' | 'file' | 'select' | 'checkbox' | 'number' | 'date' | 'color' | 'url' | 'email' | 'tel' | 'author' | 'category' | 'tags';
    label: string;
    required?: boolean;
    placeholder?: string;
    defaultValue?: any;
    options?: Array<{
        value: string;
        label: string;
    }>;
    validation?: {
        min?: number;
        max?: number;
        pattern?: string;
        minLength?: number;
        maxLength?: number;
    };
}

export interface BlogSettings {
    title: string;
    description: string;
    postsPerPage: number;
    allowComments: boolean;
    moderateComments: boolean;
    allowGuestComments: boolean;
    defaultCategory: string;
    defaultAuthor: string;
    seo: {
        defaultTitle: string;
        defaultDescription: string;
        defaultKeywords: string[];
        defaultImage: string;
    };
    social: {
        shareButtons: string[];
        twitterHandle?: string;
        facebookAppId?: string;
    };
    analytics: {
        enabled: boolean;
        trackingId?: string;
    };
}

export interface BlogSearchFilters {
    query?: string;
    category?: string;
    tags?: string[];
    author?: string;
    dateFrom?: string;
    dateTo?: string;
    featured?: boolean;
    sortBy?: 'date' | 'title' | 'views' | 'likes' | 'comments';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    limit?: number;
}

export interface BlogSearchResult {
    id: string;
    title: string;
    excerpt: string;
    url: string;
    author: string;
    category: string;
    tags: string[];
    date: string;
    image?: string;
    score: number;
    highlights?: Array<{
        field: string;
        snippet: string;
    }>;
}

export interface BlogSearchResponse {
    results: BlogSearchResult[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
    suggestions?: string[];
    facets?: {
        categories: Array<{ value: string; count: number }>;
        tags: Array<{ value: string; count: number }>;
        authors: Array<{ value: string; count: number }>;
        dates: Array<{ value: string; count: number }>;
    };
}

export interface BlogAnalytics {
    totalPosts: number;
    totalViews: number;
    totalLikes: number;
    totalComments: number;
    averageReadingTime: number;
    popularPosts: Array<{
        id: string;
        title: string;
        views: number;
        likes: number;
    }>;
    topCategories: Array<{
        name: string;
        count: number;
        views: number;
    }>;
    topAuthors: Array<{
        name: string;
        posts: number;
        views: number;
    }>;
    monthlyStats: Array<{
        month: string;
        posts: number;
        views: number;
        likes: number;
        comments: number;
    }>;
}

export interface BlogNewsletter {
    id: string;
    title: string;
    content: string;
    subject: string;
    status: 'draft' | 'scheduled' | 'sent';
    scheduledAt?: string;
    sentAt?: string;
    recipients: number;
    opens: number;
    clicks: number;
    posts: string[];
    template?: string;
}

export interface NewsletterSubscriber {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    subscribedAt: string;
    unsubscribedAt?: string;
    status: 'active' | 'unsubscribed' | 'bounced';
    preferences: {
        categories: string[];
        frequency: 'daily' | 'weekly' | 'monthly';
    };
}

export interface BlogImportData {
    posts: BlogPost[];
    categories: Category[];
    tags: BlogTag[];
    authors: BlogAuthor[];
    comments: BlogComment[];
    settings: BlogSettings;
}

export interface BlogExportOptions {
    includeDrafts: boolean;
    includeComments: boolean;
    includeMedia: boolean;
    format: 'json' | 'xml' | 'markdown';
    dateRange?: {
        from: string;
        to: string;
    };
}

export interface BlogPostsResponse {
    posts: BlogPost[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
    categories: Category[];
    tags: BlogTag[];
}

export interface BlogPostResponse {
    post: BlogPost;
    related: BlogPost[];
    comments: BlogComment[];
    meta: BlogPostMeta;
}

export interface BlogCategoriesResponse {
    categories: Category[];
    total: number;
}

export interface BlogTagsResponse {
    tags: BlogTag[];
    total: number;
}

export interface UseBlogPostOptions {
    includeComments?: boolean;
    includeRelated?: boolean;
    includeMeta?: boolean;
    prefetch?: boolean;
}

export interface UseBlogPostsOptions {
    category?: string;
    tags?: string[];
    author?: string;
    featured?: boolean;
    limit?: number;
    page?: number;
    sortBy?: 'date' | 'title' | 'views' | 'likes' | 'comments';
    sortOrder?: 'asc' | 'desc';
}

export interface BlogEvent {
    type: 'post_created' | 'post_updated' | 'post_deleted' | 'comment_added' | 'comment_approved' | 'comment_deleted';
    postId: string;
    userId?: string;
    timestamp: string;
    data?: Record<string, any>;
}

export interface BlogPermissions {
    canCreate: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canPublish: boolean;
    canModerateComments: boolean;
    canManageSettings: boolean;
    canManageUsers: boolean;
}

export interface BlogLocalization {
    locale: Locale;
    title: string;
    description: string;
    categories: Record<string, string>;
    tags: Record<string, string>;
    authors: Record<string, string>;
    settings: BlogSettings;
}

export const paginationSchema = z.object({
  page: z.number().int().min(1, 'Page must be at least 1').default(1),
  perPage: z.number().int().min(1, 'Per page must be at least 1').max(100, 'Per page cannot exceed 100').default(10),
});

export const validateForm = <T>(schema: z.ZodSchema<T>, data: unknown): { isValid: boolean; errors: Record<string, string[]>; data?: T } => {
  try {
    const validatedData = schema.parse(data);
    return { isValid: true, errors: {}, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const field = err.path.join('.');
        if (!errors[field]) {
          errors[field] = [];
        }
        errors[field].push(err.message);
      });
      return { isValid: false, errors };
    }
    return { isValid: false, errors: { _form: ['Validation failed'] } };
  }
};