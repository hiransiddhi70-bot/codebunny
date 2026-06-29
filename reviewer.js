function reviewCode(code) {
    let issues = [];
    let score = 10;

    if (!code || code.trim() === "") {
        return { issues: ["🐰 Code is empty!"], score: 0 };
    }

    // ❌ Empty function check
    if (code.includes("function") && code.includes("() {}")) {
        issues.push("⚠️ Empty function detected");
        score -= 1;
    }

    // ❌ var usage
    if (code.includes("var ")) {
        issues.push("💡 Replace 'var' with let/const");
        score -= 1;
    }

    // ❌ long line check
    let lines = code.split("\n");
    lines.forEach(line => {
        if (line.length > 80) {
            issues.push("📏 Long line detected (>80 chars)");
            score -= 1;
        }
    });

    // ❌ too many console logs
    let logs = (code.match(/console\.log/g) || []).length;
    if (logs > 2) {
        issues.push("🐛 Too many console.log statements");
        score -= 1;
    }

    if (score < 0) score = 0;

    return { issues, score };
}