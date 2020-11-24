const React = require('react');

const Index = () => {
  if(typeof(window) !== "undefined"){
    window.location.href="docs/en/collector-intro.html";
  }

  return(
    <div>
      Se você não foi redirecionado automáticamente, clique nesse
      <a href="docs/pt-BR/collector-intro.html">link</a>.
    </div>
  )
}

module.exports = Index;
