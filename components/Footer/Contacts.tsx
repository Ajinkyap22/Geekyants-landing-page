import React from "react";

import Image from "next/image";
import uniqid from "uniqid";

type Props = {
  contacts: {
    country: string;
    company: string;
    address: string;
    phone: string;
  }[];
};

const Contacts = ({ contacts }: Props) => {
  return (
    <div className="grid md:grid-cols-3 mt-10 gap-10 pt-12">
      {contacts.map((contact) => (
        <div key={uniqid()}>
          {/* title */}
          <h6 className="flex items-center">
            <Image
              src={contact.country}
              width="0"
              height="0"
              sizes="100vw"
              className="w-6 mr-2"
              alt="flag"
            />

            <span className="text-white opacity-70">{contact.company}</span>
          </h6>

          {/* address */}
          <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
            <span className="block leading-6">{contact.address}</span>

            <div className="leading-6 pt-2 flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90"
              >
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
              </svg>

              <span className="block px-3">{contact.phone}</span>
            </div>
          </address>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
