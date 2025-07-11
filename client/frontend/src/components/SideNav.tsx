import { LuBrain } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LiaVideoSolid } from "react-icons/lia";

import { TiDocumentText } from "react-icons/ti";
import { FaLink } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { Button } from "./ui/button";
const SideNav = () => {
  return (
    <div className="w-[15%] h-full border-r-4  p-5">
      <h1 className="text-center text-3xl  flex items-center justify-center gap-2">
        <LuBrain className="w-10 h-10 text-blue-500" />
        <span>Second Brain</span>
      </h1>
      <nav className="flex flex-col gap-6 text-xl mt-10 p-2">
        <Button
          variant="ghost"
          size="lg"
          startIcon={<FaXTwitter className="w-6 h-8" />}
          className="flex items-center gap-5 text-xl  hover:text-blue-500"
          text="Tweets"
          onClick={() => console.log("Tweets")}
        />
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-5 text-xl  hover:text-blue-500"
          startIcon={<LiaVideoSolid className="w-6 h-8" />}
          text="Videos"
          onClick={() => console.log("Videos")}
        />
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-5 text-xl  hover:text-blue-500"
          startIcon={<TiDocumentText className="w-6 h-8" />}
          text="Documents"
          onClick={() => console.log("Documents")}
        />
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-5 text-xl  hover:text-blue-500"
          startIcon={<FaLink className="w-6 h-8" />}
          text="Links"
          onClick={() => console.log("Links")}
        />
        <Button
          variant="ghost"
          size="lg"
          className="flex items-center gap-5 text-xl  hover:text-blue-500"
          startIcon={<FaHashtag className="w-6 h-8" />}
          text="Tags"
          onClick={() => console.log("Tags")}
        />
      </nav>
    </div>
  );
};

export default SideNav;
