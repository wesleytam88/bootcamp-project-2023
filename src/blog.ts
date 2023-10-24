type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "First Blog",
    date: "Oct. 23 2023",
    description:
      "First blog entry! Super excited to have finished my own personal website, huge thanks to Cal Poly's Hack4Impact Starter Pack for helping me make this wesbite. Hopefully this website will be a living document and will receive new updates in the future!",
    slug: "blogs/First_Blog.html",
  },
  {
    title: "Happy Halloween",
    date: "Oct. 23 2023",
    description: "A little early, but Happy Halloween!",
    slug: "blogs/Happy_Halloween.html",
  },
];

function blog_loop(blogs: Blog[]) {
  var parent = document.getElementsByClassName("blog-component")[0];
  // There will only be 1 blog-component
  blogs.forEach(function (blog) {
    var blog_entry = document.createElement("article");
    blog_entry.className = "blog-entry";
    // blog_entry.setAttribute("href", blog.slug);
    parent.appendChild(blog_entry);

    var blog_entry_details = document.createElement("div");
    blog_entry_details.className = "blog-entry-details";
    blog_entry.appendChild(blog_entry_details);

    var blog_title = document.createElement("a");
    blog_title.setAttribute("href", blog.slug)
    blog_title.className = "blog-title";
    blog_title.innerHTML = blog.title;
    blog_entry_details.appendChild(blog_title);

    var blog_date = document.createElement("h2");
    blog_date.className = "blog-date";
    blog_date.innerHTML = blog.date;
    blog_entry_details.appendChild(blog_date);

    var blog_desc = document.createElement("p");
    blog_desc.className = "blog-description";
    blog_desc.innerHTML = blog.description;
    blog_entry.appendChild(blog_desc);
  });
}

blog_loop(blogs);
