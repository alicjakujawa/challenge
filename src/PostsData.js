module.exports = {
  init: function () {
    localStorage.clear();
    localStorage.setItem('posts', JSON.stringify([
      {
        id: '1',
        username: 'Johnny5',
        title: 'My new car',
        views: 1120,
        likes: 52,
        created: 2014-09-20
      },
      {
        id: '2',
        username: 'Yan30',
        title: 'My hobbies',
        views: 300,
        likes: 12,
        created: 2015-01-10
      },
      {
        id: '3',
        username: 'Kate15',
        title: 'My job',
        views: 670,
        likes: 18,
        created: 2015-09-20
      }
    ]));
  }
};
