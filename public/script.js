const API_URL = "/blogs";
let allBlogs = [];

async function fetchBlogs() {
  try {
    const res = await fetch(API_URL);
    allBlogs = await res.json();
    render();
  } catch (err) {
    console.error("Fetch error", err);
  }
}

function render() {
  const list = document.getElementById("blog-list");
  list.innerHTML = allBlogs
    .map((b) => {
      const isModified =
        Math.abs(new Date(b.updatedAt) - new Date(b.createdAt)) > 1000;

      const createdStr = new Date(b.createdAt).toLocaleDateString();
      const updatedStr = new Date(b.updatedAt).toLocaleDateString();

      return `
            <div class="blog-card">
                <div>
                    <h3>${b.title}</h3>
                    <p>${b.body}</p>
                </div>
                
                <div class="meta-info">
                    <div>Author: <span class="author-tag">${
                      b.author
                    }</span></div>
                    <div class="timestamp">Created: ${createdStr}</div>
                    ${
                      isModified
                        ? `<div class="timestamp" style="color: #10b981;">Updated: ${updatedStr}</div>`
                        : ""
                    }
                </div>

                <div class="card-actions">
                    <button class="btn btn-edit" onclick="editBlog('${
                      b._id
                    }')">Edit</button>
                    <button class="btn btn-delete" onclick="deleteBlog('${
                      b._id
                    }')">Delete</button>
                </div>
            </div>`;
    })
    .join("");
}

document.getElementById("blog-form").onsubmit = async (e) => {
  e.preventDefault();
  const id = document.getElementById("blog-id").value;
  const data = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value || "Anonymous",
    body: document.getElementById("body").value,
  };

  await fetch(id ? `${API_URL}/${id}` : API_URL, {
    method: id ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  resetForm();
  fetchBlogs();
};

window.editBlog = (id) => {
  const b = allBlogs.find((x) => x._id === id);
  document.getElementById("blog-id").value = b._id;
  document.getElementById("title").value = b.title;
  document.getElementById("author").value = b.author;
  document.getElementById("body").value = b.body;

  document.getElementById("form-title").innerText = "Edit Post";
  document.getElementById("submit-btn").innerText = "Save Changes";
  document.getElementById("cancel-btn").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.deleteBlog = async (id) => {
  if (confirm("Permanently delete this post?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchBlogs();
  }
};

function resetForm() {
  document.getElementById("blog-form").reset();
  document.getElementById("blog-id").value = "";
  document.getElementById("form-title").innerText = "Create New Post";
  document.getElementById("submit-btn").innerText = "Publish Post";
  document.getElementById("cancel-btn").style.display = "none";
}

document.getElementById("cancel-btn").onclick = resetForm;

fetchBlogs();
