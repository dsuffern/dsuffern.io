const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <time>{YEAR}</time> © David Suffern &nbsp; <strong>Portfolio</strong> by <a href="https://jgthms.com">Dave Suffern</a>.
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          <a href="/feed.xml">RSS</a>
        </p>
      </div>
    </footer>
  ),
};