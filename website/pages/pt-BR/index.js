const React = require("react");

const Index = () => {
  return (
    <div>
      Se você não foi redirecionado automáticamente, clique nesse
      <a href="/docs/pt-BR/collector-intro.html"> link</a>.
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
