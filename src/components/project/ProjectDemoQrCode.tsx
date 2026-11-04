import { Smartphone } from "lucide-react";
import { Typography } from "../Typography";

type ProjectDemoQrCodeProps = {
  src: string;
  projectName: string;
};

export function ProjectDemoQrCode({ src, projectName }: ProjectDemoQrCodeProps) {
  return (
    <aside className="hidden w-fit items-center gap-3 rounded-lg border border-base-content/10 bg-base-100 p-1.25 pr-2 lg:flex">
      <div className="flex size-32 flex-none items-center justify-center rounded-md bg-white p-1">
        <img
          className="size-full"
          src={src}
          alt={`QR code de la démo ${projectName}`}
        />
      </div>
  
      <div className="min-w-0 max-w-45 pr-2.5">
        <Typography as="p" variant="p5">
          <Smartphone
            className="mr-1 inline size-6 stroke-[2.1] align-[-0.1875em]"
            aria-hidden="true"
          />
          Scannez le QR code pour tester Mealo sur votre téléphone.
        </Typography>
      </div>
    </aside>
  );
}
