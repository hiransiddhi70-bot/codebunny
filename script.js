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

    html += `<p><b>🐰 Score:</b> ${result.score}/10 - ${getScoreLabel(result.score)}</p>`;

    if (result.issues.length === 0) {
        html += `<p>✨ Perfect Code! CodeBunny approves 💖</p>`;
    } else {
        result.issues.forEach(i => {
            html += `<p>🫧 ${i}</p>`;
        });
    }

    output.innerHTML = html;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function downloadReport() {
    let text = document.getElementById("output").innerText;

    let blob = new Blob([text], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "codebunny-report.txt";
    a.click();
}