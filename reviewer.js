function reviewCode(code) {
    let issues = [];
    let score = 10; // start with full marks 💯

    // 🌸 Rule 1: Empty code
    if (!code || code.trim().length === 0) {
        issues.push("🐰 CodeBunny says: Your code is empty!");
        return { issues, score: 0 };
    }

    // 🌸 Rule 2: console.log usage
    if (code.includes("console.log")) {
        issues.push("⚠️ Avoid console.log in production code");
        score -= 1;
    }

    // 🌸 Rule 3: alert usage (bad practice)
    if (code.includes("alert(")) {
        issues.push("⚠️ alert() is not recommended for modern UI");
        score -= 1;
    }

    // 🌸 Rule 4: var usage (old style)
    if (code.includes("var ")) {
        issues.push("💡 Use let/const instead of var");
        score -= 1;
    }

    // 🌸 Rule 5: very short variables (basic heuristic)
    if (code.match(/\b[a-zA-Z]\s*=/g)) {
        issues.push("🧁 Use meaningful variable names");
        score -= 2;
    }

    // 🌸 Rule 6: missing semi-colon hint
    if (code.includes("function") && !code.includes(";")) {
        issues.push("✨ Check for missing semicolons (style suggestion)");
        score -= 1;
    }

    // 💖 Final score clamp
    if (score < 0) score = 0;

    return { issues, score };
}