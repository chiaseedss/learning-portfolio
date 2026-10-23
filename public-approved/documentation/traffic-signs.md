# Philippine traffic sign detection

YOLOv8n detection of five Philippine traffic-sign classes, with validation and external-dataset evaluation.

## Methodology

- YOLO-format bounding boxes mapped to five classes; training balanced to 605 images (121 per class).
- YOLOv8n fine-tuned for 80 epochs at 640-pixel input size; fixed-threshold evaluation uses confidence 0.70 and NMS IoU 0.70.
- Rule-based displayed suggestions accompany detected signs; no physical robot control.

## Results

- Notebook saved validation: 386 images, precision/recall/F1 0.997409 at confidence 0.70; mAP50 0.995; mAP50-95 0.854614.
- Notebook saved external: 265 images, precision 0.865591, recall 0.607547, F1 0.713969; mAP50 0.731875; mAP50-95 0.52286.

Historical project records; no new experiments were run.

## Limitations

- Additional modules, evaluation files and trained checkpoint referenced by the notebook are not included; the standalone webcam application is unavailable from the published files alone.
- External-test recall is 0.6075, substantially below validation recall; results cover only five classes.

## Contributors

Robopuff Girls: Agnote, Rovilyn Doroin, Ivy; Moico, Mary Joyce; Olivares, Tischia Ann (repository owner); Quite, Rona Mae; Tercero, Michelle. Names follow the published README.

[Project README](https://github.com/chiaseedss/philippine-traffic-sign-detection#readme)
