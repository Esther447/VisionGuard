import BlogHero from "@/components/sections/blog/BlogHero";
import BlogFeatured from "@/components/sections/blog/BlogFeatured";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import BlogNewsletter from "@/components/sections/blog/BlogNewsletter";

export const metadata = {
  title: "Blog — VisionGuard",
  description: "Practical guides, digital insights, and stories from our work helping businesses grow online across Rwanda.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </>
  );
}
