const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Himu Kitchen`;
  }, [title]);
};

export default useTitle;
