# Coin image preprocessing and edge detection

Classical image preprocessing and Sobel gradients for emphasizing coin boundaries; no denomination classification or automatic counting.

## Methodology

- Grayscale conversion, 5×5 median filtering, 3×3 Gaussian smoothing, sharpening and Sobel X/Y gradients.
- Gradient magnitudes combined and THRESH_TOZERO applied at 50 in code; notebook prose instead states 40.

## Results

- Historical figures show intermediate filtering and edge-emphasis outputs. No accuracy, segmentation metric or coin-count benchmark was established.

Historical project records; no new experiments were run.

## Limitations

- Single-image demonstration with manually selected parameters.
- Threshold discrepancy between code (50) and prose (40) remains unresolved.

## Contributors

Tischia Ann R. Olivares — Individual Academic Project.

[Project README](https://github.com/chiaseedss/coin-image-preprocessing#readme)
