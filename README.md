## Hi there <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"><img class="emoji" alt="wave" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"></g-emoji> My name is Želislav Beška and I work as a Software developer primary interested in Frontend

I created this portfolio mainly so that I could present a brief summary of my experience so far in one place. Also, I wanted to present some of the technologies and tools I used.

### Features
<ul>
  <li>Development server with prefixing, minification and optimization</li>
  <li>JavaScript transpiling, bundling, optimization and minification</li>
  <li>Asset optimization</li>
  <li>Cache busting</li>
  <li>Lazy-Loaded Images</li>
  <li>Smooth animation on mobile screen with hamburger menu</li>
  <li>Modal box fading in on button click</li>
  <li>On scroll boxes will animate into the current section regulated with waypoints</li>
  <li>On scroll top header will stick, links will be visible and also highlighted</li>
</ul>

### Tools and Techs

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>

<hr />

## Getting Started

<p><strong>1.</strong> Clone the repository</p>
<div class="highlight highlight-source-shell"><pre>git clone https://github.com/zelislav/portfolio-bz/</pre></div>

<p><strong>2.</strong> Navigate to portfolio-bz directory</p>
<div class="highlight highlight-source-shell"><pre>cd portfolio-bz</pre></div>

<p><strong>3.</strong> Install dependencies <code>package.json</code></p>
<div class="highlight highlight-source-shell"><pre>npm i</pre></div>

<p><strong>4.</strong> Run <code>server.js</code></p>
<div class="highlight highlight-source-shell"><pre>node server.js</pre></div>

### Up and Running

You are now ready to spin up a local development server and generate production assets.

<p><strong>1.</strong> Run the development server <g-emoji class="g-emoji" alias="gear" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png"><img class="emoji" alt="gear" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png"></g-emoji></p>

<div class="highlight highlight-source-shell"><pre>npm run dev</pre></div>

<p><strong>2.</strong> Generate production-ready files <g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png"><img class="emoji" alt="rocket" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png"></g-emoji></p>

<div class="highlight highlight-source-shell"><pre>npm run build</pre></div>

<p><strong>That's it!</strong> <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png"><img class="emoji" alt="raised_hands" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png"></g-emoji></p>

<hr />

## A little bit about the project configuration

### Development server webpack.dev.js

<p><strong>Features</strong></p>
<ul>
  <li>Automatic recompilation and page reloading on file changes</li>
  <li>Source maps</li>
  <li>Turns sass into css</li>
  <li>Turns css into common js</li>
  <li>Inject styles into DOM</li>
</ul>

### Build process tasks webpack.prod.js

<p><strong>HTML</strong></p>
<p><strong>Output:</strong><code>dist/</code></p>
<ul>
  <li>Remove comments</li>
  <li>Collapse whitespace</li>
  <li>Remove attribute quotes</li>
  <li>Copy all <code>*.html</code> files from <code>src/</code> to <code>dist/</code></li>
</ul>
<br/>

<p><strong>Stylesheets (CSS/SCSS/SASS)</strong></p>
<p><strong>Output:</strong><code>dist/main.[contenthash].css</code></p>
<p><em>After being processed, all stylesheets are merged into a single CSS file.</em></p>
<ul>
  <li>Compile Sass into CSS</li>
  <li>Add vendor prefixes</li>
  <li>Optimize and minimize</li>
  <li>Extract to main.[contenthash].css</li>
  <li>Link the stylesheet to all <code>*.html</code>files</li>
</ul>
<div class="highlight highlight-source-js">

<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(51, 51, 51); background: rgb(248, 248, 248);">plugin<span class="hljs-variable" style="color: teal;">s:</span> [
  <span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">new</span> MiniCssExtractPlugin({ filename: <span class="hljs-string" style="color: rgb(221, 17, 68);">'[name].[contenthash].css'</span> }),
  <span class="hljs-keyword" style="color: rgb(51, 51, 51); font-weight: 700;">new</span> CleanWebpackPlugin()
],
module: {
  rule<span class="hljs-variable" style="color: teal;">s:</span> [
    {
      tes<span class="hljs-variable" style="color: teal;">t:</span> /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        <span class="hljs-string" style="color: rgb(221, 17, 68);">'css-loader'</span>,
        {
          loader: <span class="hljs-string" style="color: rgb(221, 17, 68);">'postcss-loader'</span>,
          option<span class="hljs-variable" style="color: teal;">s:</span> {
            postcssOption<span class="hljs-variable" style="color: teal;">s:</span> {
              plugin<span class="hljs-variable" style="color: teal;">s:</span> [
                require(<span class="hljs-string" style="color: rgb(221, 17, 68);">'autoprefixer'</span>)
              ]
            }
          }
        },
        {
          loader: <span class="hljs-string" style="color: rgb(221, 17, 68);">"sass-loader"</span>,
          option<span class="hljs-variable" style="color: teal;">s:</span> {
            implementation: sass,
          },
        },
      ]
    }
  ]
}</pre>

</div>
<br/>

<p><strong>JavaScript</strong></p>
<p><strong>Output:</strong><code>dist/bundle.[contenthash].js</code></p>
<p><em>After being processed, all scripts are bundled into a single JS file.</em></p>
<ul>
  <li>Optimize and minimize</li>
  <li>Bundle into bundle.[contenthash].js</li>
  <li>Link the script to all <code>*.html</code> files</li>
</ul>
<br/>

<p><strong>Assets</strong></p>
<p><strong>Output:</strong><code>dist/imgs/</code></p>
<p>Assets are processed with <a href="https://webpack.js.org/loaders/file-loader/"><code>file-loader</code></a> which resolves import/require() on a file into a url and emits the file into the output directory and <a href="https://github.com/JetBrains/svg-sprite-loader"><code>svg-sprite-loader</code></a> which rendering sprites and injected them in page automatically.</p>

<div class="highlight highlight-source-js">
<pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; color: rgb(51, 51, 51); background: rgb(248, 248, 248);">{
  <span class="hljs-attribute" style="color: navy; font-weight: 400;">test</span>: /\.(png|jpe?g|gif)$/i,
  use: {
    loader: <span class="hljs-string" style="color: rgb(221, 17, 68);">'file-loader'</span>,
    options: {
      name: <span class="hljs-string" style="color: rgb(221, 17, 68);">'[name].[hash].[ext]'</span>,
      outputPath: <span class="hljs-string" style="color: rgb(221, 17, 68);">'imgs'</span>
    }
  }
},
{
  <span class="hljs-attribute" style="color: navy; font-weight: 400;">test</span>: /\.svg$/,
  use: [
    { 
      loader: <span class="hljs-string" style="color: rgb(221, 17, 68);">'svg-sprite-loader'</span>, 
      options: {} 
    },
    { 
      <span class="hljs-attribute" style="color: navy; font-weight: 400;">loader</span>: <span class="hljs-string" style="color: rgb(221, 17, 68);">'svgo-loader'</span> 
    },
  ]
}</pre>
</div>
