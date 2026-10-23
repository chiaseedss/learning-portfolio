# Image compression and quality retention study

Comparison of JPEG, WebP and PNG encoding across 20 images using size, encoding time, PSNR and SSIM.

## Methodology

- Five images in each of four categories: graphics, photographs, text-based and high-resolution images.
- JPEG/WebP quality 90, 70 and 50; PNG compression level 9.
- Encoded size, time, PSNR and SSIM recorded in 140 historical observations.

## Results

- Historical mean SSIM: JPEG-90 0.983685; JPEG-70 0.960740; WebP-90 0.984870; WebP-70 0.961335; PNG 1.000000.
- For g_1.png, JPEG-90 exceeds the input file size; encoding does not always reduce storage.

Historical project records; no new experiments were run.

## Limitations

- The aggregate-summary code drops PNG rows with empty quality values, though PNG is present in the historical results table.
- Encoding times depend on the original execution environment.

## Contributors

Tischia Ann R. Olivares — Individual Academic Project.

[Project README](https://github.com/chiaseedss/image-compression-quality-study#readme)
