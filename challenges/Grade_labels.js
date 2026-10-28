function gradeLabel(score) {
    if (score > 100 || score < 0) return "Invalid";
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(gradeLabel(101)); //display result
