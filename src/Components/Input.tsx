"use-client";

import tw, { styled } from "twin.macro";

const Input = styled.input(
  ({ $leftIcon, $rightIcon }: { $leftIcon: boolean; $rightIcon: boolean }) => [
    tw`w-full outline-none border-none`,
    $leftIcon && tw`pl-2`,
    $rightIcon && tw`pr-2`,
  ]
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

const InputComponent = ({
  leftIcon,
  rightIcon,
  error,
  ...rest
}: InputProps) => {
  return (
    <div tw="mb-8">
      <div tw="flex items-center border-2 py-2 px-3 rounded-2xl ">
        {leftIcon && leftIcon}
        <Input
          $leftIcon={Boolean(leftIcon)}
          $rightIcon={Boolean(rightIcon)}
          {...rest}
        />
        {rightIcon && rightIcon}
      </div>
      {error && error.length > 0 && (
        <p
          id={`${rest.id}-error`}
          tw="text-red-500 ml-2.5 mt-1 text-xs font-semibold"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InputComponent;
