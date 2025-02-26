import React from "react";
import SpinLoader from "./SpinLoader";
import {
  ButtonSizes,
  ButtonTypeVariant,
  ButtonVariants,
} from "@/app/utils/constant";
import { mergeClasses } from "@/app/utils/helpers";

type ButtonStyles = Record<string, string>;

type ButtonProps = {
  title: string;
  textStyles?: string;
  buttonStyles?: string;
  isLoading?: boolean;
  size: ButtonSizes;
  variant: ButtonVariants;
  icon?: any;
  btnKey: any;
  disabled: boolean;
  styles?: ButtonStyles;
  type: ButtonTypeVariant | undefined;
  onClick: () => void;
};

const BUTTON_SIZE_CONFIG: Record<ButtonSizes, string> = {
  [ButtonSizes.EXTRASMALL]: "max-w-xs",
  [ButtonSizes.SMALL]: "max-w-sm",
  [ButtonSizes.MEDIUM]: "max-w-md",
  [ButtonSizes.LARGE]: "max-w-lg",
  [ButtonSizes.EXTRALARGE]: "max-w-xl",
  [ButtonSizes.FIT]: "max-w-fit",
  [ButtonSizes.FULL]: "max-w-full",
};

const BUTTON_VARIANTS_CONFIG: Record<ButtonVariants, string> = {
  [ButtonVariants.PRIMARY]:
    "bg-primary text-white hover:bg-green-600 focus:border-primary ",
  [ButtonVariants.SECONDARY]: "border border-gray-300 hover:bg-secondary",
  [ButtonVariants.DANGER]: "bg-red-500 text-white hover:bg-red-600",
  [ButtonVariants.DISABLED]: "bg-gray-300 text-white hover:bg-gray-400",
  [ButtonVariants.TABS]: "rounded-md px-3 py-2 border-none",
  [ButtonVariants.LINK]:
    "p-0 text-black bg-transparent border-none shadow-none",
};

const DEFAULT_BUTTON_STYLES =
  "text-sm inline-flex items-center justify-center whitespace-nowrap focus:ring-0 focus:outline-0 rounded-lg transition-all cursor-pointer leading-5 focus-visible:outline-primary w-fit items-center gap-x-2 rounded-md px-4 py-2 disabled:opacity-50 disabled:pointer-events-none text-sm shadow-sm transition-all ";

const Button = ({
  title,
  textStyles,
  buttonStyles,
  isLoading,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.FIT,
  icon,
  type = ButtonTypeVariant.BUTTON,
  disabled,
  btnKey,
  styles,
  onClick,
  ...props
}: ButtonProps) => {
  const defaultButtonClasses = mergeClasses(
    DEFAULT_BUTTON_STYLES,
    buttonStyles!,
    isLoading && "cursor-wait bg-gray-300"
  );
  const mergedTextClasses = mergeClasses(textStyles!);
  const defaultSizeClasses = BUTTON_SIZE_CONFIG[size as ButtonSizes];
  const buttonVarientClasses =
    BUTTON_VARIANTS_CONFIG[variant as ButtonVariants];

  const mergedButtonClasses = mergeClasses(
    defaultButtonClasses,
    defaultSizeClasses,
    buttonVarientClasses
  );

  const RenderButtonContent = () => {
    if (!isLoading) {
      const DisplayTitle = () => {
        if (!title) return null;
        return <p className={mergedTextClasses}>{title}</p>;
      };
      return (
        <>
          {icon}
          <DisplayTitle />
        </>
      );
    }
    return (
      <div className="flex items-center justify-center">
        <SpinLoader />
      </div>
    );
  };

  return (
    <>
      <button
        key={btnKey}
        type={type}
        className={mergedButtonClasses}
        disabled={disabled || isLoading}
        onClick={onClick}
        style={styles}
        {...props}
      >
        <RenderButtonContent />
      </button>
    </>
  );
};

export default Button;
