const toggle_btn = document.getElementById("toggle_theme");
const body = document.getElementsByTagName('body');

const arr = ['🌜', '🔆'];

let arrIndx = 0;

toggle_btn.addEventListener('click', () => {
    body[0].classList.toggle('light_theme');
    toggle_btn.textContent = arr[arrIndx];
    arrIndx = (arrIndx + 1) % arr.length;
})

async function showBlogs() {
    const blog_section = document.getElementById('blog_section');
    const res = await axios.get("http://localhost:3000/getblogs");
    res.data.forEach((blog) => {
        console.log(blog);
        let commentHtml = "";
        blog.comment.forEach((data) => {
            commentHtml += `<li>Anonymous-&nbsp;<span>${data.comment}</span></li>`
        })

        blog_section.innerHTML += `
        <div class="single_blog_container">
        <h2>${blog.title}</h2>
        <p>User : ${blog.description}</p>
        <span>Comment&nbsp;<span class="comment_arrow" id="comment_arrow">⬇️</span></span>
        <div class="comment_div" id="comment_div">
            <form class="comment_form" action="http://localhost:3000/addcomment/${blog.id}" method="post">
                <input type="text" name="comment" />
                <button id="comment_btn">Send</button>
            </form>
            <div>
                <ul class="comment_list" id="comment_list">
                   ${commentHtml}
                </ul>
            </div>
        </div>
    </div>
        `;
    })

    const comment_arrow = document.querySelectorAll(".comment_arrow");

    comment_arrow.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            arrow.parentElement.nextElementSibling.classList.toggle('show');
        });
    });
}




window.addEventListener('DOMContentLoaded', showBlogs);

