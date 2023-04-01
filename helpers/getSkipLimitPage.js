const getSkipLimitPage = ({ page = 1, limit = 12 }) => {
  const skip = (page - 1) * limit;
  return { skip, limit, page };
};

module.exports = getSkipLimitPage;
