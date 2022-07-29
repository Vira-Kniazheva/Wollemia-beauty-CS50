class BlogsService {
    constructor() {
        if (!BlogsService._intance) BlogsService._intance = this
        return BlogsService._intance;
    }

    async getBlogs() {
        if (!this.blogs) {
            this.blogs = await (await fetch('../api/blogs.json')).json();
        }
        return this.blogs;
    }

    async getBlogById(id) {
        const blogs = await this.getBlogs();
        return blogs.find(blog => blog.id === id);
    }
}