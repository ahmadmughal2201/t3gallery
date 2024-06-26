import { getImage } from "~/server/queries";
import { clerkClient } from "@clerk/nextjs/server";

export default async function PhotoModal({
    params: { id: photoId }
}: { params: { id: string }; }) {

    const idAsNumber = Number(photoId);
    const image = await getImage(idAsNumber);
    const userInfo = await clerkClient.users.getUser(image.userId);


    return (
        <div className="bg-zinc-900/70 p-6 rounded-lg shadow-lg w-full h-full ">
            <div className="  md:flex  gap-4 ">
                <div className="w-full md:w-2/3 h-64 md:h-auto relative">
                    <img src={image.url} alt={image.name} className="rounded-lg object-contain w-full h-full" />
                </div>
                <div className="flex flex-col items-start md:items-center md:justify-center  p-4 bg-gradient-to-b  from-[#15162c] to-[#110620]  text-white rounded-lg shadow-md w-full md:w-1/3 ">

                    <div className="items-start">
                        <div className="text-xl mb-2">
                            <span className=" font-bold">Name: </span>{image.name}
                        </div>
                        <div className="text-xl  mb-2">
                            <span className=" font-bold">Created at: </span>{image.createdAt.toLocaleDateString()}
                        </div>
                        <div className="text-xl  mb-2">
                            <span className=" font-bold">Uploaded by: </span>{userInfo.fullName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
