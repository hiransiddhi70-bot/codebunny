function getScoreLabel(score) {
    if (score >= 9) return "🌸 Excellent Code";
    if (score >= 7) return "✨ Good Code";
    if (score >= 5) return "🧁 Needs Improvement";
    return "⚠️ Fix Required";
}
function runReview() {
    let code = document.getElementById("codeInput").value;
    let result = reviewCode(code);
    let output = document.getElementById("output");

    let html = "";

    html += `<p class="score">🐰 Code Score: <b>${result.score}/10</b></p>`;

    if (result.issues.length === 0) {
        html += `<p class="good">✨ Perfect code! CodeBunny is proud 🐰💖</p>`;
    } else {
        result.issues.forEach(issue => {
            html += `<p class="issue">🫧 ${issue}</p>`;
        });
    }

    output.innerHTML = html;
}
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
function downloadReport() {
    let text = document.getElementById("output").innerText;

    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "codebunny-report.txt";

    link.click();
}