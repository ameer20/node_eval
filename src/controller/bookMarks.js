let BookmarkModel = (function (blogs) {

    let bookmarks = [];

    blogs.bookmarks.forEach(function (bookmark, i) {
        bookmarks.push({
            id: i,
            name: bookmark.blogs_title,
            description: bookmark.description,

        });
    });

    let bookmarksPage = [];
    let i, count, length, limit, flag;

    if (opts.page <= 0) opts.page = 1;

    count = 0;
    length = bookmarks.length;
    i = ((opts.page - 1) * opts.size);
    limit = opts.size;

    if (i < length) {
        flag = true;
    } else {
        flag = false;
    }

    while (flag) {

        bookmarksPage.push(bookmarks[i]);

        i++; count++

        if (i < length && count < limit) {
            flag = true;
        } else {
            flag = false;
        }
    }

    result.count = length;
    result.data = bookmarksPage;
    result.page = opts.page;
    result.pages = Math.ceil(length / opts.size);

 
})

module.exports = BookmarkModel;