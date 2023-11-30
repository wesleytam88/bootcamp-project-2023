import Link from "next/link";
import Image from "next/image";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
};

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  image,
  image_alt,
  link,
}) => (
  <div className="project">
    <Link href={link}>
      <Image
        className="project-image"
        src={image}
        alt={image_alt}
        width={500}
        height={491}
      ></Image>
    </Link>
    <div className="project-details">
      <p className="project-name">
        <strong>{name}</strong>
      </p>
      <p className="project-description">{description}</p>
      <Link href={link}>LEARN MORE</Link>
    </div>
  </div>
);

export default Project;
