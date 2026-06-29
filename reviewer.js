function reviewCode(code, language) {

    let issues = [];

    if (!code.trim()) {
        return {
            score: 0,
            issues: [
                {
                    type: "error",
                    message: "😿 Please paste some code first."
                }
            ]
        };
    }

    let score = 10;

    // ---------- JavaScript ----------
    if (language === "js") {

        if (code.includes("var ")) {
            issues.push({
                type: "warning",
                message: "Use 'let' or 'const' instead of 'var'."
            });
            score--;
        }

        if (code.includes("console.log")) {
            issues.push({
                type: "suggestion",
                message: "Remove console.log before production."
            });
            score--;
        }

        if (code.includes("==") && !code.includes("===")) {
            issues.push({
                type: "warning",
                message: "Use strict equality (===)."
            });
            score--;
        }

        try {
            new Function(code);
        } catch (e) {
            issues.push({
                type: "error",
                message: "Syntax Error: " + e.message
            });
            score -= 2;
        }
    }

    // ---------- HTML ----------
    else if (language === "html") {

        if (code.includes("<img") && !code.includes("alt=")) {
            issues.push({
                type: "warning",
                message: "Images should have an alt attribute."
            });
            score--;
        }
    }

    // ---------- CSS ----------
    else if (language === "css") {

        if (code.includes("!important")) {
            issues.push({
                type: "warning",
                message: "Avoid using !important whenever possible."
            });
            score--;
        }
    }

    // ---------- Python ----------
    else if (language === "python") {

        if (code.includes("print(")) {
            issues.push({
                type: "suggestion",
                message: "Use logging instead of print() in production."
            });
            score--;
        }
    }

    // Long line check
    code.split("\n").forEach((line, index) => {
        if (line.length > 100) {
            issues.push({
                type: "suggestion",
                message: `Line ${index + 1} is longer than 100 characters.`
            });
            score--;
        }
    });

    if (score < 0) score = 0;

    return {
        score,
        issues
    };
}