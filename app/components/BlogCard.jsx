import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ image, title, excerpt, slug = "#" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        {/* <Link href={slug} className="text-blue-600 hover:underline font-medium">
          Read More →
        </Link> */}
      </div>
    </div>
  );
};

export default BlogCard;
