function reviewCode(code) {
    let issues = [];
    let score = 10;

    if (!code || code.trim() === "") {
        return { issues: ["🐰 Code is empty!"], score: 0 };
    }

    // ❌ Rule: any empty function
    if (code.includes("function") && code.includes("() {}")) {
        issues.push("⚠️ Empty function detected");
        score -= 1;
    }

    // ❌ Rule: deep nesting (very basic check)
    let nesting = (code.match(/{/g) || []).length;
    if (nesting > 5) {
        issues.push("🧠 Code seems too complex (high nesting)");
        score -= 2;
    }

    // ❌ Rule: missing const/let usage
    if (code.includes("var ")) {
        issues.push("💡 Replace 'var' with let/const");
        score -= 1;
    }

    // ❌ Rule: long lines (basic heuristic)
    let lines = code.split("\n");
    lines.forEach(line => {
        if (line.length > 80) {
            issues.push("📏 Long line detected (>80 chars)");
            score -= 1;
        }
    });

    // ❌ Rule: multiple console logs
    let logs = (code.match(/console\.log/g) || []).length;
    if (logs > 2) {
        issues.push("🐛 Too many console.log statements");
        score -= 1;
    }

    if (score < 0) score = 0;

    return { issues, score };
}