import { getImage } from "~/server/queries";
import Image from "next/image";
import Modal from "~/app/_components/modal";
import { clerkClient } from "@clerk/nextjs/server";

export default async function PhotoModal({
    params: { id: photoId }
}: { params: { id: string }; }) {

    const idAsNumber = Number(photoId);
    const image = await getImage(idAsNumber);
    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <Modal>
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 md:px-0 px-2">
                <div className="bg-gradient-to-b  from-[#15162c] to-[#110620] p-6  rounded-lg shadow-lg w-full md:w-2/3 relative">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-full h-96">
                            <Image src={image.url} alt={image.name} layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>
                        <div className="flex items-start   p-4    text-white  shadow-md w-full ">

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
            </div>
        </Modal >
    )
}