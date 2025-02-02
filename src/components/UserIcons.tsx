import Image from "next/image";
import { ourUsers } from "../data";

const UserIcons = () => {
  return (
    <>
      {/* show on medium to larges devices */}
      <div className=" hidden md:grid  md:grid-cols-3 lg:grid-cols-5 relative max-w-6xl mx-auto items-center">
        {ourUsers.map((user) => (
          <Image
            src={user.img}
            className=" w-8/10"
            width={150}
            height={120}
            alt="user image "
            key={user.id}
          />
        ))}
      </div>
    </>
  );
};

export default UserIcons;
