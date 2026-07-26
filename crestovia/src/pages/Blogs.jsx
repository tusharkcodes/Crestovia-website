import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/seo/Breadcrumb';
import { BlogSchema, OrganizationSchema, WebPageSchema } from '../components/seo/Schema';
import OptimizedImage from '../components/seo/OptimizedImage';
import { blogPosts } from '../data/blog';
import { pageSeo } from '../data/seo';

export default function Blogs() {
  const seo = pageSeo.blogs;

  return (
    <>
      <SEO {...seo} canonical={seo.path} />
      <OrganizationSchema />
      <BlogSchema />
      <WebPageSchema title={seo.title} description={seo.description} path={seo.path} />
      <Navbar />
      <main>
        <header className="hero-gradient border-b border-border pt-28 pb-12 sm:pt-32">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blogs' },
              ]}
            />
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Insights</p>
            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Digital Marketing Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
              Practical guidance on SEO, paid ads, websites, branding, and AI automation from Crestovia
              — a digital marketing agency in Pune.
            </p>
          </div>
        </header>

        <section className="section-padding bg-surface" aria-labelledby="blog-list-heading">
          <div className="container-wide">
            <h2 id="blog-list-heading" className="sr-only">
              Latest articles
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <article className="card-premium overflow-hidden">
                    <Link to={`/blogs/${post.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      <OptimizedImage
                        src={post.image}
                        alt={`${post.title} — Crestovia blog`}
                        title={post.title}
                        width={640}
                        height={360}
                        className="h-44 w-full object-cover bg-primary-light"
                      />
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                          {post.category}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-foreground">{post.title}</h3>
                        <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                        <p className="mt-4 text-xs text-muted">
                          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                          {' · '}
                          {post.readingTime}
                          {' · '}
                          {post.author}
                        </p>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
