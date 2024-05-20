import Link from "next/link";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-4">Not Found</h1>
        <Link href={"/"}>Voler al inicio</Link>
      </div>
    </section>
  );
}

export default NotFound;
