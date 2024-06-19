import { Blog } from "$lib/database/models/blog_model.js";

const blogModel = new Blog();

export async function load({ params }) {
  const { title } = params;
  const blog = await blogModel.getDetail(title);

  return {
    //
  };
}
