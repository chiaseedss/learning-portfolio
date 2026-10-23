# Fashion-MNIST CNN Optimizer Comparison

## Overview

A comparison of SGD with momentum, Adam and RMSProp on a shared CNN architecture for ten-class Fashion-MNIST classification.

## Objectives

- Same CNN with three optimizers
- Training curves
- Sample prediction comparison

## Technologies Used

Python, TensorFlow/Keras, NumPy, Matplotlib.

## Methodology and Implementation

- Normalize 28×28 grayscale inputs and add a channel dimension.
- Three Conv2D layers (64/128/256 filters, 5×5, same padding) alternate with max pooling; Flatten, Dense(256) and a ten-class softmax complete the model.
- Each optimizer uses learning rate 0.001, 10 epochs, batch size 32 and validation_split=0.33; SGD uses momentum 0.9.

## Results and Outputs

- Historical model.evaluate test accuracy: SGD 0.8850; Adam 0.9047; RMSProp 0.9013.
- Training/validation curves and sampled prediction comparisons are saved in the original notebook.

## Limitations

- Single runs do not establish multi-seed uncertainty or optimizer superiority across settings.

## Contributors

Tischia Ann R. Olivares — Individual Academic Project; sole author named in the project report.

## Dataset

Loaded using Keras. Dataset images and saved media are not redistributed in the prepared package.

[Fashion-MNIST — Zalando Research](https://github.com/zalandoresearch/fashion-mnist)

## Repository

[View Repository](https://github.com/chiaseedss/fashion-mnist-optimizer-comparison)
