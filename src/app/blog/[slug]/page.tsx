import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FallbackImage from "../../../components/home/FallbackImage";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "../../../lib/blog";
import { siteName, siteUrl } from "../../../lib/seo";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../../lib/whatsapp";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Event Wala Dost",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/blog/${post.slug}`;
  const url = new URL(canonicalPath, siteUrl).toString();

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url,
      siteName,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedBlogs = getRelatedBlogPosts(post.relatedBlogSlugs);
  const canonicalUrl = new URL(`/blog/${post.slug}`, siteUrl).toString();
  const schemaImageUrl = new URL(post.featuredImage, siteUrl).toString();
  const tocItems = post.contentSections.filter(
    (section) => section.level === 2,
  );
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: schemaImageUrl,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: canonicalUrl,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: new URL("/blog", siteUrl).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article>
        <header className="px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-5xl">
            <nav className="text-sm font-semibold text-gray-500">
              <Link href="/" className="transition hover:text-purple-700">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="transition hover:text-purple-700">
                Blog
              </Link>
            </nav>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              {post.category}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              {post.introduction}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-gray-500">
              <span>{post.author}</span>
              <span>Published {formatDate(post.publishedDate)}</span>
              <span>Updated {formatDate(post.updatedDate)}</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <section className="px-4 pb-12 sm:px-6 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-gray-100 shadow-xl shadow-purple-950/10 sm:min-h-[520px]">
              <FallbackImage
                src={post.featuredImage}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 md:pb-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-[24px] bg-white p-5 shadow-md shadow-purple-950/5 ring-1 ring-black/5 lg:sticky lg:top-24">
              <h2 className="text-sm font-black uppercase tracking-[0.24em] text-purple-600">
                Table of Contents
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
                {tocItems.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="transition hover:text-purple-700"
                  >
                    {section.heading}
                  </a>
                ))}
              </div>
            </aside>

            <div className="rounded-[34px] bg-white p-6 shadow-xl shadow-purple-950/5 ring-1 ring-black/5 sm:p-8 md:p-10">
              <div className="space-y-8">
                {post.contentSections.map((section) => {
                  const HeadingTag = section.level === 2 ? "h2" : "h3";

                  return (
                    <section key={section.id} id={section.id}>
                      <HeadingTag
                        className={
                          section.level === 2
                            ? "font-serif text-3xl italic leading-tight text-[#2f2038] sm:text-4xl"
                            : "text-2xl font-black leading-tight text-gray-950"
                        }
                      >
                        {section.heading}
                      </HeadingTag>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Common questions
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {post.faq.slice(0, 4).map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-md shadow-purple-950/5"
                >
                  <h3 className="text-base font-bold text-gray-950">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              Relevant Services
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Plan the decoration
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {post.relatedServiceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-[24px] border border-gray-100 bg-[#fffaf7] p-5 text-lg font-black text-gray-950 shadow-md shadow-purple-950/5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {service.title}
                  <span className="mt-3 block text-sm font-semibold text-purple-700">
                    View Service -&gt;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {relatedBlogs.length > 0 ? (
          <section className="px-4 py-12 sm:px-6 md:py-16">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
                Related Blogs
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Keep reading
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {relatedBlogs.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="rounded-[24px] bg-white p-5 shadow-md shadow-purple-950/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-600">
                      {relatedPost.category}
                    </p>
                    <h3 className="mt-3 text-lg font-black text-gray-950">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
                Booking
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                Want help planning your decoration?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
                Share your date, city, venue and reference idea. Our team will
                suggest the right Event Wala Dost setup on WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={createWhatsAppUrl(
                  buildPageWhatsAppMessage({
                    page: "blog",
                    articleTitle: post.title,
                  }),
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-yellow-400 px-7 py-4 text-sm font-bold text-black transition hover:bg-white"
              >
                Book On WhatsApp
              </a>
              <Link
                href="/#services"
                className="inline-flex justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
