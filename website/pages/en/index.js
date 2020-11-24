const React = require('react');

const Index = () => {

  if(typeof(window) !== "undefined"){
    window.location.href="docs/en/collector-intro.html";
  }
  return(
    <div>
      If you are not redirected automatically, follow this
      <a href="docs/en/collector-intro.html">link</a>.
    </div>
  )
}

module.exports = Index;
