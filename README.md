# Easy gulp4 setup for wordpress
<strong>What it does?</strong>
<ol>
  <li>Scss -> add prefixe if required -> css minified and add sourcemaps in your css folder </li>
  <li>js -> babel(converts es6 to es5) -> concat all files into scripts.js -> uglify the file and saves it in "dist/js" and add sourcemaps </li>
  <li>watch your file and reload url don't forget to add the url removing the below one <br/>
    proxy: "http://localhost/wordpress_starter",
  </li>
</ol>

<strong> Clone it to the wordperss theme folder <strong> <br /> 

Edit the path for (scss, js). I have added script src as an example which need to be removed and add your files as showin in example <br />
'./js/customizer.js', <br />
			'./js/navigation.js',<br />
			'./node_modules/popper.js/dist/popper.js',<br />
			'./node_modules/bootstrap/dist/js/bootstrap.min.js'<br />
      
run "npm install"
run "gulp"
