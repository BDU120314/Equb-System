import { CloudinaryContext } from "cloudinary-react";

const frontendCloudinaryConfig = {
  cloudName: "dig01gy61",
  apiKey: "685285542168812",
  apiSecret: "zqklFF3wTPFBkUVuCBL4ohMIfMw",
};

export const Cloudinary = ({ children }) => (
  <CloudinaryContext cloudName={frontendCloudinaryConfig.cloudName}>
    {children}
  </CloudinaryContext>
);
