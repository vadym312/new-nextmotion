import { BlogPost, Category } from "@/utils/types";
import BlogPostingSchema from "./components/BlogPostingSchema";
import { EnhancedBlogPost } from "./components/BlogPost";
import { Metadata, ResolvingMetadata } from "next";

async function getPost(slug: string): Promise<BlogPost | null> {
	try {
		const res = await fetch(`https://www.nextmotion.net/api/post?slug=${slug}`, { cache: "no-store" });
		
		if (!res.ok) {
			console.error(`Failed to fetch post with slug "${slug}": ${res.status} ${res.statusText}`);
			return null;
		}
		
		const post = await res.json();
		return post || null;
	} catch (error) {
		console.error(`Error fetching post with slug "${slug}":`, error);
		return null;
	}
}

async function getPosts(): Promise<BlogPost[]> {
	try {
		const res = await fetch(`https://www.nextmotion.net/api/posts`, { cache: "no-store" });
		if (!res.ok) {
			return [];
		}
		const posts = await res.json();
		return Array.isArray(posts) ? posts : [];
	} catch (error) {
		console.error("Error fetching or parsing posts:", error);
		return [];
	}
}

async function getCategories(): Promise<Category[]> {
	try {
		const res = await fetch(`https://www.nextmotion.net/api/categories`, { cache: "no-store" });
		if (!res.ok) {
			return [];
		}
		const categories = await res.json();
		return Array.isArray(categories) ? categories : [];
	} catch (error) {
		console.error("Error fetching or parsing categories:", error);
		return [];
	}
}

type Props = {
	params: Promise<{ slug: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts
		.filter(post => post && post.slug) // Filter out any null/undefined posts
		.map((post) => ({
			slug: post.slug,
		}));
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const resolvedParams = await params;
	
	try {
		const post = await getPost(resolvedParams.slug);
		
		// Handle case where post is null or doesn't exist
		if (!post || !post.title) {
			return {
				title: 'Post Not Found',
				description: 'The requested blog post could not be found.',
			};
		}
		
		return {
			title: post.title?.rendered || 'Untitled',
			description: post.excerpt?.rendered || 'No description available',
		};
	} catch (error) {
		console.error('Error generating metadata for blog post:', error);
		return {
			title: 'Post Not Found',
			description: 'The requested blog post could not be found.',
		};
	}
}

export default async function BlogPostPage({ params }: Props) {
	const resolvedParams = await params;
	const post = await getPost(resolvedParams.slug);
	const [posts, categories] = await Promise.all([
		getPosts(),
		getCategories(),
	]);

	return (
		<main className='min-h-screen bg-white'>
			{post && (
				<>
					<BlogPostingSchema post={post} />
					<EnhancedBlogPost post={post} posts={posts} categories={categories} />
				</>
			)}
		</main>
	);
}