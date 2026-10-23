# Fish classification and image resolution experiment

Nine-class fish classification comparing three image resolutions using a dense neural network, rather than a CNN.

## Methodology

- Ground-truth masks excluded; inputs resized to 32×32, 64×64 and 128×128.
- Flatten → Dense(256) → Dense(128) → softmax; 15 epochs for resolution comparisons.
- Saved split counts: 7,200 training, 904 validation and 896 test images.

## Results

- 32×32: comparison-loop accuracy 0.9364; training time 78.2 s.
- 64×64: accuracy 0.9163; training time 108.3 s.
- 128×128: accuracy 0.9152; training time 249.5 s.
- Separate evaluation of the selected 32×32 model: accuracy 0.9375; distinct from its comparison-loop score.

Historical project records; no new experiments were run.

## Limitations

- Confirm held-out split, near-duplicate leakage and correct correspondence between displayed metrics and resolution runs. Dataset downloaded externally; not bundled.
- Validation dataset is subdivided using take/skip without explicit shuffle=False in directory loading; verify stable disjoint membership across iterations. Saved classification report formatting also needs cleanup.

## Contributors

Tischia Ann R. Olivares — Individual Academic Project.

[Project README](https://github.com/chiaseedss/fish-classification-resolution-study#readme)
