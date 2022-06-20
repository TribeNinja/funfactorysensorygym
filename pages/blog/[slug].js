import Footer from "components/Footer";
import Header from "components/Header";
import SystemsPage from "components/SystemsPage";
import Head from "next/head";
import { sanityClient } from "sanity";

const Blog = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>{blog.title} | Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Head>
      <Header StartFromTop={true} />
      <SystemsPage system={blog} />
      <Footer />
    </div>
  );
};

export default Blog;

export const getServerSideProps = async ({ params }) => {
  const queryBlog = `*[_type == 'blog' && slug.current == $slug][0] {
    _type,
    _id,
    _createdAt,
    title,
    excerpt,
    body,
    gallery,
    slug,
  }
  `;

  const blog = await sanityClient.fetch(queryBlog, {
    slug: params?.slug,
  });

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
};
