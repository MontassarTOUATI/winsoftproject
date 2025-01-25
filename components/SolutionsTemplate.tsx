import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface SolutionsTemplateProps {
  title: string;
  subtitle: string;
  mainImage: StaticImageData;
  featureIcons: { src: StaticImageData; alt: string }[];
  description: string[];
  bullets?: string[];
  additionalInfo?: string[];
  additionalText?: string;
  downloadLink?: string;
}

const SolutionsTemplate = ({
  title,
  subtitle,
  mainImage,
  featureIcons,
  description,
  bullets,
  additionalInfo,
  additionalText,
  downloadLink,
}: SolutionsTemplateProps) => {
  const splitTitle = title.split(" ");

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-14">
          <div className="grid grid-cols-3 lg:flex-row items-center gap-10">
            {/* Image Section */}
            <Image
              alt={subtitle}
              src={mainImage}
              className="w-full rounded-3xl bg-white object-cover max-sm:h-80 aspect-[1/1]"
            />

            {/* Description Section */}
            <div className="col-span-2 grid gap-8 text-gray-900">
              <h1 className="text-6xl font-extrabold tracking-tighter">
                <span className="text-black">{splitTitle[0]}</span>{" "}
                <span className="text-orange-600">
                  {splitTitle.slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-2xl">{subtitle}</p>

              <div className="flex gap-4">
                {featureIcons.map((icon, index) => (
                  <Image
                    key={index}
                    alt={icon.alt}
                    src={icon.src}
                    className="max-w-28"
                  />
                ))}
              </div>

              {/* Dynamically rendering paragraphs */}
              <div className="grid gap-4">
                {description.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}

                {bullets && bullets.length > 0 && (
                  <ul className="list-disc pl-8">
                    {bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {additionalInfo && additionalInfo.length > 0 && (
                  <div>
                    {additionalInfo.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))}
                  </div>
                )}

                <p className="font-bold">{additionalText}</p>
              </div>

              <div>
                <a href={downloadLink} download target="_blank">
                  <Button className="text-xl px-7 py-7 rounded-full border-2 border-transparent hover:border-orange-600 hover:bg-white hover:text-orange-600">
                    Télécharger
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsTemplate;
