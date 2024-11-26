"use client";
import Link from "next/link";
import useViewTransition from "@/hooks/useViewTransitionRouter";

export default function Navigation() {
  const startViewTransition = useViewTransition();

  const handleViewTransition = async () => {
    await startViewTransition({
      classNames: ["page-transition"],
    });
  };
  return (
    <ul>
      <li>
        <Link onClick={handleViewTransition} href={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link onClick={handleViewTransition} href={"/about"}>
          About
        </Link>
      </li>
      <li>
        <Link onClick={handleViewTransition} href={"/contact"}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
