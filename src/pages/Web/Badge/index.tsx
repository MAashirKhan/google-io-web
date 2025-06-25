import React, { useRef, useState } from "react";
import overlayImg from "/assets/try.svg";
import Dropzone, { DropEvent, FileRejection } from "react-dropzone";
import html2canvas from "html2canvas";
import profilet from "/assets/profilet.png";
import { saveAs } from "file-saver";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import ReactGA from 'react-ga4';
import { MdUpload, MdDownload, MdClear, MdRotateRight, MdSave } from "react-icons/md";

const Badge: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [rotation, setRotation] = useState<number>(90);
  const [display, setDisplay] = useState<string>("none");
  const cropperRef = useRef<any>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Gradient colors (same as team section)
  const gradients = [
    "linear-gradient(135deg,#fbbc04,#ff902a,#ea4335)", // Yellow to orange to red
    "linear-gradient(135deg,#34a853,#2daeb8,#4285f4)", // Green to teal to blue
  ];

  const onCropHandler = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      setImageSrc(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleDrop = (acceptedFiles: File[], _: FileRejection[], __: DropEvent) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result as string);
    };

    reader.readAsDataURL(file);
    setDisplay("grid");
  };

  const handleDownload = () => {
    if (imageSrc) {
      const element = document.getElementById("image-container");
      if (element) {
        html2canvas(element, {
          backgroundColor: null, // Transparent background
        }).then((canvas) => {
          canvas.toBlob((blob) => {
            if (blob) saveAs(blob, "devfest_image.png");
          }, "image/png");
        });
      }
    }
    ReactGA.event({
      category: 'Badge',
      action: 'Clicked',
      label: 'Badge Created',
    });
  };

  const handleClear = () => {
    setImageSrc(null);
    setRotation(90);
    setDisplay('none')
  }

  return (
    <div className="flex justify-center items-center px-4 pt-32 pb-16 min-h-screen">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-black mb-4">
            Create Your Badge
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your photo and generate a personalized badge to showcase your participation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <div 
              className="rounded-xl shadow-lg p-1"
              style={{ background: gradients[0] }}
            >
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MdUpload size={24} />
                  Upload Your Photo
                </h3>
                <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps, isDragActive }) => (
                    <div 
                      {...getRootProps()} 
                      className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 ${
                        isDragActive ? 'border-blue-400 bg-blue-50' : ''
                      }`}
                    >
                      <input {...getInputProps()} />
                      <div className="flex flex-col items-center gap-4">
                        <MdUpload size={48} className="text-gray-400" />
                        <div>
                          <p className="text-lg font-medium text-gray-700">
                            {isDragActive ? 'Drop your image here' : 'Drag & drop your image here'}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            or click to select from your device
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                disabled={!imageSrc}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  imageSrc 
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                <MdDownload size={20} />
                Download Badge
              </button>
              
              <button
                onClick={handleClear}
                disabled={!imageSrc}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  imageSrc 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg' 
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
              >
                <MdClear size={20} />
                Clear
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div 
            className="rounded-xl shadow-lg p-1"
            style={{ background: gradients[1] }}
          >
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Badge Preview
              </h3>
              <div className="flex justify-center">
                <div id="image-container" className="relative">
                  <div className="image-container">
                    <div className="square-wrapper">
                      <img src={imageSrc ? imageSrc : profilet} alt="Avatar" className="image" />
                    </div>
                    <div className="overlay">
                      <img src={overlayImg} alt="Overlay" />
                    </div>
                  </div>
                </div>
              </div>
              {!imageSrc && (
                <p className="text-center text-gray-500 mt-4">
                  Upload an image to see your badge preview
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Crop Dialog */}
        <dialog 
          id="dialog" 
          style={{ display }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            ref={dialogRef}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Crop Your Image
              </h3>
              <div className="mb-6">
                <Cropper
                  src={imageSrc || profilet}
                  style={{
                    height: "400px",
                    width: "100%",
                  }}
                  initialAspectRatio={1 / 1}
                  aspectRatio={1 / 1}
                  guides={false}
                  ref={cropperRef}
                />
              </div>
              
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setRotation((prevRotation) => (prevRotation < 360 ? prevRotation + 90 : 90));
                    cropperRef.current?.cropper.rotateTo(rotation);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                >
                  <MdRotateRight size={18} />
                  Rotate
                </button>
                
                <button
                  onClick={() => {
                    onCropHandler();
                    setDisplay("none");
                  }}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all"
                >
                  <MdSave size={18} />
                  Save & Apply
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Badge;
