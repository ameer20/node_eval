const { sequelize } = require("../db/index");
const passport = require('passport');
const blog = require("../db/models/blog");

function Init(app) {

  app.post("/blog",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { name, language, Educational , rating } = body;

      const createdblog = await sequelize.models.blogs.create({
        blog_name: name,
        language,
        content_type,
        review_rating,
      });
      response.status(201).send(createdblog);
    }
  );


  app.get("/blogs", async function (request, response) {
    const blogs = await sequelize.models.blogs.findAll({});
    response.status(200).send(blogs);
  });

  app.get("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });
    response.send({ blog });
  });

  app.put("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });

    const { body } = request;
    const { name, language, Educational, review_rating } = body;

    blog.blog_title = name ? name : blog.name;
    blog.language = language ? language : blog.language;
    blog.content_type = Educational ? Educational : blog.Educational;
    blog.review_rating = review_rating? review_rating : blog.review_rating;
 
    await blog.save();

    response.status(208).send(blog);
  });

  app.delete("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });
    const dest = await blog.destroy();
    response.send({ dest });
  });
}

module.exports = {
  Init,
};