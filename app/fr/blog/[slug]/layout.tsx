import { Metadata } from "next";
import he from "he";
import { ResolvingMetadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nextmotion.net';
  
  try {
    const response = await fetch(`${baseUrl}/api/post?slug=${resolvedParams.slug}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    const post = await response.json();
    
    // Handle case where post is null or doesn't exist
    if (!post || !post.title) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
        alternates: {
          canonical: `${baseUrl}/blog/${resolvedParams.slug}`,
        },
      };
    }
    
    return {
      title: he.decode(post.metaTitle || post.title.rendered || 'Untitled'),
      description: he.decode(post.metaDescription || post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || 'No description available'),
      alternates: {
        canonical: `${baseUrl}/blog/${resolvedParams.slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata for blog post:', error);
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      alternates: {
        canonical: `${baseUrl}/blog/${resolvedParams.slug}`,
      },
    };
  }
}

export default function BlogPostLayout({
  children,
  params,
}: Props) {
  return children;
} 