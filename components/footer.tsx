import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 Store, Inc . All rights reserved.{" "}
          <a
            className=" text-md font-medium "
            href=" https://wa.me/01120920078"
            target="_blank"
          >
            contact us on whatsapp
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
