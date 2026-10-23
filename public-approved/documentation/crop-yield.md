# Climate-Based Crop Yield Estimation Using Artificial Neural Networks

## Overview

A feedforward neural-network regression study estimating crop yield from four climate-related variables on synthetic agricultural data.

## Objectives

- Explore relationships between temperature, precipitation, CO₂ emissions and extreme-weather events
- Train an ANN to estimate crop yield in metric tons per hectare
- Compare historical ANN performance with linear regression and random forest

## Technologies Used

Python, TensorFlow/Keras, pandas, NumPy, scikit-learn, Matplotlib, Seaborn.

## Methodology and Implementation

- The report describes a synthetic 10,000-row Climate Change Impact on Agriculture dataset; source drops missing rows and selects four climate features.
- Dense 128 → 64 → 32 ReLU layers with dropout 0.4/0.3 and a linear scalar output; Adam, MSE loss, batch size 32 and up to 100 epochs.
- An 80/20 split reserves test data; the remaining training portion is split again for validation (64/16/20 overall). Early stopping uses validation loss with patience 10.
- The notebook compares the ANN with linear regression and random forest, and includes correlation plots and prediction examples.

## Results and Findings

- Report and saved notebook — ANN test MAE 0.7285 MT/ha, RMSE 0.8594 MT/ha and R² 0.3003.
- Saved notebook comparison — random forest: MAE 0.746094, RMSE 0.888529, R² 0.252008; linear regression: MAE 0.814171, RMSE 0.992408, R² 0.066889.
- The ANN explains approximately 30% of the target variance in this saved synthetic-data test; no field deployment or real-farm validation is documented.

Historical report and notebook metrics agree; no model training or experiments rerun.

## Limitations

- The dataset is synthetic; results do not establish generalization to real farms or future climate conditions.
- StandardScaler is fit before train/test splitting in the source, exposing preprocessing to test-distribution information. The historical metrics are retained with this limitation.
- Only one saved split is shown; limited explained variance and no cross-validation constrain conclusions.
- Agricultural planning applications discussed in the report are prospective uses, not implemented operational decision-support features.

## Dataset

The report identifies a synthetic 10,000-sample Kaggle dataset. Dataset files are not redistributed; obtain the source under its applicable terms.

[Climate Change Impact on Agriculture — Kaggle](https://www.kaggle.com/datasets/waqi786/climate-change-impact-on-agriculture)

## Contributors

Tischia Ann R. Olivares — Individual Academic Project; sole author identified in the final Machine Learning report.

## Repository

[View Repository](https://github.com/chiaseedss/climate-based-crop-yield-estimation)
