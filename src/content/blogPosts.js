import generatedBlogPosts from './generatedBlogPosts';

export const BLOG_SECTION_LAYOUTS = {
  TEXT: 'text',
  IMAGE_LEFT: 'image-left',
  IMAGE_RIGHT: 'image-right',
  IMAGE_ABOVE: 'image-above',
  IMAGE_BELOW: 'image-below',
  FULL_IMAGE: 'full-image',
};

const publicUrl = process.env.PUBLIC_URL || '';

const blogPosts = generatedBlogPosts.map((post) => ({
  ...post,
  image: `${publicUrl}${post.image}`,
  markdown: `${publicUrl}${post.markdown}`,
}));

export default blogPosts;
