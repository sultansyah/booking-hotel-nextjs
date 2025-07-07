import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Who we are"
}

const AboutPage = () => {
    return (
        <div>
            <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet." />
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image
                        src="/about-image.jpg"
                        width={650}
                        height={579}
                        alt="about image"
                    />
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">
                            Who We Are
                        </h1>
                        <p className="text-gray-700 py-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
                            molestias officia! Provident, nihil rerum! Ipsum laborum
                            reiciendis ad accusantium!
                        </p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoEyeOutline className="size-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Vision : </h4>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Velit quod reiciendis perspiciatis consequuntur odio
                                        doloremque!
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Mision : </h4>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Aliquam, corrupti similique odio consequatur consequuntur
                                        dolorum neque dolore illum repellendus natus.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
