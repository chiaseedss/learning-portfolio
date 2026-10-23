# Learning Portfolio

An academic Computer Science portfolio by Tischia Ann R. Olivares, presenting eleven projects across Computer Vision, collaborative systems and robotics, Artificial Intelligence, Machine Learning and Application Development. Detail pages explain objectives, methods, documented results, limitations and contributors.

[**View My Learning Portfolio**](https://chiaseedss.github.io/learning-portfolio/)

The live site is available at this address. This final selection is prepared locally and requires the updated website files to be uploaded before it appears online.

## Featured Projects (4)

- [Philippine traffic sign detection](https://github.com/chiaseedss/philippine-traffic-sign-detection) — YOLOv8n detection of five Philippine traffic-sign classes, with validation and external-dataset evaluation.
- [Fish classification and image resolution experiment](https://github.com/chiaseedss/fish-classification-resolution-study) — Nine-class fish classification comparing three image resolutions using a dense neural network, rather than a CNN.
- [Image compression and quality retention study](https://github.com/chiaseedss/image-compression-quality-study) — Comparison of JPEG, WebP and PNG encoding across 20 images using size, encoding time, PSNR and SSIM.
- [Coin image preprocessing and edge detection](https://github.com/chiaseedss/coin-image-preprocessing) — Classical image preprocessing and Sobel gradients for emphasizing coin boundaries; no denomination classification or automatic counting.

## Collaborative Projects (4)

- [EduROOM classroom reservation system](https://github.com/tbhcoding/EduROOM) — Team-developed classroom reservation and scheduling application using Python, Flet, MySQL, WebSockets and Microsoft Azure.
- [Robopuff: Line Follower Robot](https://github.com/chiaseedss/robopuff-line-follower) — A collaborative Arduino robot controller using five digital line-sensor inputs and differential motor steering.
- [Fuzzy Logic Obstacle Avoidance Robot](https://github.com/chiaseedss/fuzzy-obstacle-avoidance) — Two Arduino implementations of reactive obstacle avoidance: a servo-scanned single ultrasonic sensor and a three-sensor fuzzy controller.
- [Farmers Market Management System](https://github.com/chiaseedss/farmers-market-system) — A Flask/MySQL application for vendor, product, inventory and order administration with customer purchasing and receipts.

## Other Coursework (3)

- [Fashion-MNIST CNN Optimizer Comparison](https://github.com/chiaseedss/fashion-mnist-optimizer-comparison) — A comparison of SGD with momentum, Adam and RMSProp on a shared CNN architecture for ten-class Fashion-MNIST classification.
- [Climate-Based Crop Yield Estimation Using Artificial Neural Networks](https://github.com/chiaseedss/climate-based-crop-yield-estimation) — A feedforward neural-network regression study estimating crop yield from four climate-related variables on synthetic agricultural data.
- [Weather Application](https://github.com/chiaseedss/cccs106-projects/tree/main/mod6_labs/weather_app) — A Flet application that presents city/location weather, forecasts and search history through an asynchronous weather-service layer.

## Academic Evidence and Attribution

The four Computer Vision projects retain their established descriptions, saved results, repository links and available demonstrations. Measurements are historical, not rerun benchmarks.

EduROOM retains its published team roles. Robotics contributors are Tischia Ann Olivares, Michelle Tercero and Rona Mae Quite; individual responsibilities remain undocumented. Farmers Market credits Sean Xander B. Aquino, Remar F. Malanon and Tischia Ann R. Olivares, with roles documented on its project page.

Fashion-MNIST and Crop Yield identify Olivares as sole author in their reports; the Weather lab documentation also identifies Olivares. No personal contact details or student identifiers are published.

Crop Yield reports MAE 0.7285, RMSE 0.8594 and R² 0.3003 on synthetic data; fitting its scaler before splitting is retained as an important methodological limitation.

## Exploring the Collection

Use the academic-category buttons and keyword search together. Other Coursework selects Fashion-MNIST, Crop Yield and Weather; these projects also remain available under their academic disciplines. Only one category button is active at a time. Each card opens a detail page with implementation, findings, limitations, contributors and verified source links where available. Weather links directly to its existing module inside the CCCS106 repository. No duplicate Weather repository or source package is created. All eleven project entries link to verified public repositories or the exact existing project location.

## Photographs, Datasets and Privacy

Two actual robot photographs remain on cards and detail pages as optimized copies; original photographs are unchanged. The line-follower caption notes that its five-sensor array is not visible. Robot videos remain excluded pending sharing and participant permissions.

Restricted images and datasets, API keys, .env files, location histories and private records remain excluded throughout the website.

## Local Development and Pages

Requires Node.js 22.12+. Run `npm ci`, `npm run build`, `npm run validate` and `npm run dev`. Build before validating changed content because validation also inspects dist/.

The `/learning-portfolio/` base path, hash routes, responsive yellow theme and GitHub Actions Pages workflow are preserved. Only public-approved/ contributes public notes and photographs. Upload the final project data, filters, validation script, README and matching approved documentation together; remove stale excluded-project documentation from the website repository. Do not upload internal preparation files, backups, research datasets, repository packages, node_modules or build caches.
