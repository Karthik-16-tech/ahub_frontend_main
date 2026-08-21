import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
  fallbackSrc?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt = "",
  className,
  containerClassName,
  priority = false,
  fallbackSrc,
  loading,
  decoding,
  fetchPriority,
  style,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError && fallbackSrc) {
      setHasError(true);
    }
    if (onError) {
      onError(e);
    }
  };

  const activeSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <img
      src={activeSrc}
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding ?? "async"}
      // @ts-expect-error fetchpriority is standard in modern browsers
      fetchpriority={fetchPriority ?? (priority ? "high" : "auto")}
      onLoad={handleLoad}
      onError={handleError}
      className={cn(
        "transition-opacity duration-300 ease-out",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      style={style}
      {...props}
    />
  );
}
