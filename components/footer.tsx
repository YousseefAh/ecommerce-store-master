import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 Store, Inc . All rights reserved.{" "}
          <a
            className=" text-md font-medium "
            href=" https://wa.me/+201120920078"
            target="_blank"
          >
           to create a store click here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
