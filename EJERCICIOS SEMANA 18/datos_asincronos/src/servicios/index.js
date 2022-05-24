export const getPosts = async () => {
  if (!getPosts.cache) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    const body = await res.json();
    console.log(body);
    getPosts.cache = body.map((post) => ({
      filterName: post.title.toUpperCase(),
      ...post,
    }));
  }

  return getPosts.cache;
};
