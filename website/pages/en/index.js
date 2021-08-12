const React = require("react");

const Index = () => {
  return (
    <div>
      If you are not redirected automatically, follow this
      <a href="docs/en/collector-intro.html"> link</a>.
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<script>window.location.href = "/docs/en/collector-intro.html";</script>',
        }}
      ></div>
    </div>
  );
};

module.exports = Index;
