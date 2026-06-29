function runReview() {
    let code = document.getElementById("codeInput").value;
    let result = reviewCode(code);

    let output = document.getElementById("output");

    let html = "";

    // 💖 Show Score
    html += `<p>🐰 Code Score: <b>${result.score}/10</b></p>`;

    // 🌸 Show Issues
    if (result.issues.length === 0) {
        html += `<p>✨ Perfect code! CodeBunny is proud of you 🐰💖</p>`;
    } else {
        result.issues.forEach(issue => {
            html += `<p>${issue}</p>`;
        });
    }

    output.innerHTML = html;
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}