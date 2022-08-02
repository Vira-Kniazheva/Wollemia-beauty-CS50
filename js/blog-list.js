class BlogList {
  constructor() {
    this.container = document.querySelector('.blog-container');
    this.blogsService = new BlogsService();
    this.renderBlogs();
  }
  async renderBlogs() {
    let blogListDomString = '';
    const blogs = await this.blogsService.getBlogs();
    blogs.forEach(blog => {
      blogListDomString += this.createBlogDomString(blog);
    });
    this.container.innerHTML = blogListDomString;
    this.addEventListeners();
  }
  createBlogDomString(blog) {
    return `<div class="col-lg-6 col-md-6">
            <article class="blog-post blog-top-2line">
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
              <a href="#" class="link-more btn-read" data-bs-toggle="modal" data-bs-target="#blog-info-modal" data-id = ${blog.id}
                >Читати більше <i class="ri-arrow-right-s-line icon"></i
              ></a>
            </article>
        </div>`;
  }
  addEventListeners() {
    document.querySelectorAll('.btn-read').forEach(btn => {
      btn.addEventListener('click', this.showBlogInfo.bind(this));
    });
  }
  async showBlogInfo(event) {
    const id = event.target.dataset.id;
    const blog = await this.blogsService.getBlogById(id);
    const modal = document.querySelector('#blog-info-modal');
    modal.querySelector('.modal-title').innerHTML = blog.name;
    modal.querySelector('.blog-description').innerHTML = blog.full_description;
  }
}
new BlogList();