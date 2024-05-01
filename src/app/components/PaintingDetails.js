"use client"
import React, {useRef} from 'react';
import Draggable from 'react-draggable';

const PaintingDetails = () => {
  const imageRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative md:w-[700px] md:h-[450px] min-w-80 min-h-48 aspect-w-4 aspect-h-3 border-2 border-gray-400 mt-4 mx-auto">
        <Draggable bounds="parent" scale={1}>
          <img
            src="https://10pct-img-storage.s3.ap-northeast-1.amazonaws.com/tenant/A00001/rep_room/1/1714356163859.png"
            alt="Painting"
            className="object-contain absolute w-24 h-16 md:w-48 md:h-32"
            ref={imageRef}
          />
        </Draggable>
      </div>
      <div className="flex flex-col gap-8 items-center mt-8 md:w-[50%] w-[90%]">
        <h2 className="font-bold text-2xl sm:text-4xl">Image Title</h2>
        <div className="overflow-y-auto h-64 md:max-h-52 mt-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <p className="mt-2 px-2">
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
            Image Description (Long description that should be scrollable if it exceeds the container height)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetails;