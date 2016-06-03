var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>

      <h2 className="text-center">Webapp information</h2>
      <p>This is the about page. Awesome</p>
        <ol>
          <li>
            <Link to='/?location=Leicester'>Leicester, UK</Link>
          </li>
          <li>
            <Link to='/?location=rio'>Rio, Brazil</Link>
          </li>
        </ol>

    </div>

  )
};

module.exports = About;
