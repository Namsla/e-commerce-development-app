"use client";
import Link from "next/link";
import React from "react";

function DroppedDownList({ setDropdown }) {
  return (
    <div className="border black rounded font-serif font-xs font-thin dropdown bg-blue-300 p-3 pb-2">
      <ul className="text-sm text-gray-700 dark:text-gray-400">
        <Link
          onClick={() => setDropdown(true)}
          href="/autobiography-books"
          className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <li>Autobiography Books</li>
        </Link>
        <Link
          onClick={() => setDropdown(true)}
          href="/computer-books"
          className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <li>Computer Science Books</li>
        </Link>
        <Link
          onClick={() => setDropdown(true)}
          href="/detective-books"
          className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <li>Detective Books</li>
        </Link>
        <Link
          onClick={() => setDropdown(true)}
          href="/fiction-books"
          className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <li>Fiction Books</li>
        </Link>
        <Link
          onClick={() => setDropdown(true)}
          href="/finance-books"
          className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <li>Finance Books</li>
        </Link>
      </ul>
    </div>
  );
}

export default DroppedDownList;
