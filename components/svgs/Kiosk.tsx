import * as React from "react";
import { motion } from "framer-motion";

function Kiosk({ backgroundColor }: { backgroundColor: any }) {
  const buttonStyles =
    "hover:fill-blue-500 transition-all hover:blur-xs hover:translate-y-[.8px]";
  console.log(backgroundColor);

  return (
    <svg
      width={442}
      height={1145}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M14 793L37 32c137.6-63.2 329.479-16 330 6 4.5 190 12.7 607 9.5 755-136.8 148-301 61.667-362.5 0z"
        fill="#878787"
      />
      <path
        d="M373.328 324.676l-4.148-188.5a8 8 0 017.998-8.176h53.469a8 8 0 017.998 7.852l2.829 152.745a8 8 0 01-.427 2.731l-12.199 35.755a8 8 0 01-7.571 5.417h-39.951a8 8 0 01-7.998-7.824z"
        fill="#141414"
      />
      <path
        d="M63 372.5l9.5-324H331l5.5 324H63z"
        fill="url(#prefix__paint0_linear_106_238)"
        stroke="#000"
      />
      <g filter="url(#prefix__filter0_d_106_238)">
        <rect x={108} y={461} width={86} height={23} rx={3} fill="#2A2A2A" />
      </g>
      <g filter="url(#prefix__filter1_d_106_238)">
        <rect
          x={227}
          y={413}
          width={110}
          height={91}
          rx={3}
          fill="url(#prefix__paint1_linear_106_238)"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M426.804 170.481l-49.696-.444a4 4 0 00-4.035 4.071l1.873 104.963a4 4 0 003.999 3.929h53.989a4 4 0 004-4.065l-1.413-86.906a3.107 3.107 0 00-1.863-2.797 3.107 3.107 0 01-1.853-2.587l-1.051-12.499a4 4 0 00-3.95-3.665z"
        fill="#D9D9D9"
      />
      <path
        fill="url(#prefix__paint2_linear_106_238)"
        d="M380 176h45v62h-45z"
      />
      <g filter="url(#prefix__filter2_d_106_238)">
        <rect
          x={382}
          y={244}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter3_d_106_238)">
        <rect
          x={382}
          y={253}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter4_d_106_238)">
        <rect
          x={382}
          y={262}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter5_d_106_238)">
        <rect
          x={382}
          y={271}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter6_d_106_238)">
        <rect
          x={394}
          y={244}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter7_d_106_238)">
        <rect
          x={394}
          y={253}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter8_d_106_238)">
        <rect
          x={394}
          y={262}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter9_d_106_238)">
        <rect
          x={394}
          y={271}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter10_d_106_238)">
        <rect
          x={406}
          y={244}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter11_d_106_238)">
        <rect
          x={418}
          y={244}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter12_d_106_238)">
        <rect
          x={418}
          y={253}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter13_d_106_238)">
        <rect
          x={418}
          y={262}
          width={10}
          height={16}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter14_d_106_238)">
        <rect
          x={406}
          y={253}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter15_d_106_238)">
        <rect
          x={406}
          y={262}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <g filter="url(#prefix__filter16_d_106_238)">
        <rect
          x={406}
          y={271}
          width={10}
          height={7}
          rx={2}
          fill="#8D8D8D"
          className={`${buttonStyles}`}
        />
      </g>
      <motion.g fill={backgroundColor}>
        <ellipse
          cx={154.779}
          cy={637.755}
          rx={12.5}
          ry={27.827}
          transform="rotate(-11.458 154.779 637.755)"
        />
        <ellipse
          cx={243.276}
          cy={639.114}
          rx={12.5}
          ry={27.827}
          transform="rotate(15 243.276 639.114)"
        />
        <path d="M118 660.5L95.5 670c-2.5 1.056 13.5 7 17.5 8 69.6 85.6 142.333 36.333 170 1 5.167-2.333 16.1-7.4 18.5-9 3-2-15.5-7.5-22-9-59.5 93-134.333 38.833-161.5-.5z" />
      </motion.g>
      <path
        d="M1.5 1098.02V1091c0-5.52 4.437-10 9.96-10h371.121c5.344 0 9.717 4.24 9.105 9.55-4.152 36.03-41.241 52.73-56.239 53.43-.642.03-1.282-.05-1.913-.17C152.22 1108.62 73.457 1142 49.5 1144c-18.323 1.53-38.104-25.67-46.826-41.33-.79-1.43-1.174-3.02-1.174-4.65z"
        fill="#161616"
      />
      <path
        d="M83.52 1122L79 841c93.609 54.85 193.17 28.354 230.5 5.5 0 80.335-1.5 243.5-1.5 275.5-81.154-19.11-183.468-7.96-224.48 0z"
        fill="#1A1A1A"
      />
      <path
        d="M348 1127.5c95.6-51.2 14.5-108.33-38-130.5v128c7.5.83 25.6 2.5 38 2.5zM47.36 1127.04c-95.86-56.54-16.866-108.49 35.217-131.888l2.775 128.558c-7.491 1-25.577 3.06-37.992 3.33z"
        fill="#505050"
      />
      <defs>
        <filter
          id="prefix__filter0_d_106_238"
          x={105}
          y={461}
          width={92}
          height={30}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={2}
            in="SourceAlpha"
            result="effect1_dropShadow_106_238"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_d_106_238"
          x={220}
          y={412}
          width={124}
          height={105}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            in="SourceAlpha"
            result="effect1_dropShadow_106_238"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter2_d_106_238"
          x={379}
          y={243}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter3_d_106_238"
          x={379}
          y={252}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter4_d_106_238"
          x={379}
          y={261}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter5_d_106_238"
          x={379}
          y={270}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter6_d_106_238"
          x={391}
          y={243}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter7_d_106_238"
          x={391}
          y={252}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter8_d_106_238"
          x={391}
          y={261}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter9_d_106_238"
          x={391}
          y={270}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter10_d_106_238"
          x={403}
          y={243}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter11_d_106_238"
          x={415}
          y={243}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter12_d_106_238"
          x={415}
          y={252}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter13_d_106_238"
          x={415}
          y={261}
          width={16}
          height={22}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter14_d_106_238"
          x={403}
          y={252}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter15_d_106_238"
          x={403}
          y={261}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter16_d_106_238"
          x={403}
          y={270}
          width={16}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_238"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_238"
            result="shape"
          />
        </filter>
        <linearGradient
          id="prefix__paint0_linear_106_238"
          x1={83}
          y1={78}
          x2={337}
          y2={215.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0.64} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_106_238"
          x1={229.5}
          y1={423}
          x2={337}
          y2={504}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B2B2B" />
          <stop offset={1} stopOpacity={0.67} />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear_106_238"
          x1={391}
          y1={182.5}
          x2={419}
          y2={222.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0.7} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Kiosk;
