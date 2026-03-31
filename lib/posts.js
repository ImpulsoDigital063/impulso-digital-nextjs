import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(raw);
      return { ...data, slug: data.slug || filename.replace(".md", "") };
    });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filename = fs.readdirSync(postsDir).find((f) => {
    const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data } = matter(raw);
    return data.slug === slug || f.replace(".md", "") === slug;
  });

  if (!filename) return null;

  const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
  const { data, content } = matter(raw);
  return { ...data, content, slug: data.slug || filename.replace(".md", "") };
}
