exports.homePag = (req, res) => {
  res.render('index', {
    title: 'Home',
  });
  return;
};
