const themeBtn = document.getElementById("themeBtn");
const reviewBtn = document.getElementById("reviewBtn");
const copyBtn = document.getElementById("copyBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

copyBtn.addEventListener("click", () => {
    const code = document.getElementById("code").value;

    if (!code.trim()) {
        alert("Paste some code first!");
        return;
    }

    navigator.clipboard.writeText(code)
        .then(() => alert("📋 Code copied successfully!"))
        .catch(() => alert("Copy failed."));
});

reviewBtn.addEventListener("click", () => {

    const code = document.getElementById("code").value;
    const language = document.getElementById("language").value;

    const result = reviewCode(code, language);

    const resultBox = document.getElementById("result");

    resultBox.style.display = "block";

    let html = `
        <div class="score">
            🐰 Code Score: ${result.score}/10
        </div>
    `;

    if (result.issues.length === 0) {
        html += `
            <div class="issue suggestion">
                ✅ Amazing! No issues found.
            </div>
        `;
    } else {

        result.issues.forEach(issue => {

            html += `
                <div class="issue ${issue.type}">
                    ${issue.message}
                </div>
            `;

        });

    }

    resultBox.innerHTML = html;

});