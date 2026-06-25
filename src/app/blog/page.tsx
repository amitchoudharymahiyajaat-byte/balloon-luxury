import type { Metadata } from "next";
import Link from "next/link";
import FallbackImage from "../../components/home/FallbackImage";
import { getAllBlogPosts, getFeaturedBlogPost } from "../../lib/blog";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Event Decoration Blog | Event Wala Dost",
  description:
    "Read Event Wala Dost guides for balloon decoration, event styling, birthday decor, wedding decoration, corporate events and celebration planning.",
  path: "/blog",
  keywords: [
    "event decoration blog",
    "balloon decoration ideas",
    "birthday decoration guide",
    "wedding decoration ideas",
    "event styling tips",
  ],
});

function BlogCard({
  post,
  featured = false,
}: {
  post: ReturnType<typeof getAllBlogPosts>[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group overflow-hidden rounded-[28px] border border-white bg-white shadow-lg shadow-purple-950/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl ${
        featured ? "grid lg:grid-cols-[1.05fr_0.95fr]" : "flex h-full flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gray-100 ${
          featured ? "min-h-[300px] lg:min-h-[420px]" : "h-56"
        }`}
      >
        <FallbackImage
          src={post.featuredImage}
          alt={post.imageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6"}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-600">
          {post.category}
        </p>
        <h2
          className={`mt-3 font-black leading-tight text-gray-950 ${
            featured ? "text-3xl sm:text-5xl" : "text-xl sm:text-2xl"
          }`}
        >
          {post.title}
        </h2>
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4 text-sm font-semibold">
          <span className="text-gray-500">{post.readingTime}</span>
          <span className="text-purple-700">Read More -&gt;</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = getFeaturedBlogPost();
  const remainingPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
            Event Wala Dost Blog
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Decoration ideas, planning notes and event styling guides.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Practical, premium guides for planning balloon decoration, themed
            events, private surprises, office celebrations and venue styling.
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl">
          {featuredPost ? (
            <div className="space-y-10">
              <BlogCard post={featuredPost} featured />

              {remainingPosts.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {remainingPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="rounded-[34px] bg-white p-8 shadow-xl shadow-purple-950/5 ring-1 ring-black/5 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                Coming Soon
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                Blog articles are being prepared.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
                The blog system is ready. New articles can be added from the
                central blog data file when the content is ready to publish.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
