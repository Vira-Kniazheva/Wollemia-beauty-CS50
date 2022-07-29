class BlogList {
    constructor() {
        this.container = document.querySelector('.blog-container');
        this.BlogsService = new BlogsService();
        this.renderBlogs();
    }
    async renderBlogs() {
        let blogListDomString = '';
        const blogs = await this.BlogsService.getBlogs();
        blogs.forEach(blog => {
            blogListDomString += this.createBlogDomString(blog);
        });
        this.container.innerHTML = blogListDomString;
        //this.addEventListeners();
    }
    createBlogDomString(blog) {
        return `<div class="col-lg-6 col-md-6">
            <article class="blog-post">
              <img src="../img/${blog.image}" alt="${blog.name}" />
              <div class="date">
                <div>
                  <div class="day">${blog.day}</div>
                  <div class="year">${blog.year}</div>
                </div>
              </div>
              <h3 class="text-blog mt-4 name">${blog.name}
              </h3>
              <p class="my-3 description">
                ${blog.description}
              </p>
              <a href="#" class="link-more read" data-id = ${blog.id}
                >Читати більше <i class="ri-arrow-right-s-line icon"></i
              ></a>
            </article>
        </div>`;
    }
}
new BlogList();