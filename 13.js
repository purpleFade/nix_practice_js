function roughScale(x) {
    const parsed = parseInt(x, 16);
    if (isNaN(parsed)) { return 0; }
    console.log(parsed);
}

roughScale("FF")