import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/seo/Breadcrumb';
import { ArticleSchema, OrganizationSchema } from '../components/seo/Schema';
import OptimizedImage from '../components/seo/OptimizedImage';
import { getBlogBySlug } from '../data/blog';
import { getBlogSeo } from '../data/seo';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const seo = getBlogSeo(post);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.path}
        type="article"
        image={seo.image}
        publishedTime={seo.publishedTime}
        modifiedTime={seo.modifiedTime}
        author={post.author}
      />
      <OrganizationSchema />
      <ArticleSchema post={post} />
      <Navbar />
      <main>
        <article>
          <header className="hero-gradient border-b border-border pt-28 pb-12 sm:pt-32">
            <div className="container-wide px-4 sm:px-6 lg:px-8">
              <Breadcrumb
                items={[
                  { name: 'Home', path: '/' },
                  { name: 'Blog', path: '/blogs' },
                  { name: post.title, path: `/blogs/${post.slug}` },
                ]}
              />
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                {post.category}
              </p>
              <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-muted">
                By {post.author} · <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                {post.modifiedAt && post.modifiedAt !== post.publishedAt ? (
                  <>
                    {' · '}
                    Updated <time dateTime={post.modifiedAt}>{post.modifiedAt}</time>
                  </>
                ) : null}
                {' · '}
                {post.readingTime}
              </p>
            </div>
          </header>

          <div className="section-padding bg-surface">
            <div className="container-wide mx-auto max-w-3xl">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                title={post.title}
                width={960}
                height={540}
                className="mb-10 w-full rounded-2xl border border-border object-cover"
                loading="eager"
              />
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {post.content.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-10 text-sm">
                <Link to="/contact" className="font-semibold text-primary hover:text-accent">
                  Talk to Crestovia in Pune
                </Link>
                {' · '}
                <Link to="/services" className="font-semibold text-primary hover:text-accent">
                  View our services
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
