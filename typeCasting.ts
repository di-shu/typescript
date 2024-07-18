const img = document.getElementById("#img");
// img is typed as HTMLElement now

// img.src - Error

const imgAsImageType = document.getElementById("#img") as HTMLImageElement;
// HTMLElement casted to HTMLImageElement

// imgAsImageType.src - works
