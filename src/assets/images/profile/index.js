const importAll = require =>
  require.keys().reduce((acc, next) => {
    let value = next.replace("./", "");
    let key = value.replace(".", "");
    acc[key] = require(next);

    return acc;
  }, {});

const profileImg = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));

export default profileImg;