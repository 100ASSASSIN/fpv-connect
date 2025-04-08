// components/SkeletonForm.tsx
import React from 'react';

const SkeletonBox = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
);

const SkeletonForm: React.FC = () => {
  return (
    <div className="p-6 space-y-5 md:space-y-6 sm:p-8">
      <SkeletonBox className="w-1/2 h-7" />
      <SkeletonBox className="w-full h-10" />
      <SkeletonBox className="w-full h-10" />
      <SkeletonBox className="w-full h-10" />
      <SkeletonBox className="w-3/4 h-5" />
      <SkeletonBox className="w-full h-10" />
      <SkeletonBox className="w-2/3 h-5" />
    </div>
  );
};

export default SkeletonForm;
