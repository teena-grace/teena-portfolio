"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Candidate = {
  src: string;
  alt: string;
};

const candidates: Candidate[] = [
  { src: "/profile-photo.jpg", alt: "Teena Jadhao profile photo" },
  { src: "/profile-photo.png", alt: "Teena Jadhao profile photo" },
  { src: "/profile.png", alt: "Teena Jadhao profile photo" },
];

export default function ProfilePhoto() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => candidates[index], [index]);

  if (!current) {
    return (
      <div className="photo-fallback">
        <span>Photo</span>
        <p>Add `public/profile-photo.jpg`</p>
      </div>
    );
  }

  return (
    <div className="photo-shell card-tilt">
      <Image
        src={current.src}
        alt={current.alt}
        className="photo-image"
        fill
        sizes="(max-width: 980px) 80vw, 26rem"
        unoptimized
        onError={() => setIndex((value) => value + 1)}
      />
      <div className="photo-overlay">
        <span>Teena Jadhao</span>
        <p>AI Engineering Student</p>
      </div>
    </div>
  );
}
