# Number Plate Detection Using YOLOv8n and PaddleOCR

## Overview

This project focuses on detecting vehicle number plates using the YOLOv8n object detection model and PaddleOCR for optical character recognition (OCR). The goal is to accurately identify and read number plates from vehicle images.

### Project Details

- **Model Used**: YOLOv8n
- **OCR Tool**: PaddleOCR
- **Training Images**: 640
- **Validation Images**: 180
- **Project Provided By**: Machine Learning 1 Pvt Ltd
- **Project Completed By**: Majid Hanif

## Results

The YOLOv8n model, combined with PaddleOCR, has been utilized for detecting and reading vehicle number plates. Here are the detailed performance metrics of the model:

- **Precision (P)**: 0.988
- **Recall (R)**: 0.968
- **mAP@50**: 0.982
- **mAP@50-95**: 0.765
- **Speed**: 0.4ms preprocess, 3.3ms inference, 0.0ms loss, 5.4ms postprocess per image

Training and validation were completed with the following results:
- **Epochs**: 100
- **Training Time**: 0.426 hours
- **Final Weights Size**: 6.3MB

The results show the model's effectiveness in accurately identifying and extracting number plates from the dataset.

## Getting Started

### Prerequisites

- Python 3.8 or later
- Required Python libraries:
  - `ultralytics`
  - `paddleocr`
  - `opencv-python`
  - `numpy`
  - `matplotlib`
  - `pandas`

### Clone project

1. Clone the repository:
   
   git clone https://github.com/majidhanif230/Number_Plate_Detection_Yolov8n.git

   cd Number_Plate_Detection_Yolov8n


### Usage

1. Prepare your dataset by placing images in the `data` folder.

2. Train the YOLOv8n model:
    Run the Script Number_Plate_100_epoch.ipynb

3. Run detection and OCR:

    Run the Script Number_Plate_Testing.ipynb

### Results

The results of the Traing and Validation store in Moder_result folder .

## Acknowledgements

- **Project Provided By**: Machine Learning 1 Pvt Ltd
- **Project Completed By**: Majid Hanif

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
Free to use
