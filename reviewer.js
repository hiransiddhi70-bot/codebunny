function reviewCode(code) {
    let issues = [];
    let score = 10;

    if (!code || code.trim() === "") {
        return { issues: ["🐰 Code is empty!"], score: 0 };
    }

    if (code.includes("var ")) {
        issues.push("💡 Use let/const instead of var");
        score -= 1;
    }

    if (code.includes("console.log")) {
        issues.push("⚠️ Remove console.log in production");
        score -= 1;
    }

    let lines = code.split("\n");
    lines.forEach(line => {
        if (line.length > 80) {
            issues.push("📏 Line too long (>80 chars)");
            score -= 1;
        }
    });

    let logs = (code.match(/console\.log/g) || []).length;
    if (logs > 2) {
        issues.push("🐛 Too many console.log statements");
        score -= 1;
    }

    if (score < 0) score = 0;

    return { issues, score };
}