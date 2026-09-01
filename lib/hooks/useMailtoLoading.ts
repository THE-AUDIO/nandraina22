"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FALLBACK_DURATION = 1500;

export function useMailtoLoading({
  onFallback,
}: { onFallback?: () => void } = {}) {
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const opened = useRef(false);
  const fallback = useRef(onFallback);

  useEffect(() => {
    fallback.current = onFallback;
  });

  useEffect(() => {
    const stop = () => {
      if (document.hidden) {
        opened.current = true;
        setLoading(false);
        if (timer.current) clearTimeout(timer.current);
      }
    };
    window.addEventListener("blur", stop);
    document.addEventListener("visibilitychange", stop);
    return () => {
      window.removeEventListener("blur", stop);
      document.removeEventListener("visibilitychange", stop);
    };
  }, []);

  const handleClick = useCallback(() => {
    opened.current = false;
    setLoading(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLoading(false);
      if (!opened.current) fallback.current?.();
    }, FALLBACK_DURATION);
  }, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  return { loading, handleClick };
}