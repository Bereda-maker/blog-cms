const blogPosts = [
  { id:1, title:"5 Tips for Faster Webflow Builds", author:"Bereda Wako", date:"2025-10-29", summary:"Quick ways to speed up your Webflow workflow.", content:`<p><strong>Tip 1:</strong> Use symbols for repeated elements.</p><p><strong>Tip 2:</strong> Reuse classes and global styles.</p><p><strong>Tip 3:</strong> Organize CMS collections efficiently.</p><p><strong>Tip 4:</strong> Use interactions only when necessary.</p><p><strong>Tip 5:</strong> Audit your site regularly.</p>`, image:"web.jpg" },
  { id:2, title:"Top 5 JavaScript Tricks", author:"Bereda Wako", date:"2025-10-28", summary:"Boost your JavaScript skills with clever tricks.", content:`<p><strong>1.</strong> Template literals for readable strings.</p><p><strong>2.</strong> Array destructuring.</p><p><strong>3.</strong> Optional chaining.</p><p><strong>4.</strong> Nullish coalescing.</p><p><strong>5.</strong> Using Set to filter duplicates.</p>`, image:"java.webp" },
  { id:3, title:"Essential UI Design Principles", author:"Bereda Wako", date:"2025-10-27", summary:"Improve interfaces with key principles.", content:`<p><strong>1.</strong> Consistency is key.</p><p><strong>2.</strong> Use whitespace effectively.</p><p><strong>3.</strong> Maintain visual hierarchy.</p><p><strong>4.</strong> Provide immediate feedback.</p><p><strong>5.</strong> Accessibility first.</p>`, image:"ui.jpg" }
];

const blogList = document.getElementById('blog-list');
const blogDetail = document.getElementById('blog-detail');
const backBtn = document.getElementById('backBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function showBlogList(posts = blogPosts) {
  blogDetail.style.display = 'none';
  blogList.style.display = 'grid';
  blogList.innerHTML = posts.map(post => `
    <div class="blog-card" onclick="showBlogDetail(${post.id})">
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-card-content">
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
      </div>
    </div>
  `).join('');
}

function showBlogDetail(id) {
  const post = blogPosts.find(p => p.id === id);
  if(!post) return;
  blogList.style.display = 'none';
  blogDetail.style.display = 'block';
  document.getElementById('postTitle').innerText = post.title;
  document.getElementById('postImage').src = post.image;
  document.getElementById('postAuthor').innerText = post.author;
  document.getElementById('postDate').innerText = post.date;
  document.getElementById('postContent').innerHTML = post.content;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

backBtn.addEventListener('click', () => showBlogList());

// --- Search Functionality ---
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = blogPosts.filter(post => post.title.toLowerCase().includes(query) || post.summary.toLowerCase().includes(query));
  showBlogList(filtered);
});

// Initialize
showBlogList();
